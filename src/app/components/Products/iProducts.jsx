'use client'
import Filters from "./filter";
import { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import Link from "next/link";
import Products from "./selectedProduct";

const Iproducts= () => {
    const [selectedBrand, setSelectedBrand] = useState(null);

    return (
        <div className="border-t border-t-[#A4A4A4] py-6 md:px-[2rem] lg:px-[10rem]">
            <div>
                <button></button>
                <button></button>
            </div>
            <div className="flex items-center gap-[1rem] px-4 py-4">
                <Link href={'/'} className="text-[#A4A4A4] font-medium font-sfPro text-base">Home</Link>
                <span><FiChevronRight style={{ color: '#A4A4A4' }} /></span>
                <Link href={'/'} className="text-[#A4A4A4] font-medium font-sfPro text-base">Catalog</Link>
                <span><FiChevronRight style={{ color: '#A4A4A4' }} /></span>
                <Link href={'/'} className="text-black font-medium font-sfPro text-base">Smartphones</Link>
            </div>

            {/* Filters and Products */}
            <div className="flex">
                {/* Pass the setSelectedBrand function to Filters */}
                <Filters selectedBrand={selectedBrand} setSelectedBrand={setSelectedBrand} />
                {/* Pass selectedBrand to Products */}
                <Products selectedBrand={selectedBrand}/>
            </div>
        </div>
    );
}

export default Iproducts;
