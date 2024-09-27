'use client'
import OrderButtons from '@/app/components/orderConfirmation/orderButtons';
import Payment from '@/app/components/orderConfirmation/payment';

const PaymentPage = () => {
  return (
    <div>
      <OrderButtons />
      <Payment />
    </div>
  );
};

export default PaymentPage;
