import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { ProductContainer } from '@/pages/Products/components/ProductContainer';

vi.mock('@/store/product.ts', () => {
  let count = 0;
  return ({
    useProductStore: vi.fn(() => {
      if (count === 0) {
        count++;
        return 'all' as unknown;
      }
      return '' as unknown;
    }).mockReturnValueOnce([{
      'id': 1,
      'name': 'Product 1',
      'price': 100,
      'category': 'Category 1',
      'description': 'Description 1',
      'picture_url': 'https://via.placeholder.com/150'
    }])
  });
});

describe('ProductContainer Component', () => {
  it('should render correctly', async () => {
    render(<MemoryRouter> <ProductContainer /> </MemoryRouter>);
    const productCard = screen.getByTestId('product-card');
    const productTitle = screen.getByText('Product 1');
    const productPrice = screen.getByText('$100');

    expect(productCard).toBeInTheDocument();
    expect(productTitle).toBeInTheDocument();
    expect(productPrice).toBeInTheDocument();
  });
});