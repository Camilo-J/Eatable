interface Props {
  id: number;
  quantity: number;
  subtotal: number;
  product_name: string;
}

export function OrderDetailsBox({ quantity, product_name, subtotal }: Props) {
  return (
    <div className="flex justify-between" data-testid="order-details-box">
      <p>{quantity}-{product_name}</p>
      <p>${subtotal}</p>
    </div>
  );
}