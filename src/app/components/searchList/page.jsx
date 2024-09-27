'use client'
import React from 'react';
import { FiX } from 'react-icons/fi';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { addToCart, selectMobile } from '@/app/redux/actions/actions';

const SearchResults = ({ searchTerm, filteredProducts, closeOverlay }) => {
  const dispatch=useDispatch()
  // a function to add this seaarched prodeuct in the cart
  const handleAddToSelect=(product)=>{
    dispatch(selectMobile(product))
    // close the over lay 
    closeOverlay()
  }
  return (
    <div className="fixed top-24 left-0 right-0 bg-white z-40 p-6 border-t shadow-lg overflow-y-auto max-h-[70vh]">
      <div className="relative">
        <button onClick={closeOverlay} className="absolute top-4 right-4 text-gray-700 hover:text-red-500">
          <FiX size={28} />
        </button>
        <h2 className="text-xl font-semibold mb-4">Search Results for "{searchTerm}"</h2>
        {filteredProducts.length > 0 ? (
          <ul className="space-y-4">
            {filteredProducts.map((product, index) => (
              <li key={index} className="border p-4 rounded-lg flex justify-between items-center">
                <span>{product.title}</span>
                <Link 
                href={`/pages/productDetails`} 
                className="text-blue-500 hover:text-blue-700"
                onClick={()=>handleAddToSelect(product)}
                >View</Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
