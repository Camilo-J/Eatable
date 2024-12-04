import collectionClient from './collection-client';
import { Order, OrderPayload } from '../types/order.ts';

export async function createOrder(data: OrderPayload) {
  return await collectionClient<Order>('/orders', {
    body: { ...data }
  });
}

export async function getOrders() {
  return await collectionClient<Order[]>(`/orders`);
}
