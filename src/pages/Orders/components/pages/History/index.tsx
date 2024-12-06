import { Header } from '../../../../../components/Header';
import { useOrderStore } from '../../../../../store/order.ts';
import { useEffect } from 'react';
import { OrderRegisterCard } from '../../OrderRegisterCard';

export function History() {
  const orderStored = useOrderStore(state => state.ordersStored);
  const orderFetched = useOrderStore(state => state.getOrdersStored);

  useEffect(() => {
    if (orderStored?.length) return;

    orderFetched().catch(() => console.log('Orders not fetched'));
  }, [orderStored.length, orderFetched]);

  return (
    <div className="py-8 px-5 flex flex-col gap-4">
      <Header text="History" />

      <div className="flex flex-col gap-3 text-sm text-gray-500 items-center">
        {orderStored.map(order => (<OrderRegisterCard key={`register-${order.id}`} order={order} />))}
      </div>
    </div>
  );
}