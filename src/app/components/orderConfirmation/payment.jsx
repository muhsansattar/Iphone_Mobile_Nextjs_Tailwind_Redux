'use client'
import { useSelector } from "react-redux";
import { useState } from "react";
import Link from "next/link";

const Payment = () => {
  const [value, setValue] = useState({
    cardholder: '',
    cardnumber: '',
    expdate: '',
    cvv: ''
  });

  // Getting products selected in cart, address, and shipping method from redux store
  const cartProducts = useSelector(state => state?.mobileReducer?.cartData);
  const selectedAddress = useSelector(state => state?.mobileReducer?.selectedAddress);
  const shippingMethod = useSelector(state => state?.mobileReducer?.selectedShipping);

  // Calculate subtotal
  const subtotal = cartProducts.reduce((total, item) => total + item.price, 0);

  // Calculate estimated tax
  const estimatedTax = subtotal * 0.08;

  // Calculate estimated shipping and handling
  const baseShipping = shippingMethod?.rate || 0;
  const weightFactor = 1.5;
  const shippingDistanceFactor = 2;

  const estimatedShipping = cartProducts.length > 0
    ? baseShipping * weightFactor * shippingDistanceFactor
    : 0;

  // Calculate total
  const total = subtotal + estimatedTax + estimatedShipping;

  // Handle input change
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.cardholder && value.cardnumber && value.expdate && value.cvv) {
      alert(`Your order is successfully submitted and will be delivered by ${new Date(shippingMethod?.date).toLocaleDateString()}`);
    } else {
      alert('Please fill in all payment details.');
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-6 lg:p-12">
      {/* Summary section */}
      <div className="flex-1 p-6 border rounded-lg ">
        <h1 className="text-2xl font-semibold mb-6">Summary</h1>
        <div className="flex flex-col gap-4 mb-6">
          {cartProducts.map((order) => (
            <div key={order.id} className="flex justify-between items-center bg-[#F6F6F6] py-4 rounded-lg shadow-sm">
              <div className="flex gap-4 items-center">
                <img src={order.thumbnail} alt={order.title} className="w-16 h-16 object-cover rounded-lg" />
                <p className="text-sm font-medium">{order.description}</p>
              </div>
              <p className="text-lg font-semibold">${order.price.toFixed(2)}</p>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <div>
            <h2 className="text-md font-medium text-[#545454]">Address</h2>
            {selectedAddress?.length > 0 ? (
              selectedAddress.map((address, index) => (
                <p key={index} className="text-base">{address.address}</p>
              ))
            ) : (
              <p className="text-base">No address selected</p>
            )}
          </div>
          <div>
            <h2 className="text-lg font-medium text-[#545454]">Shipment Method</h2>
            <p className="text-base font-medium">{shippingMethod?.id || 'No shipping method selected'}</p>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <p className="text-base font-medium">Subtotal</p>
              <p className="text-base font-medium">${subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-base font-medium text-[#545454]">Estimated Tax</p>
              <p className="text-base font-medium">${estimatedTax.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-base font-medium text-[#545454]">Estimated Shipping & Handling</p>
              <p className="text-base font-medium">${estimatedShipping.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-base font-medium">Total</p>
              <p className="text-base font-medium">${total.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Payment section */}
      <div className="flex-1 p-6 rounded-lg ">
        <h1 className="text-2xl font-semibold mb-6">Payment</h1>
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <button className="text-[#717171] hover:text-black hover:underline px-2 w-full sm:w-auto transition-colors">
            <Link href="/" className="text-md font-medium">Credit Card</Link>
          </button>
          <button className="text-[#717171] hover:text-black hover:underline px-2 w-full sm:w-auto transition-colors">
            <Link href="/" className="text-md font-medium">PayPal</Link>
          </button>
          <button className="text-[#717171] hover:text-black hover:underline px-2 w-full sm:w-auto transition-colors">
            <Link href="/" className="text-md font-medium">PayPal Credit</Link>
          </button>
        </div>
        <img src="/images/credit-card.jpg" alt="Credit Card" className="h-auto object-cover rounded-lg mb-6 shadow-sm" />
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="cardholder"
            placeholder="Cardholder Name"
            onChange={handleChange}
            value={value.cardholder}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="cardnumber"
            onChange={handleChange}
            value={value.cardnumber}
            placeholder="Card Number"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex gap-4">
            <input
              type="text"
              name="expdate"
              onChange={handleChange}
              value={value.expdate}
              placeholder="Exp. Date"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="cvv"
              onChange={handleChange}
              value={value.cvv}
              placeholder="CVV"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" name="sameAsBilling" id="sameAsBilling" className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500" />
            <label htmlFor="sameAsBilling" className="text-sm">Same as billing address</label>
          </div>
        </form>

        <div className="mt-10 flex   justify-center gap-6">
          <Link href={'/pages/Shipping'}
            className="text-black w-full py-4 rounded-md border border-black hover:bg-gray-100 transition-colors text-center">
            Back
          </Link>
          <Link href={'/'}
            className="bg-black  text-white w-full py-4 rounded-md hover:bg-gray-800 transition-colors text-center"
            onClick={handleSubmit}
          >
            Pay
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Payment;
