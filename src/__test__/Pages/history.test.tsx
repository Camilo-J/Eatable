import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { History } from '@/pages/Orders/components/pages/History';

let count = 0;
const fetchOrders = vi.fn(async () => {
  count = 0;
});

vi.mock('@/store/order.ts', () => {
  return {
    useOrderStore: vi.fn(() => {
      if (count === 0) {
        count++;
        return [
          {
            id: 1,
            items_count: 1,
            total: 100,
            delivery_address: 'Address 1',
            created_at: '2021-09-01T00:00:00.000Z',
            order_details: [{
              id: 1,
              quantity: 1,
              subtotal: 100,
              product_id: 1,
              product_name: 'Product 1'
            }]
          }
        ];
      }

      return fetchOrders;
    })
  };
});

describe('History Page', () => {
  it('should render correctly the page', async () => {
    count = 0;
    render(<History />, { wrapper: MemoryRouter });
    const header = screen.getByText('History');
    const registerCard = screen.getByTestId('order-register-card');
    const navbar = screen.getByTestId('navbar');

    expect(header).toBeInTheDocument();
    expect(registerCard).toBeInTheDocument();
    expect(navbar).toBeInTheDocument();
  });
});
