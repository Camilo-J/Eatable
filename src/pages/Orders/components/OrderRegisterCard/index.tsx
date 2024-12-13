import { IconChevronDown } from '@tabler/icons-react';
import { Order } from '@/types/order.ts';
import { useState } from 'react';
import { OrderDetailsBox } from '../OrderDetailsBox';
import { format } from '@formkit/tempo';

interface Props {
  order: Order;
}

const language = 'en';

export function OrderRegisterCard({ order }: Props) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(prev => !prev);
  };

  return (
    <div className="w-80 h-fit px-5 pt-4 pb-0 bg-white flex flex-col gap-1 items-center rounded-3xl"
         data-testid="order-register-card">
      <div className="w-full flex flex-col gap-3">
        <p>{format(order.created_at, 'ddd, MMM D, YYYY', language) || '---'}</p>
        <div className="flex justify-between">
          <p>{order.order_details?.length || 0} items</p>
          <p style={{ color: '#fa4a0c' }}>
            ${order.order_details?.reduce((acc, current) => acc + current.subtotal, 0)}
          </p>
        </div>
      </div>
      <section
        data-testid="hidden-section"
        className={`animateHeight w-full flex flex-col gap-3 transition-all duration-500 overflow-hidden ${open ? 'h-auto' : 'h-0'}`}>
        <div className="border-b-[1px] pb-2">
          <p className="font-semibold mb-2">Orders</p>
          {order.order_details.map(detail => (
            <OrderDetailsBox key={`detail-${detail.id}-${Date.now()}`} id={detail.id} subtotal={detail.subtotal}
                             quantity={detail.quantity}
                             product_name={detail.product_name} />))}
        </div>
        <div>
          <p className="mb-2 font-semibold">Delivery</p>
          <p>{order.delivery_address}</p>
        </div>
      </section>
      <div className={`self-end transition-all duration-500 cursor-pointer ${open ? '-rotate-180' : ''}`}
           onClick={handleOpen}>
        <IconChevronDown data-testid="icon-chevron" size={24} />
      </div>
    </div>
  );
}