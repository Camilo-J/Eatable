import { Product } from '../../../types/product.ts';

export function getFilters(products: Product[]) {
  return products.reduce((acc, product) => {
    if (!acc.includes(product.category)) acc.push(product.category);

    return acc;
  }, ['all']);
}