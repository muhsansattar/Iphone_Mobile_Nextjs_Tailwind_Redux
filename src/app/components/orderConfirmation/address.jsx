'use client'
import { useState } from 'react';
import { FiX, FiEdit2 } from "react-icons/fi";
import { FaPlusCircle } from 'react-icons/fa';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { addtoAddress, removeToAddress } from '@/app/redux/actions/actions';

const AddAddressForm = () => {
  const allAddresses=useSelector(state=>state?.mobileReducer?.selectedAddress)
  const dispatch=useDispatch()
  const [showForm, setShowForm] = useState(false);
  const [newAddress, setNewAddress] = useState({});

  const toggleFormVisibility = () => {
    setShowForm(!showForm);
  };

  const handleInputChange = (e) => {
    setNewAddress({ ...newAddress, [e.target.name]: e.target.value });
  };

  const handleAddAddress = (e) => {
    e.preventDefault();
    if (newAddress.address && newAddress.city && newAddress.mobile) {
      const addressWithId={...newAddress,id:allAddresses.length+1}
      dispatch(addtoAddress(addressWithId))
      setNewAddress({ address: '', city: '', mobile: '', type: 'Home' });
      setShowForm(false);
    }
  };

  const handleDeleteAddress = (id) => {
    dispatch(removeToAddress(id))
  };

  const handleEditAddress = (id) => {
    const addressToEdit = allAddresses.find(address => address.id === id);
    if (addressToEdit) {
      setNewAddress(addressToEdit);
      handleDeleteAddress(id);
      setShowForm(true);
    }
  };

  return (
    <div className="p-4 font-sfPro sm:py-12 sm:px-20 px-4">
      <h1 className="text-[#17183B] font-semibold text-xl mb-8">Select Address</h1>
      {allAddresses.map((address) => (
        <div key={address.id} className="flex justify-between items-center p-4 mb-4 border rounded-lg bg-[#F6F6F6]">
          <div className="flex gap-2 items-center">
            <input type="radio" />
            <div className="flex flex-col">
              <div className="flex gap-2 items-center">
                <p className="font-medium text-lg">{address.address}</p>
                <p className="bg-black text-white py-1 px-2 rounded font-medium text-xs">{address.type}</p>
              </div>
              <p className="text-sm font-medium text-[#17183B]">{address.city}</p>
              <p className="text-sm font-medium text-[#17183B]">{address.mobile}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button onClick={() => handleEditAddress(address.id)}>
              <FiEdit2 className="text-black fill-black hover:fill-blue-500 hover:text-blue-500" size={20}/>
            </button>
            <button onClick={() => handleDeleteAddress(address.id)}>
              <FiX className="text-black hover:text-red-500" size={20}/>
            </button>
          </div>
        </div>
      ))}
      
      <button
        onClick={toggleFormVisibility}
        className="text-black rounded-full transition-all flex justify-center items-center mx-auto mt-6"
      >
        <FaPlusCircle className="text-xl" />
      </button>
      
      {showForm && (
        <form    
        onClick={handleAddAddress}
        className="mt-4 space-y-4">
          <input
            type="text"
            name="address"
            value={newAddress.address}
            onChange={handleInputChange}
            placeholder="Enter Address"
            className="w-full sm:w-1/2 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div>
            <label htmlFor="address-type" className="block mb-2">Address Type</label>
            <select
              id="address-type"
              name="type"
              value={newAddress.type}
              onChange={handleInputChange}
              className="w-full sm:w-1/2 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Home">Home</option>
              <option value="Office">Office</option>
            </select>
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-4 gap-2">
            <input
              type="text"
              name="city"
              value={newAddress.city}
              onChange={handleInputChange}
              placeholder="Enter City"
              className="w-full sm:w-1/2 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="mobile"
              value={newAddress.mobile}
              onChange={handleInputChange}
              placeholder="Mobile Number"
              className="w-full sm:w-1/2 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition-all"
          >
            Add New Address
          </button>
        </form>
      )}

      <div className="mt-10 flex justify-end gap-6">
          <Link href={'/pages/ShoppingCart'}>
          <button className="text-black py-4 px-4 sm:px-[5.375rem] rounded-md border border-black">
          Back
          </button>
          </Link>
          <Link href={'/pages/Shipping'}>
          <button className="bg-black text-white py-4 px-4 sm:px-[5.375rem] rounded-md">
          Next
          </button>
          </Link>
      </div>
    </div>
    );
};

export default AddAddressForm;
