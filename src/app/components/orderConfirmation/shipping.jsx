'use client'
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addShipping } from "@/app/redux/actions/actions";


const Shipping= () => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [customDate, setCustomDate] = useState('');
  const selectedShipping=useSelector(state=>state?.mobileReducer?.selectedShipping)
  const dispatch=useDispatch()
  // a function to pick the date 
const handleDatePick=(method)=>{
  const date=new Date()
  let selectedShip;
  switch(method){
    case 'free':
      date.setDate(date.getDate()+30);
      selectedShip={id:method, date: date.toJSON(), rate:0};
      break;
    case 'instant':
      date.setDate(date.getDate()+10)
      selectedShip={id:method, date:date.toJSON(), rate:8.50}  ;
      break;
    case 'schedule':
      if(customDate){
        selectedShip={id:method, date:customDate, rate:15}
      } else{
        alert("Please select a date for scheduled shipping.");
        return;
      }  
      break;
    default:
      return  
  }
  dispatch(addShipping(selectedShip))
}

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };
  const handleCustomDateChange = (e) => {
    setCustomDate(e.target.value);
  };

  return (
    <div className="py-8 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-20 2xl:px-32">
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-8">Shipping Method</h1>
      <div className="space-y-6">
        <div className="border p-4 sm:p-6 rounded-md">
          <div className="flex flex-col sm:flex-row justify-between text-gray-600 hover:text-black">
            <div className="flex items-center gap-4">
              <input 
              type="radio" 
              name="shipping"
              onClick={()=>handleDatePick('free')}
              />
              <div>
                <p className="font-medium">Free</p>
                <p className="text-sm">Regular shipment</p>
              </div>
            </div>
            <p className="text-sm mt-2 sm:mt-0">{selectedShipping?.id === 'free' ? new Date(selectedShipping.date).toLocaleDateString() : ''}</p>
          </div>
        </div>

        <div className="border p-4 sm:p-6 rounded-md">
          <div className="flex flex-col sm:flex-row justify-between text-gray-600 hover:text-black">
            <div className="flex items-center gap-4">
              <input 
              type="radio"
              name="shipping"
              onClick={()=>handleDatePick('instant')}
              />
              <div>
                <p className="font-medium">$8.50</p>
                <p className="text-sm">Get your delivery as soon as possible</p>
              </div>
            </div>
            <p className="text-sm mt-2 sm:mt-0">{selectedShipping?.id === 'instant' ? new Date(selectedShipping.date).toLocaleDateString() : ''}</p>
          </div>
        </div>

        <div className="border p-4 sm:p-6 rounded-md">
          <div className="flex flex-col sm:flex-row justify-between text-gray-600 hover:text-black">
            <div className="flex items-center gap-4">
              <input type="radio" name="shipping" onClick={()=>handleDatePick('schedule')}/>
              <div>
                <p className="font-medium">Schedule</p>
                <p className="text-sm">Pick a date when you want to get your delivery</p>
              </div>
            </div>
            <div
              className="flex items-center cursor-pointer mt-2 sm:mt-0"
              onClick={toggleDatePicker}
            >
              <span className="mr-2">Select Date</span>
              <FaChevronDown />
            </div>
          </div>
          {showDatePicker && (
                <input
                type="date"
                value={customDate}
                onChange={handleCustomDateChange}
                className="mt-2 p-2 border rounded-md w-full sm:w-[50%] focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
          )}
        </div>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row justify-end gap-4 sm:gap-6">
          <Link href={'/pages/Address'}>
          <button className="text-black py-4 px-8 sm:px-[5.375rem] rounded-md border border-black">
          Back
          </button>
          </Link>
          <Link href={'/pages/Payment'}>
          <button className="bg-black text-white py-4 px-8 sm:px-[5.375rem] rounded-md">
          Next
          </button>
          </Link>
      </div>
    </div>
  );
};

export default Shipping;
