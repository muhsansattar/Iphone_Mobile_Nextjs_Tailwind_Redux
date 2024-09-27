'use client'
import { GoLocation } from "react-icons/go";
import { FaShoppingCart, FaCreditCard } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";

const OrderButtons = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <div className="flex flex md:flex-row justify-between py-6 px-4 md:py-[4.5rem] md:px-[10rem] space-y-4 md:space-y-0">
      {/* Address Button */}
      <Link href="/pages/Address">
        <button
          className={`flex items-center p-2 text-lg md:text-xl font-medium ${
            pathname === "/pages/Address" ? "text-black" : "text-[#B2B2B2]"
          }`}
        >
          <GoLocation className="mr-2" />
          <div className="flex flex-col">
            <span className="text-sm md:text-base">Step 1</span>
            <span>Address</span>
          </div>
        </button>
      </Link>

      {/* Shipping Button */}
      <Link href="/pages/Shipping">
        <button
          className={`flex items-center p-2 text-lg md:text-xl font-medium ${
            pathname === "/pages/Shipping" ? "text-black" : "text-[#B2B2B2]"
          }`}
        >
          <FaShoppingCart className="mr-2" />
          <div className="flex flex-col">
            <span className="text-sm md:text-base">Step 2</span>
            <span>Shipping</span>
          </div>
        </button>
      </Link>

      {/* Payment Button */}
      <Link href="/pages/Payment">
        <button
          className={`flex items-center p-2 text-lg md:text-xl font-medium ${
            pathname === "/pages/Payment" ? "text-black" : "text-[#B2B2B2]"
          }`}
        >
          <FaCreditCard className="mr-2" />
          <div className="flex flex-col">
            <span className="text-sm md:text-base">Step 3</span>
            <span>Payment</span>
          </div>
        </button>
      </Link>
    </div>
  );
};

export default OrderButtons;
