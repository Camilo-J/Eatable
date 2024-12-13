import { OrderCardContainer } from './components/CardContainer';
import { InvoiceBox } from './components/InvoiceBox';
import { Header } from '@/components/Header';
import { useNavigate } from 'react-router';
import { NotFound } from '@/components/NotFound';
import { IconShoppingCart } from '@tabler/icons-react';

export function Orders() {
  const navigate = useNavigate();
  const orders = JSON.parse(localStorage.getItem('orders') || '[]');

  return (
    <div className="px-5 pt-10 pb-8 font-code">
      <Header text="Cart" />
      {Boolean(orders?.length) && <OrderCardContainer />}
      {Boolean(orders?.length) && <InvoiceBox />}
      {Boolean(orders?.length) && (
        <button
          className="w-80 h-16 px-12 mx-12 py-3 rounded-3xl text-white
         font-semibold bg-orange-600 mt-8 hover:bg-orange-500"
          onClick={() => navigate('/orders/checkout')}
        >
          Checkout
        </button>
      )}
      {!orders?.length && <NotFound text="No items in the cart" icon={<IconShoppingCart size={98} color="gray" />} />}
    </div>
  );
}
