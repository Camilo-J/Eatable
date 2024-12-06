import { OrderCardContainer } from './components/CardContainer';
import { InvoiceBox } from './components/InvoiceBox';
import { Header } from '../../components/Header';
import { useNavigate } from 'react-router';

export function Orders() {
  const navigate = useNavigate();

  return (
    <div className="px-5 pt-10 pb-8 font-code">
      <Header text="Cart" />
      <OrderCardContainer />
      <InvoiceBox />
      <button className="w-80 h-16 px-12 mx-12 py-3 rounded-3xl text-white
         font-semibold bg-orange-600 mt-8 hover:bg-orange-500" onClick={() => navigate('/checkout')}>
        Checkout
      </button>
    </div>
  );
}