import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { OrderCardContainer } from '@/pages/Orders/components/CardContainer';

vi.mock('@/store/order.ts', () => {
  const orderParsed = {
    id: 1,
    quantity: 1,
    productDetails: {
      'name': 'Product 1',
      'price': 100,
      'category': 'Category 1',
      'description': 'Description 1',
      'picture_url': 'https://via.placeholder.com/150'
    }
  };

  return ({ useOrderStore: vi.fn(() => ([orderParsed])) });
});

describe('OrderCardContainer Component', () => {
  it('should render correctly', async () => {
    render(<MemoryRouter><OrderCardContainer /></MemoryRouter>);
    const orderContainer = screen.getByTestId('order-container');
    const orderCard = screen.getByTestId('order-card');
    const orderTitle = screen.getByText('Product 1');
    const orderQuantity = screen.getByText('1');

    expect(orderContainer).toBeInTheDocument();
    expect(orderCard).toBeInTheDocument();
    expect(orderTitle).toBeInTheDocument();
    expect(orderQuantity).toBeInTheDocument();
  });
});