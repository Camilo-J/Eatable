import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { OrderCard } from '@/pages/Orders/components/OrderCard';
import { userEvent } from '@testing-library/user-event';

const updateAmountOrder = vi.fn();
const removeOrder = vi.fn();
let count = 0;
vi.mock('@/store/order.ts', () => {
  return ({
    useOrderStore: vi.fn(() => {
      if (count === 0) {
        count++;
        return updateAmountOrder;
      }
      return removeOrder;
    })
  });
});

describe('OrderCard Component', () => {
  const user = userEvent.setup();
  it('should render correctly', async () => {
    const product = {
      'name': 'Product 1',
      'price': 100,
      'category': 'Category 1',
      'description': 'Description 1',
      'picture_url': 'https://via.placeholder.com/150'
    };
    render(
      <MemoryRouter>
        <OrderCard product={product} productId={1} quantity={1} />
      </MemoryRouter>
    );
    const orderCard = screen.getByTestId('order-card');
    const orderTitle = screen.getByText('Product 1');
    const orderQuantity = screen.getByText('1');

    expect(orderCard).toBeInTheDocument();
    expect(orderTitle).toBeInTheDocument();
    expect(orderQuantity).toBeInTheDocument();
  });

  it('should call the function to update the quantity of the product', async () => {
    count = 0;
    const product = {
      'name': 'Product 1',
      'price': 100,
      'category': 'Category 1',
      'description': 'Description 1',
      'picture_url': 'https://via.placeholder.com/150'
    };
    render(
      <MemoryRouter>
        <OrderCard product={product} productId={1} quantity={1} />
      </MemoryRouter>
    );

    const increaseIcon = screen.getByTestId('increase-icon');
    await user.click(increaseIcon);
    expect(updateAmountOrder).toHaveBeenCalledWith(1, 2);
  });

  it('should call the function to remove the product', async () => {
    count = 0;
    const product = {
      'name': 'Product 1',
      'price': 100,
      'category': 'Category 1',
      'description': 'Description 1',
      'picture_url': 'https://via.placeholder.com/150'
    };
    render(
      <MemoryRouter>
        <OrderCard product={product} productId={1} quantity={1} />
      </MemoryRouter>
    );

    const decreaseIcon = screen.getByTestId('decrease-icon');
    await user.click(decreaseIcon);
    expect(removeOrder).toHaveBeenCalledWith(1);
  });
});