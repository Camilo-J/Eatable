interface Props {
  id: number;
  quantity: number;
  subtotal: number;
  product_name: string;
}

export function OrderDetailsBox({ id, quantity, product_name, subtotal }: Props) {
  return (
    <div key={`detail-${id}-${Date.now()}`} className="flex justify-between">
      <p>{quantity}-{product_name}</p>
      <p>${subtotal}</p>
    </div>
  );
}