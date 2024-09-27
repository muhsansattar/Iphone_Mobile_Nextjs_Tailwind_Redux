'use client'
import OrderButtons from '@/app/components/orderConfirmation/orderButtons';
import AddAddressForm from '@/app/components/orderConfirmation/address';

const AddressPage = () => {
  return (
    <div>
      <OrderButtons />
      <AddAddressForm />
    </div>
  );
};

export default AddressPage;
