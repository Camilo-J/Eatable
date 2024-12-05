import { OrderCardContainer } from './components/CardContainer';
import { InvoiceBox } from './components/InvoiceBox';
import { Header } from '../../components/Header';

export function Orders() {
  return (
    <div className="px-5 pt-10 pb-8 font-code">
      <Header text="Cart" />
      <OrderCardContainer />
      <InvoiceBox />
      <button
        className="w-80 h-16 px-12 mx-12 py-3 rounded-3xl text-white font-semibold bg-orange-600 mt-8 hover:bg-orange-500">
        Checkout
      </button>
    </div>
  );
}