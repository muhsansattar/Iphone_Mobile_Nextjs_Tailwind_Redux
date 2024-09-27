
'use client'
import { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FiHeart } from "react-icons/fi";
import { addToCart, addToWishlist, fetchMobiles, removeToCart, removeToWishlist, selectMobile } from "@/app/redux/actions/actions";
import Link from "next/link";
import ReactPaginate from 'react-paginate';

const Products = ({ selectedBrand }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 6;

    const appleProducts = useSelector((state) => state?.mobileReducer?.mobiles);
    const wishlistProducts = useSelector((state) => state?.mobileReducer?.likedItems);
    const cartItems = useSelector(state => state?.mobileReducer?.cartData);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMobiles());
    }, [dispatch]);

    const alreadyLiked = (product) => wishlistProducts.some((item) => item.id === product.id);

    const handleWishList = (product) => {
        if (alreadyLiked(product)) {
            dispatch(removeToWishlist(product.id));
        } else {
            dispatch(addToWishlist(product));
        }
    };

    const isProductInCart = (product) => cartItems.some(item => item.id === product.id);

    const handleCart = (product) => {
        if (isProductInCart(product)) {
            dispatch(removeToCart(product.id));
            alert('Product is Removed from the cart');
        } else {
            dispatch(addToCart(product));
            alert('Product is Added to the cart');
        }
    };

    const filteredProducts = useMemo(() => {
        return appleProducts?.filter((product) => {
            const matchesBrand = selectedBrand ? product.brand === selectedBrand : true;
            const matchesSearchTerm = product.title.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesBrand && matchesSearchTerm;
        });
    }, [appleProducts, searchTerm, selectedBrand]);

    const offset = currentPage * itemsPerPage;
    const currentItems = filteredProducts.slice(offset, offset + itemsPerPage);
    const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);

    const handlePageClick = (event) => {
        setCurrentPage(event.selected);
    };

    const handleImageClick = (product) => {
        dispatch(selectMobile(product));
    };

    return (
        <div className="w-full md:w-3/4 p-4 font-sfPro">
            <div className="flex justify-between items-center mb-4">
                <div>
                    <span className="text-base font-medium text-[#6C6C6C]">
                        Selected Product: {selectedBrand || 'All'}
                    </span>
                    <span className="text-black text-lg font-bold ml-2">
                        {filteredProducts?.length || 0} items
                    </span>
                </div>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border p-2 rounded-md"
                />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {currentItems?.map((product) => (
                    <div
                        key={product.id}
                        className="flex flex-col justify-between border py-6 px-4 rounded-lg bg-[#F6F6F6] text-center h-full"
                    >
                        <FiHeart
                            className={`self-end cursor-pointer mb-2 transition-colors duration-300 ${
                                alreadyLiked(product)
                                    ? 'fill-red-600 stroke-none'
                                    : 'text-gray-500 hover:text-red-600'
                            }`}
                            onClick={() => handleWishList(product)}
                            size={28}
                        />
                        <Link href={'/pages/productDetails'} passHref>
                            <img
                                src={product.thumbnail}
                                alt={product.title}
                                className="h-[100px] mx-auto cursor-pointer"
                                onClick={() => handleImageClick(product)}
                            />
                        </Link>
                        <p className="text-base mt-4">{product.description}</p>
                        <p className="text-base mt-4 font-bold">${product.price}</p>
                        <button
                        className={`text-white mt-4 ${isProductInCart(product)?'bg-green-500':'bg-black'}  py-4 px-4 rounded transition-colors duration-300`}
                        onClick={()=>handleCart(product)}
                        >
                            {isProductInCart(product)?'Remove From Cart':'Add To Cart'}
                        </button>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-8">
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    breakLabel={"..."}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    activeClassName={"active"}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link"}
                    previousClassName={"page-item"}
                    previousLinkClassName={"page-link"}
                    nextClassName={"page-item"}
                    nextLinkClassName={"page-link"}
                    breakClassName={"page-item"}
                    breakLinkClassName={"page-link"}
                />
            </div>
        </div>
    );
};

export default Products;
