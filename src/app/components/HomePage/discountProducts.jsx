
'use client'
import React, { useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, addToWishlist, fetchMobiles, removeToCart, removeToWishlist, selectMobile } from "@/app/redux/actions/actions";
import ProductCard from './ProductCard';

const DiscountProducts = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMobiles());
    }, [dispatch]);

    const discountProducts = useSelector((state) => state?.mobileReducer?.mobiles);
    const cartItems = useSelector((state) => state?.mobileReducer?.cartData);
    const likedItems = useSelector((state) => state?.mobileReducer?.likedItems);

    const isProductLiked = (product) => likedItems.some((item) => item.id === product.id);
    const isProductInCart = (product) => cartItems.some((item) => item.id === product.id);

    const handleWishlistToggle = (product) => {
        if (isProductLiked(product)) {
            dispatch(removeToWishlist(product.id));
        } else {
            dispatch(addToWishlist(product));
        }
    };

    const handleCartToggle = (product) => {
        if (isProductInCart(product)) {
            dispatch(removeToCart(product.id));
            alert('Product removed from the cart');
        } else {
            dispatch(addToCart(product));
            alert('Product added to the cart');
        }
    };

    const handleImageClick = (product) => {
        dispatch(selectMobile(product));
    };

    const productsToShow = useMemo(() => discountProducts.slice(0, 4), [discountProducts]);

    return (
        <div className="mx-auto py-8 px-4 sm:px-6 lg:py-12 lg:px-16">
            <p className="font-sfPro text-2xl sm:text-3xl font-medium leading-tight mb-6 lg:mb-8 text-center lg:text-left">
                Discounts up to -50%
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                {productsToShow.map((product) => (
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

export default DiscountProducts;
