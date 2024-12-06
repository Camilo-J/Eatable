import { useOrderStore } from '../../../../store/order.ts';

interface Props {
  className?: string;
}

export function InvoiceBox({ className }: Props) {
  const newOrders = useOrderStore(state => state.newOrders);
  const totalAmount = newOrders.reduce((acc, { productDetails, quantity }) => acc + productDetails.price * quantity, 0);

  return (
    <section className={className ?? 'px-12 mt-8'}>
      <div className="flex justify-between items-center">
        <p className="text-lg">Total</p>
        <p className="text-xl font-semibold text-orange-600">${totalAmount}</p>
      </div>
    </section>
  );
}