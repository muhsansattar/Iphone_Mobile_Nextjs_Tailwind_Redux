
'use client'
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, fetchMobiles, selectMobile, addToWishlist, removeToCart, removeToWishlist } from "@/app/redux/actions/actions";
import ProductCard from './ProductCard';
import Link from "next/link";

const ProductsCategory = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchMobiles());
    }, [dispatch]);

    const apples = useSelector((state) => state?.mobileReducer?.mobiles);
    const cartItems = useSelector((state) => state?.mobileReducer?.cartData);
    const likedItems = useSelector((state) => state?.mobileReducer?.likedItems);

    const isProductInCart = (product) => cartItems.some(item => item.id === product.id);
    const isProductLiked = (product) => likedItems.some(item => item.id === product.id);

    const handleCartToggle = (product) => {
        if (isProductInCart(product)) {
            dispatch(removeToCart(product.id));
            alert("Product removed from the cart");
        } else {
            dispatch(addToCart(product));
            alert("Product added to the cart");
        }
    };

    const handleWishlistToggle = (product) => {
        if (isProductLiked(product)) {
            dispatch(removeToWishlist(product.id));
        } else {
            dispatch(addToWishlist(product));
        }
    };

    const handleImageClick = (product) => {
        dispatch(selectMobile(product));
    };

    return (
        <div className="container mx-auto my-14">
            <div className="p-6">
                <ul className="flex gap-[2rem]">
                    <li><Link href={'/'}>New Arrival</Link></li>
                    <li><Link href={'/'}>Best Seller</Link></li>
                    <li><Link href={'/'}>Featured Products</Link></li>
                </ul>
            </div>
            <div className="bg-white p-6 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {apples.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        isProductLiked={isProductLiked(product)}
                        isProductInCart={isProductInCart(product)}
                        onWishlistToggle={handleWishlistToggle}
                        onCartToggle={handleCartToggle}
                        onImageClick={handleImageClick}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductsCategory;
