'use client'
import OrderButtons from '@/app/components/orderConfirmation/orderButtons';
import Shipping from '@/app/components/orderConfirmation/shipping';

const ShippingPage = () => {
  return (
    <div>
      <OrderButtons />
      <Shipping/>
    </div>
  );
};

export default ShippingPage;
