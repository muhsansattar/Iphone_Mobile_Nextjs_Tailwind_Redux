'use client'
import Link from "next/link";
import { FiSmartphone, FiCpu, FiCamera, FiHome, FiTruck } from "react-icons/fi";
import { MdBatteryChargingFull } from "react-icons/md";
import { FaCertificate } from "react-icons/fa";
const memory = ['128GB', '256GB', '512GB', '1TB'];
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addToCart, addToWishlist } from "@/app/redux/actions/actions";
const mobileDetails = [
    {
        img: FiSmartphone,
        mName: 'Screen size',
        mVal: '6.7"'
    },
    {
        img: FiCpu,
        mName: 'CPU',
        mVal: 'Apple A16 Bionic'
    },
    {
        img: FiCpu,
        mName: 'Number of Cores',
        mVal: '6'
    },
    {
        img: FiCamera,
        mName: 'Main camera',
        mVal: '48-12 -12 MP'
    },
    {
        img: FiCamera,
        mName: 'Front-camera',
        mVal: '12 MP'
    },
    {
        img: MdBatteryChargingFull,
        mName: 'Battery capacity',
        mVal: '4323 mAh'
    },

]
const ItemDetails = () => {
    // here i am gonna updating state of the small image so that when it is clicked it should show on the thumbnail
    const [selectedImage, setSelectedImage] = useState('')
    const data = useSelector(state => state?.mobileReducer?.selectedMobile)
    const likedItems=useSelector(state=>state?.mobileReducer?.likedItems)
    const dispatch=useDispatch()
     // here i am gonna writing a function which will change the image 
     const handleChangeImage = (image) => {
        setSelectedImage(image)
    }   
    // here i am gonna dispatching a function to change state of redux store
    const handleAddToCart=(addData)=>{
        dispatch(addToCart(addData))
    }
    // a function to a productg in the wish list
    const handleAddToWishlist=(product)=>{
        const isItemInTheCart=likedItems.some((item)=>item.id===product.id)
        if(!isItemInTheCart){
            dispatch(addToWishlist(product))
        }
        else{
            alert("Already in wishlist")
        }
    }
    if (!data) {
        return <div>
            <p className="text-2xl font-sfPro font-bold text-center my-4">No Product Selected</p>
            </div>
    }
    return (
        <div>
            <div className="flex py-[7rem] px-[10rem] gap-4">
                {/* images section */}
                <div className="flex-1 flex justify-around py-[5rem]">
                    <div className="w-1/4 flex flex-col py-9 justify-enter items-center">
                        {data.images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Product image ${index}`}
                                className="w-[4.57rem] h-[5.81rem] object-cover mb-2"
                                onClick={() => handleChangeImage(image)}
                            />
                        ))}
                    </div>
                    <div className="w-3/4 ">
                        <img 
                        src={selectedImage? selectedImage: data.thumbnail} 
                        alt={data.title} 
                        className="w-full" />
                    </div>
                </div>

                {/* Details Section */}
                <div className="flex-1 font-sfPro">
                    <div><h1 className="font-bold text-black text-[2.5rem]">{data.title}</h1></div>
                    <div className="mt-6 flex  items-center gap-2">
                        <span className="text-[2rem] font-medium text-black">${data.price}</span>
                        <span className="text-[#A0A0A0] text-[1.5rem] font-light line-through">${data.price + 10}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-base font-light text-[#0C0C0C]">Select color:</span>
                        <span className="bg-[#000000] w-5 h-5 inline-block rounded-full"></span>
                        <span className="bg-[#781DBC] w-5 h-5 inline-block rounded-full"></span>
                        <span className="bg-[#E10000] w-5 h-5 inline-block rounded-full"></span>
                        <span className="bg-[#E1B000] w-5 h-5 inline-block rounded-full"></span>
                        <span className="bg-[#E8E8E8] w-5 h-5 inline-block rounded-full"></span>
                    </div>
                    <div className="list-none grid grid-cols-4 gap-4 my-6">
                        {memory.map((mem, index) => (
                            <li key={index} className="text-center py-4 px-6 border border-[#D5D5D5] rounded-lg">{mem}</li>
                        ))}
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        {mobileDetails.map((mobile, index) => (
                            <div key={index} className="p-4 bg-[#F4F4F4] flex rounded-lg">
                                <div key={index} className="flex justify-center items-center">
                                    {<mobile.img className="w-[2rem] h-[1.5rem]" />}
                                    <div>
                                        <p className="text-[#A7A7A7] font-medium text-md">{mobile.mName}</p>
                                        <p className="text-[#4E4E4E] font-medium text-md">{mobile.mVal}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 mb-8">
                        <p className="text-md font-medium text-[#6C6C6C] leading-6">{data.description}</p>
                    </div>
                    <div className="flex justify-center gap-4 text-center items-center mb-8">
                        <button className="border py-4 px-[4.75rem] rounded-md font-medium text-base"
                            onClick={()=>handleAddToWishlist(data)}
                            >Add to Wishlist
                        </button>
                        <button className="border py-4 px-[4.75rem] bg-black rounded-md">
                            <Link 
                                href={'/pages/ShoppingCart'} 
                                className="font-medium text-base text-white"
                                onClick={()=>handleAddToCart(data)}
                                >
                                    Add to Cart
                            </Link>
                        </button>
                    </div>
                    <div className="grid grid-cols-3">
                        <div className="flex justify-center items-center gap-4">
                            <div className="bg-[#F6F6F6] p-4 rounded-[0.6875rem]"><FiTruck className="w-[1.5rem] h-[1.5rem] text-[#797979]" /></div>
                            <div>
                                <p className="font-medium text-md text-[#717171]">Free Delivery</p>
                                <p className="font-semibold text-md text-black">1-2 day</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-4">
                            <div className="bg-[#F6F6F6] p-4 rounded-[0.6875rem]"><FiHome className="w-[1.5rem] h-[1.5rem] text-[#797979]" /></div>
                            <div>
                                <p className="font-medium text-md text-[#717171]">In Stock</p>
                                <p className="font-semibold text-md text-black">Today</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-4">
                            <div className="bg-[#F6F6F6] p-4 rounded-[0.6875rem]"><FaCertificate className="w-[1.5rem] h-[1.5rem] text-[#797979]" /></div>
                            <div>
                                <p className="font-medium text-md text-[#717171]">Guaranteed</p>
                                <p className="font-semibold text-md text-black">1 year</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetails;