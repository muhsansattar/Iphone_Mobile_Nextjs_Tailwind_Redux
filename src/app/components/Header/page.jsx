'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { FiHeart, FiShoppingCart, FiUser, FiSearch, FiX, FiMenu } from 'react-icons/fi';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import SearchResults from '../searchList/page';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const orders = useSelector((state) => state?.mobileReducer?.cartData);
  const likedItems = useSelector((state) => state.mobileReducer.likedItems);
  const allItems = useSelector(state => state?.mobileReducer?.mobiles);

  // Filter products based on the search term
  const filteredProducts = allItems?.filter((product) => {
    return product.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  // Open the overlay when the search term changes
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setIsOverlayOpen(true);
  };

  // Close the overlay
  const closeOverlay = () => {
    setIsOverlayOpen(false);
    setSearchTerm(''); // Optionally clear the search term when closing
  };

  return (
    <header className="container mx-auto bg-white py-4 px-10 flex items-center justify-between relative">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div>
          <Link href={'/'}>
            <Image
              src={'/images/cybericon.png'}
              alt='Cyber Company Logo'
              width={65.4}
              height={22.87}
              className='text-black'
            />
          </Link>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative mx-4 hidden md:block">
        <FiSearch className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500' />
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search..."
          className="w-[23.25rem] h-[56px] pl-12 pr-4 bg-[#F5F5F5] border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Navbar */}
      <nav className="hidden lg:flex space-x-4">
        <Link href="/" className="text-gray-700 hover:text-blue-500">
          Home
        </Link>
        <Link href="/pages/product" className="text-gray-700 hover:text-blue-500">
          All Products
        </Link>
        <Link href="/pages/cart" className="text-gray-700 hover:text-blue-500">
          Contact
        </Link>
        <Link href="/pages/productDetails" className="text-gray-700 hover:text-blue-500">
          Product Details
        </Link>
      </nav>

      {/* Icons */}
      <div className="hidden lg:flex items-center space-x-4 relative">
        <Link href={'/pages/wishlist'}>
          <FiHeart className="text-gray-700 hover:text-red-500 cursor-pointer" size={28} />
          {likedItems.length > 0 && (
            <span className='absolute top-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'>
              {likedItems.length}
            </span>
          )}
        </Link>

        <Link href={'/pages/ShoppingCart'}>
          <FiShoppingCart className="text-gray-700 hover:text-blue-500 cursor-pointer" size={28} />
          {orders.length > 0 && (
            <span className="absolute top-0 right-[2rem] bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {orders.length}
            </span>
          )}
        </Link>

        <FiUser className="text-gray-700 hover:text-green-500 cursor-pointer" size={28} />
      </div>

      {/* Toggle Button */}
      <div className='md:flex lg:hidden'>
        <button onClick={() => setIsNavOpen(!isNavOpen)} className='text-gray-700 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500'>
          {isNavOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Navbar */}
      {isNavOpen && (
        <div className='fixed top-24 right-0 md:right-4 md:top-16 w-full md:w-[10rem] text-center h-auto bg-gray-800 bg-opacity-90 p-4 rounded-lg lg:hidden'>
          <nav className='flex flex-col space-y-4'>
            <Link href='/' className='text-white hover:text-blue-500'>Home</Link>
            <Link href='/pages/product' className='text-white hover:text-blue-500'>About</Link>
            <Link href='/pages/cart' className='text-white hover:text-blue-500'>Contact</Link>
            <Link href='/pages/productDetails' className='text-white hover:text-blue-500'>Blog</Link>
          </nav>
        </div>
      )}

      {/* Search Results Component */}
      {isOverlayOpen && (
        <SearchResults
          searchTerm={searchTerm}
          filteredProducts={filteredProducts}
          closeOverlay={closeOverlay}
        />
      )}
    </header>
  );
};

export default Header;
