'use client'
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";


const Filters = ({ setSelectedBrand, selectedBrand }) => {
    const [showOptions, setShowOptions] = useState({
        brand: false,
        batteryCapacity: false,
        screens: false,
        screenDiagonal: false,
    });

    const filters = [
        { label: 'Brand', value: 'brand' },
        { label: 'Battery Capacity', value: 'batteryCapacity' },
        { label: 'Screen Type', value: 'screenTypes' },
        { label: 'Screen Diagonal', value: 'screenDiagonal' },
        { label: 'Protection Glass', value: 'protectionGlass' },
        { label: 'Built-in Memory', value: 'builtInMemory' },
    ];

    const filterValues = [
        { label: 'brand', value: ['Apple', 'Samsung', 'Vivo', 'Beats', 'Oppo', 'honor', 'motorola', 'nokia', 'Realme'] },
        { label: 'batteryCapacity', value: ['2000mAh', '3000mAh', '4000mAh', '4500mAh', '5000mAh', '6000mAh', '7000mAh', '8000mAh', '9000mAh'] },
        { label: 'screenTypes', value: ['LCD', 'OLED', 'AMOLED', 'Super AMOLED', 'TFT', 'IPS', 'Retina', 'Dynamic AMOLED', 'Fluid AMOLED'] },
        { label: 'screenDiagonal', value: ['4.0 inches', '4.7 inches', '5.0 inches', '5.5 inches', '6.0 inches', '6.1 inches', '6.4 inches', '6.7 inches', '7.0 inches'] },
    ];

    const toggleOptions = (property) => {
        setShowOptions(prev => ({ ...prev, [property]: !prev[property] }));
    };

    const handleCheckBoxChange = (brand) => {
        setSelectedBrand(prev => (prev === brand ? null : brand));
    };

    return (
        <div className="hidden md:flex flex-col w-full md:w-1/4 p-4">
            <div className="mt-4">
                {filters.map((filter, index) => (
                    <div key={index} className="mt-4">
                        <div className="flex justify-between items-center" onClick={() => toggleOptions(filter.value)}>
                            <span className="text-base font-medium">{filter.label}</span>
                            <FiChevronDown className={`transform transition-transform ${showOptions[filter.value] ? 'rotate-180' : ''}`} />
                        </div>
                        {showOptions[filter.value] && (
                            <ul className="mt-2 space-y-2">
                                {filterValues.filter(v => v.label === filter.value)[0]?.value.map((brand, index) => (
                                    <div key={index} className="flex items-center">
                                        <input type="checkbox"
                                            checked={selectedBrand === brand}
                                            className="h-5 w-5 checked:bg-black rounded checked:border-transparent focus:ring-0	focus:ring-offset-0"
                                            onChange={() => handleCheckBoxChange(brand)}
                                        />
                                        <Link href={'/'} className="capitalize ml-4">
                                            {brand}
                                        </Link>
                                    </div>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Filters;
