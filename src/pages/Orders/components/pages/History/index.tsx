import { Header } from '../../../../../components/Header';
import { useOrderStore } from '../../../../../store/order.ts';
import { useEffect } from 'react';
import { OrderRegisterCard } from '../../OrderRegisterCard';
import { NotFound } from '../../../../../components/NotFound';
import { IconCalendar } from '@tabler/icons-react';
import { Navbar } from '../../../../../components/Navbar';

export function History() {
  const orderStored = useOrderStore(state => state.ordersStored);
  const orderFetched = useOrderStore(state => state.getOrdersStored);

  useEffect(() => {
    if (orderStored?.length) return;

    orderFetched().catch(() => console.log('Orders not fetched'));
  }, [orderStored.length, orderFetched]);

  return (
    <div className="py-8 px-5 flex flex-col gap-4 relative">
      <Header text="History" />

      {Boolean(orderStored?.length) && (
        <div
          className="filterScrollBar h-[550px] overflow-y-scroll flex flex-col gap-3 text-sm text-gray-500 items-center">
          {orderStored.map(order => (<OrderRegisterCard key={`register-${order.id}-${Date.now()}`} order={order} />))}
        </div>)}

      {!orderStored?.length && (<NotFound text="No History yet" icon={<IconCalendar size="100" color="gray" />} />)}
      <div className="absolute w-[408px] -bottom-[222px]">
        <Navbar />
      </div>
    </div>
  );
}