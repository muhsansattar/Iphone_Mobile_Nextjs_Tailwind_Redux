'use client'
import { useSelector } from 'react-redux';
import { FaStarHalf, FaStar } from "react-icons/fa";

const Reviews = () => {
  // Get the selected product data from the Redux store
  const selectedProduct = useSelector((state) => state?.mobileReducer?.selectedMobile);

  // Calculate average rating
  let averageRating;
  let reviewSummaryData;
  if(selectedProduct){
     averageRating = selectedProduct.reviews.reduce((acc, review) => acc + review.rating, 0) / selectedProduct.reviews.length;
     // Review summary data (similar to your original `reviewData`)
     reviewSummaryData = [  
    { text: 'Excellent', line: 80, num: selectedProduct.reviews.filter(r => r.rating === 5).length },
    { text: 'Good', line: 50, num: selectedProduct.reviews.filter(r => r.rating === 4).length },
    { text: 'Average', line: 30, num: selectedProduct.reviews.filter(r => r.rating === 3).length },
    { text: 'Below Average', line: 10, num: selectedProduct.reviews.filter(r => r.rating === 2).length },
    { text: 'Poor', line: 5, num: selectedProduct.reviews.filter(r => r.rating === 1).length },
  ];
 
  }
  if(!selectedProduct){
    return <div className='text-2xl font-bold text-black text-center font-sfPro py-4'></div>
  }

  return (
    <div>
      <div className="flex font-sfPro py-[5.5rem] px-[10rem] gap-[3.75rem]">
        <div className="flex flex-col bg-[#FAFAFA] px-12 py-4 gap-4 rounded-[1.5rem] hover:shadow-lg">
          <h1 className="text-[3.5rem] font-medium">{averageRating.toFixed(1)}</h1>
          <p className="text-base font-medium text-[#323232]">of {selectedProduct.reviews.length} reviews</p>
          <div className="flex gap-2">
            {[...Array(Math.floor(averageRating))].map((_, i) => (
              <FaStar key={i} className="text-yellow-500" />
            ))}
            {averageRating % 1 !== 0 && <FaStarHalf className="text-yellow-500" />}
          </div>
        </div>
        <div className="flex-1">
          {reviewSummaryData.map((item, index) => (
            <div className="flex items-center" key={index}>
              <div className="text-base font-medium text-black w-[150px]">{item.text}</div>
              <div className="w-full bg-gray-200 rounded-full h-2 my-3">
                <div className="bg-[#FFB547] h-2 rounded-full" style={{ width: `${item.line}%` }}></div>
              </div>
              <div className="ml-4 font-medium text-base text-[#000000]">{item.num}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center">
        <textarea
          name="Message"
          id="message"
          cols={125}
          rows={1}
          placeholder="Leave Comment"
          className="border-[#CECECE] rounded-lg py-4 mb-8"
        ></textarea>
      </div>
    </div>
  );
};

export default Reviews;
