'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchMobiles, addToCart, removeToCart, selectMobile } from '@/app/redux/actions/actions';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';

const bgColors = ['#FFFFFF', '#F9F9F9', '#EAEAEA', '#2C2C2C'];

const PopularProducts = () => {
  const popularProducts = useSelector((state) => state?.mobileReducer?.mobiles);
  const cartItems = useSelector((state) => state?.mobileReducer?.cartData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMobiles());
  }, [dispatch]);

  const handleImageClick = (product) => {
    dispatch(selectMobile(product));
  };

  const isProductInCart = (product) => cartItems.some((item) => item.id === product.id);

  const handleCartToggle = (product) => {
    if (isProductInCart(product)) {
      dispatch(removeToCart(product.id));
      alert('Product removed from the cart');
    } else {
      dispatch(addToCart(product));
      alert('Product added to the cart');
    }
  };

  return (
    <div className="container mx-auto my-14">
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          340:{
            slidesPerView:1,
          },
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {popularProducts.slice(0, 8).map((product, index) => (
          <SwiperSlide key={index}>
            <div
              style={{ backgroundColor: bgColors[index % bgColors.length] }}
              className="p-4 rounded-lg flex flex-col h-full"
            >
              {/* Image */}
              <div className="flex-1 flex items-center justify-center">
                <Link href={'/pages/productDetails'}>
                  <img
                    src={product.thumbnail}
                    alt={product.description}
                    className="w-full h-auto max-h-50 object-contain mb-4"
                    onClick={() => handleImageClick(product)}
                  />
                </Link>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h2
                    className={`text-xl font-semibold mb-2 leading-snug ${
                      bgColors[index % bgColors.length] === '#2C2C2C' ? 'text-white' : 'text-black'
                    }`}
                  >
                    {product.title}
                  </h2>
                  <p className="text-sm font-bold leading-snug text-[#909090] mb-4">
                    {product.description}
                  </p>
                </div>

                {/* Button */}
                <div className="mt-auto">
                  <button
                    className={`py-2 mt-auto px-6 rounded border ${
                      bgColors[index % bgColors.length] === '#2C2C2C' ? 'border-white' : 'border-black'
                    }`}
                    onClick={() => handleCartToggle(product)}
                  >
                    <span
                      className={`text-base font-bold ${
                        bgColors[index % bgColors.length] === '#2C2C2C' ? 'text-white' : 'text-black'
                      }`}
                    >
                      {isProductInCart(product) ? 'Remove from Cart' : 'Add To Cart'}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularProducts;
