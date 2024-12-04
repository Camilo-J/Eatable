interface OrderDetails {
  id: number;
  quantity: number;
  subtotal: number;
  product_id: number;
  product_name: string;
}

export interface Order {
  id: number;
  items_count: number;
  total: number;
  delivery_address: string;
  created_at: string;
  order_details: OrderDetails[];
}

export interface OrderPayload {
  delivery_address: string;
  items: { id: number, quantity: number }[];
}