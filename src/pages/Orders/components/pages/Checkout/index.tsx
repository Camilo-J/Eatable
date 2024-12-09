import { Header } from '../../../../../components/Header';
import { useUserStore } from '../../../../../store/user.ts';
import { InvoiceBox } from '../../InvoiceBox';
import { useOrderStore } from '../../../../../store/order.ts';
import { useNavigate } from 'react-router';

export function Checkout() {
  const navigate = useNavigate();
  const user = useUserStore(state => state.user);
  const registerOrders = useOrderStore(state => state.registerOrders);
  const newOrders = useOrderStore(state => state.newOrders);
  if (!user) return null;

  const { name, email, phone, address } = user;
  const total = newOrders.reduce((acc, { productDetails, quantity }) => acc + productDetails.price * quantity, 0);

  const handleCompleteOrder = async () => {
    await registerOrders(address || '', newOrders);
    navigate('/orders/history');
  };

  return (
    <div className="px-5 pt-10 pb-8 font-code text-gray-700">
      <Header text="Checkout" />
      <div className="h-full flex flex-col justify-between px-10 mt-4 gap-4">
        <p className="font-semibold text-xl">Delivery</p>

        <div className="flex bg-gray-100 rounded-lg mt-4 justify-between">
          <p>Address details</p>
          <button className="text-orange-600 cursor-pointer" onClick={() => navigate('/profile')}>Change</button>
        </div>

        <div className="bg-white w-80 h-48 p-4 rounded-3xl flex flex-col gap-1 text-sm">
          <p className="font-semibold text-base">{name || 'User'}</p>
          <p className="mt-3 text-gray-500">{email || '----------'}</p>
          <div className="h-[1px] bg-gray-500" />
          <p className="mt-3 text-gray-500">{phone || '----------'}</p>
          <div className="h-[1px] bg-gray-500" />
          <p className="mt-3 text-gray-500">{address || '----------'}</p>
          <div className="h-[1px] bg-gray-500" />
        </div>
        <InvoiceBox className="px-0 mt-3" />

        <button className={`w-80 h-16 px-12 py-3 rounded-3xl text-white font-semibold
        bg-orange-600 mt-8 ${total === 0 ? 'bg-orange-400' : 'hover:bg-orange-500'}`} onClick={handleCompleteOrder}
                disabled={total === 0}>
          Complete Order
        </button>
      </div>
    </div>
  );
}