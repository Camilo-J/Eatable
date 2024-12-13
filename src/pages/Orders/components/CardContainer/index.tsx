import { OrderCard } from '../OrderCard';
import { useOrderStore } from '@/store/order.ts';

export function OrderCardContainer() {
  const newOrders = useOrderStore(state => state.newOrders);

  return (
    <section data-testid="order-container"
             className="grid grid-cols-1 gap-6 max-h-[520px] overflow-auto justify-items-center mt-8 mx-4">
      {newOrders.map(order => (
        <OrderCard key={order.id} productId={order.id} product={order.productDetails} quantity={order.quantity} />))}
    </section>
  );
}