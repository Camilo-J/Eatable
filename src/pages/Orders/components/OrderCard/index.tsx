import { Product } from '@/types/product.ts';
import { capitalize } from 'radashi';
import { IconMinus, IconPlus } from '@tabler/icons-react';
import { useOrderStore } from '@/store/order.ts';

interface Props {
  product?: Omit<Product, 'id'>;
  productId: number;
  quantity: number;
}

export function OrderCard({ product, productId, quantity }: Props) {
  const updateAmountOrder = useOrderStore(state => state.updateAmountOrder);
  const removeOrder = useOrderStore(state => state.removeOrder);
  if (!product) return null;

  const handleIncrement = () => {
    updateAmountOrder(productId, quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) return updateAmountOrder(productId, quantity - 1);

    removeOrder(productId);
  };

  return (
    <div data-testid="order-card" className="h-28 w-80 p-4 bg-white rounded-3xl flex gap-4 items-center">
      <div className="w-16 h-16">
        <img src={product.picture_url} alt={product.name}
             className="w-full h-full object-cover rounded-full"
             style={{ boxShadow: '0px 20px 20px rgba(0, 0, 0, 0.2)' }} />
      </div>

      <div className="flex flex-col gap-1 w-28">
        <p className="text-base font-semibold  text-gray-700">{capitalize(product.name)}</p>
        <p className="text-base font-semibold text-orange-600">${product.price}</p>
      </div>


      <div
        className="flex justify-center items-center gap-1 self-end h-6 w-20 px-1.5 rounded-3xl bg-orange-600 text-white">
        <IconMinus data-testid="decrease-icon" size={20} cursor="pointer" onClick={handleDecrement} />
        <p className="text-base">{quantity}</p>
        <IconPlus data-testid="increase-icon" size={20} cursor="pointer" onClick={handleIncrement} />
      </div>
    </div>
  );
}