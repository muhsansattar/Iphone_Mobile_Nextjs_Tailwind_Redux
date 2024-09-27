'use client'
import { useSelector } from 'react-redux';
import React from 'react';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FiChevronDown } from 'react-icons/fi';

const commentsImages = [
  {
    avatar: '/images/grace.svg', 
    images: []
  },
  {
    avatar: '/images/ronald.svg',
    images: []
  },
  {
    avatar: '/images/Dracy.svg', 
    images: [
      '/images/commentApple.svg',
      '/images/commentSide.svg'
    ]
  }
];

const getStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<FaStar key={i} className="text-yellow-500" />);
    } else if (i - rating === 0.5) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
    } else {
      stars.push(<FaStar key={i} className="text-gray-300" />);
    }
  }
  return stars;
};

const Comments = () => {
  const selectedProduct = useSelector(state => state?.mobileReducer?.selectedMobile);

  if (!selectedProduct) {
    return <div className='text-2xl font-bold text-black text-center font-sfPro py-4'></div>;
  }

  return (
    <div className="space-y-8 py-[5.5rem] px-[10rem]">
      {selectedProduct.reviews.map((comment, index) => (
        <div key={comment.id} className="bg-[#FAFAFA] p-6 rounded-lg shadow-md py-6 px-7">
          <div className="flex items-center mb-4">
            <img
              src={commentsImages[index % commentsImages.length].avatar}
              alt={comment.reviewerName}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h2 className="text-lg font-semibold">{comment.reviewerName}</h2>
              <div className="flex">{getStars(comment.rating)}</div>
            </div>
          </div>
          <p className="text-gray-700 mb-4">{comment.comment}</p>
          {commentsImages[index % commentsImages.length].images.length > 0 && (
            <div className="flex space-x-4">
              {commentsImages[index % commentsImages.length].images.map((image, imgIndex) => (
                <img key={imgIndex} src={image} alt={`Comment Image ${imgIndex + 1}`} className="w-24 h-24 rounded-lg" />
              ))}
            </div>
          )}
        </div>
      ))}
      <div className="flex justify-center">
        <button className="flex justify-between items-center border py-2 px-[3.5rem] rounded-lg">
          <span className="mr-2">View More</span>
          <span><FiChevronDown /></span>
        </button>
      </div>
    </div>
  );
};

export default Comments;
