'use client';
import { useSelector, useDispatch } from "react-redux";
import { FiX } from "react-icons/fi";
import { useState, useMemo } from "react";
import { removeToCart } from "@/app/redux/actions/actions";
import Link from "next/link";

// Constants
const TAX_RATE = 0.08;
const BASE_SHIPPING = 20;
const WEIGHT_FACTOR = 1.5;
const SHIPPING_DISTANCE_FACTOR = 2;

// Reusable InputField Component
const InputField = ({ label, placeholder, id, type = "text", extraClass = "", onClick }) => (
  <div className="mb-4 relative">
    <label htmlFor={id} className="block text-sm font-medium text-gray-600 mb-1">{label}</label>
    <input type={type} id={id} className={`w-full p-4 border rounded-lg focus:ring focus:ring-blue-200 ${extraClass}`} placeholder={placeholder} />
    {onClick && (
      <button className="absolute top-8 right-4 text-black px-5 py-2 rounded-md shadow-md border border-black" onClick={onClick}>
        Apply
      </button>
    )}
  </div>
);

// Cart Item Component
const CartItem = ({ order, quantity, onIncrease, onDecrease, onRemove }) => (
  <div className="flex items-center mb-6 border-b pb-4">
    <img src={order.thumbnail} alt={order.title} className="w-20 h-20 object-cover rounded-md mr-4" />
    <div className="flex-1">
      <h2 className="text-lg font-medium text-gray-700">{order.title}</h2>
      <p className="text-sm text-gray-500">{order.description}</p>
    </div>
    <div className="flex items-center">
      <button className="text-2xl text-gray-500 mx-2" onClick={onDecrease}>-</button>
      <span className="text-lg font-medium mx-2">{quantity}</span>
      <button className="text-2xl text-gray-500 mx-2" onClick={onIncrease}>+</button>
    </div>
    <p className="text-lg font-semibold text-gray-700">${(order.price * quantity).toFixed(2)}</p>
    <button className="ml-4 text-gray-400 hover:text-red-600" onClick={onRemove}>
      <FiX size={20} />
    </button>
  </div>
);

// Order Summary Component
const OrderSummary = ({ subtotal, estimatedTax, estimatedShipping, total }) => (
  <div className="flex-1 bg-white p-6 rounded-lg border font-sfPro">
    <h2 className="text-2xl font-semibold text-gray-800">Order Summary</h2>
    <InputField label="Discount code / Promo code" placeholder="Enter Code" id="discountCode" />
    <InputField label="Your bonus card number" placeholder="Enter Card Number" id="bonusCard" extraClass="p-4" />
    <div className="flex justify-between text-lg font-medium text-black mb-2">
      <span>Subtotal</span>
      <span>${subtotal.toFixed(2)}</span>
    </div>
    <div className="flex justify-between text-lg font-medium text-gray-500 mb-2">
      <span>Estimated Tax</span>
      <span className="text-black">${estimatedTax.toFixed(2)}</span>
    </div>
    <div className="flex justify-between text-lg font-medium text-gray-500 mb-6">
      <span>Estimated Shipping & Handling</span>
      <span className="text-black">${estimatedShipping.toFixed(2)}</span>
    </div>
    <div className="flex justify-between text-xl font-semibold text-gray-800 mb-6">
      <span>Total</span>
      <span>${total.toFixed(2)}</span>
    </div>
    <Link href={'cart'}>
      <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-green-700">Checkout</button>
    </Link>
  </div>
);

const Cart = () => {
  const [quantities, setQuantities] = useState({});
  const orders = useSelector((state) => state?.mobileReducer?.cartData);
  const dispatch = useDispatch();

  const handleIncrease = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  const handleDecrease = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 1) - 1, 1),
    }));
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeToCart(id));
    setQuantities((prev) => {
      const updatedQuantities = { ...prev };
      delete updatedQuantities[id];
      return updatedQuantities;
    });
  };

  // Memoized Calculation
  const subtotal = useMemo(() => orders.reduce((total, order) => total + order.price * (quantities[order.id] || 1), 0), [orders, quantities]);
  const estimatedTax = useMemo(() => subtotal * TAX_RATE, [subtotal]);
  const estimatedShipping = useMemo(() => orders.length ? BASE_SHIPPING * WEIGHT_FACTOR * SHIPPING_DISTANCE_FACTOR : 0, [orders.length]);
  const total = useMemo(() => subtotal + estimatedTax + estimatedShipping, [subtotal, estimatedTax, estimatedShipping]);

  if (!orders || orders.length === 0) {
    return <div className="text-xl font-sfPro font-bold text-center my-4">Nothing in the cart</div>;
  }

  return (
    <div className="min-h-screen py-10 px-4 md:px-16 font-sfPro">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Product section */}
        <div className="flex-1 bg-white p-6 rounded-lg ">
          <h1 className="text-3xl font-semibold mb-8 text-gray-800">Shopping Cart</h1>
          {orders.map((order) => (
            <CartItem
              key={order.id}
              order={order}
              quantity={quantities[order.id] || 1}
              onIncrease={() => handleIncrease(order.id)}
              onDecrease={() => handleDecrease(order.id)}
              onRemove={() => handleRemoveFromCart(order.id)}
            />
          ))}
        </div>
        {/* Summary Section */}
        <OrderSummary
          subtotal={subtotal}
          estimatedTax={estimatedTax}
          estimatedShipping={estimatedShipping}
          total={total}
        />
      </div>
    </div>
  );
};

export default Cart;
