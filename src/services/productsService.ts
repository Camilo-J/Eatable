import collectionClient from './collection-client';
import { Product } from '@/types/product.ts';

export async function getProducts() {
  return await collectionClient<Product[]>(`/products`);
}
