import { getFilters } from '@/pages/Products/utils/getFilters.ts';
import { Product } from '@/types/product.ts';

describe('getFilters', () => {
  it('should return an array with the product categories', async () => {
    const products = [{
      category: 'category1'
    }, {
      category: 'category2'
    }, {
      category: 'category1'
    }] as unknown as Product[];

    const response = getFilters(products);

    expect(response).toEqual(['all', 'category1', 'category2']);
  });
});