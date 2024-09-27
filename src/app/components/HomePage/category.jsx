'use client'
import { useState } from "react";
import categories from "@/Data/catagories";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Categories = () => {
  const [position, setPosition] = useState(0);
  const categoryWidth = 200; // Approximate width of a category item (adjust as needed)
  const totalItems = categories.length;

  const handleMoveLeft = () => {
    // Move left one item at a time and wrap around if at the start
    setPosition((prev) =>
      prev === 0 ? -(totalItems - 1) * categoryWidth : prev + categoryWidth
    );
  };

  const handleMoveRight = () => {
    // Move right one item at a time and wrap around if at the end
    setPosition((prev) =>
      prev === -(totalItems - 1) * categoryWidth ? 0 : prev - categoryWidth
    );
  };

  return (
    <div className="bg-[#FAFAFA] py-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8 px-4">
          <p className="text-xl font-semibold">Browse By Category</p>
          <div className="flex">
            <span onClick={handleMoveLeft}>
              <FiChevronLeft size={28} className="cursor-pointer" />
            </span>
            <span onClick={handleMoveRight}>
              <FiChevronRight size={28} className="cursor-pointer" />
            </span>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(${position}px)` }}
          >
            {categories.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[200px] flex flex-col justify-center items-center bg-[#EDEDED] rounded-xl p-6 mx-2 hover:shadow-md transition-shadow"
              >
                <item.icon className="text-4xl mb-4 text-gray-700" />
                <p className="text-center text-gray-800 font-medium">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
