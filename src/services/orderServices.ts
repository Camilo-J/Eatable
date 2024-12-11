import collectionClient from './collection-client';
import { Order, OrderPayload } from '@/types/order.ts';
import { omit } from 'radashi';

export async function createOrder(data: OrderPayload) {
  const orderDetails = data.items.map((item) => omit(item, ['productDetails']));
  return await collectionClient<Order>('/orders', {
    body: { ...data, items: orderDetails }
  });
}

export async function getOrders() {
  return await collectionClient<Order[]>(`/orders`);
}
