import collectionClient from './collection-client';
import { Product } from '../types/product.ts';

export async function getOrders() {
  return await collectionClient<Product>(`/products`);
}
