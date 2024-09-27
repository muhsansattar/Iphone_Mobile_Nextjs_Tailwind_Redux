'use client'
import { addToCart, removeToCart, removeToWishlist, selectMobile } from "@/app/redux/actions/actions";
import Link from "next/link";
import { FiHeart } from "react-icons/fi";
import { useSelector,useDispatch } from "react-redux";

function Wishlist() {
    // Fetching data from the Redux store
    const likedItems = useSelector((state) => state?.mobileReducer?.likedItems);
    const selectedMobiles=useSelector(state=>state?.mobileReducer?.cartData);
    const dispatch=useDispatch()
    // a function to delete products from the wishlist
    const handleDeleteLikedProduct=(product)=>{
        dispatch(removeToWishlist(product.id))
    }
    // a function to add the specific product in the details page
    const handleSelectMobile=(product)=>{
        dispatch(selectMobile(product))
    }
    // a function to check the product is in the cart or not
    const isProductInCart=(likee)=>{
        return selectedMobiles.some(item=>item.id===likee.id)
    }
    // a function to add the product in the cart
    const handleCart=(product)=>{
        if(!isProductInCart(product)){
            dispatch(addToCart(product))
            alert("Product is Added in the cart")
        }
        else{
            dispatch(removeToCart(product.id))
            alert("Product is removed from the cart")
        }
    }
    if (!likedItems || likedItems.length === 0) {
        return (
            <div className="font-sfPro text-center my-4 font-bold text-xl">
                There is nothing in the wishlist.
            </div>
        );
    }

    return (
        <div className="container mx-auto py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {likedItems.map((likee, index) => (
                    <div 
                        key={index} 
                        className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="p-4 flex flex-col justify-between items-center">
                            <FiHeart 
                            size={24} 
                            className="text-red-500 self-end fill-red-500 cursor-pointer"
                            onClick={()=>handleDeleteLikedProduct(likee)}
                            />
                            <Link href="productDetails">
                                <img 
                                    src={likee.thumbnail} 
                                    alt={likee.title} 
                                    className="w-full h-48 object-cover rounded-lg"
                                    onClick={()=>handleSelectMobile(likee)}
                                />
                            </Link>
                        </div>
                        <div className="p-4 text-center">
                            <p className="font-sfPro font-medium text-gray-700 mb-2">
                                {likee.description}
                            </p>
                            <p className="font-sfPro font-semibold text-2xl text-black mb-4">
                                ${likee.price}
                            </p>
                            <button 
                                className={` ${isProductInCart(likee)?'bg-green-500':'bg-black'} text-white py-4 px-8 rounded-lg hover:bg-gray-800 transition-colors duration-300`}
                                onClick={()=>handleCart(likee)}
                            >
                                {isProductInCart(likee)?'Remove From Cart':'Add To Cart'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Wishlist;
