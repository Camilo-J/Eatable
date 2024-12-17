import { render, screen } from '@testing-library/react';
import { Orders } from '@/pages/Orders';
import { MemoryRouter } from 'react-router';

vi.mock('@/store/order.ts', () => {
  return ({
    useOrderStore: vi.fn(() => ([{
      id: 1,
      quantity: 1,
      productDetails: {
        name: 'Product 1',
        price: 100,
        category: 'Category 1',
        description: 'Description 1',
        picture_url: 'https://via.placeholder.com/150'
      }
    }]))
  });
});

describe('Orders Page', () => {
  it('should render correctly the page', async () => {
    render(<Orders />, { wrapper: MemoryRouter });
    const header = screen.getByText('Cart');
    const defaultText = screen.getByText('No items in the cart');

    expect(header).toBeInTheDocument();
    expect(defaultText).toBeInTheDocument();
  });

  it('should render the orders available', async () => {
    localStorage.setItem('orders', JSON.stringify([{
      id: 1,
      quantity: 1,
      productDetails: {
        name: 'Product 1',
        price: 100,
        category: 'Category 1',
        description: 'Description 1',
        picture_url: 'https://via.placeholder.com/150'
      }
    }]));
    render(<Orders />, { wrapper: MemoryRouter });
    const invoiceBox = screen.getByTestId('invoice-box');
    const orderContainer = screen.getByTestId('order-container');

    expect(invoiceBox).toBeInTheDocument();
    expect(orderContainer).toBeInTheDocument();
  });
});