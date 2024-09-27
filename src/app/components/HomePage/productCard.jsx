'use client'
import React from 'react';
import { FiHeart } from "react-icons/fi";
import Link from 'next/link';

const ProductCard = ({
    product,
    isProductLiked,
    isProductInCart,
    onWishlistToggle,
    onCartToggle,
    onImageClick,
    bgColor,
}) => {
    return (
        <div
            style={{ backgroundColor: bgColor || '#F6F6F6' }}
            className="p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center"
        >
            {/* Wishlist icon */}
            <div className="self-end w-full flex justify-end">
                <FiHeart
                    onClick={() => onWishlistToggle(product)}
                    className={`cursor-pointer ${isProductLiked ? 'fill-red-500 stroke-none' : 'text-gray-500'} transition-colors duration-200`}
                    size={24}
                />
            </div>

            {/* Image */}
            <Link href={'/pages/productDetails'} className='flex justify-center items-center w-full h-40'>
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="max-h-full w-auto rounded-lg mb-4 cursor-pointer object-contain"
                    onClick={() => onImageClick(product)}
                />
            </Link>

            {/* Description */}
            <p className={`font-sfPro font-medium text-sm sm:text-base leading-snug my-3 text-center min-h-[3rem] ${bgColor === '#2C2C2C' ? 'text-white' : 'text-black'}`}>
                {product.description}
            </p>

            {/* Price */}
            <p className={`font-sfPro font-semibold text-xl sm:text-2xl lg:text-3xl leading-tight text-center ${bgColor === '#2C2C2C' ? 'text-white' : 'text-black'}`}>
                ${product.price}
            </p>

            {/* Button */}
            <div className="mt-auto w-full">
                <button
                    onClick={() => onCartToggle(product)}
                    className={`py-2 sm:py-3 px-6 sm:px-8 lg:px-10 w-full ${isProductInCart ? 'bg-green-500' : 'bg-black'} rounded-lg mt-4 sm:mt-6 text-white`}
                >
                    {isProductInCart ? 'Remove from Cart' : 'Add to Cart'}
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
