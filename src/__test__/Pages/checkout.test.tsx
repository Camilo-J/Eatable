import { screen, render } from '@testing-library/react';
import { Checkout } from '@/pages/Orders/components/pages/Checkout';
import { MemoryRouter } from 'react-router';
import { userEvent } from '@testing-library/user-event';

vi.mock('@/store/user.ts', () => ({
  useUserStore: vi.fn(() => ({
    name: 'User',
    email: 'user@mail.com',
    phone: '123456789',
    address: 'User address'
  }))
}));

const registerOrders = vi.fn();
let count = 0;
vi.mock('@/store/order.ts', () => {
  return ({
    useOrderStore: vi.fn(() => {
      if (count === 0) {
        count++;
        return registerOrders;
      }

      return [{
        id: 1,
        quantity: 1,
        productDetails: {
          name: 'Product 1',
          price: 100,
          category: 'Category 1',
          description: 'Description 1',
          picture_url: 'https://via.placeholder.com/150'
        }
      }];
    })
  });
});

describe('Checkout Page', () => {
  const user = userEvent.setup();
  it('should render correctly the page', async () => {
    render(<Checkout />, { wrapper: MemoryRouter });
    const userValues = ['User', 'user@mail.com', '123456789', 'User address'];
    const header = screen.getByText('Checkout');
    const addressDetails = screen.getByText('Address details');
    const invoiceBox = screen.getByTestId('invoice-box');

    expect(header).toBeInTheDocument();
    expect(addressDetails).toBeInTheDocument();
    expect(invoiceBox).toBeInTheDocument();

    userValues.forEach(value => {
      expect(screen.getByText(value)).toBeInTheDocument();
    });
  });

  it('should call the function to create the order', async () => {
    count = 0;
    render(<Checkout />, { wrapper: MemoryRouter });
    const completeOrderButton = screen.getByText('Complete Order');

    await user.click(completeOrderButton);

    expect(registerOrders).toHaveBeenCalled();
  });
});
