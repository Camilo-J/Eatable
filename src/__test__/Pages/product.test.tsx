import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Product } from '@/pages/Products/components/pages/Product';
import { userEvent } from '@testing-library/user-event';

vi.mock('@/store/product.ts', () => ({
  useProductStore: vi.fn(() => ([{
    id: 'product',
    name: 'product 1',
    price: 122,
    category: 'category 1',
    description: 'description 1',
    picture_url: 'picture_url 1'
  }, {
    id: undefined,
    name: 'product 2',
    price: 150,
    category: 'category 2',
    description: 'description 2',
    picture_url: 'picture_url 2'
  }]))
}));

const addProductToCart = vi.fn();
let count = 0;
vi.mock('@/store/order.ts', () => {
  return ({
    useOrderStore: vi.fn(() => {
      if (count === 0) {
        count++;
        return addProductToCart;
      }

      return ([{ id: 1 }]);
    })
  });
});

vi.mock('react-router', async () => {
  const mod = await vi.importActual('react-router');
  return {
    ...mod,
    useParams: () => ({
      id: 'product'
    })
  };
});

describe('Product', () => {
  const user = userEvent.setup();
  it('should render the product page', async () => {
    render(<Product />, { wrapper: MemoryRouter });
    const backIconHeader = screen.getByTestId('back-icon');

    expect(backIconHeader).toBeInTheDocument();
  });

  it('should add product to cart', async () => {
    count = 0;
    render(<MemoryRouter initialEntries={['/product/1']}><Product /></MemoryRouter>);
    const addProductButton = screen.getByTestId('add-product-button');

    await user.click(addProductButton);

    expect(addProductToCart).toHaveBeenCalled();
  });
});