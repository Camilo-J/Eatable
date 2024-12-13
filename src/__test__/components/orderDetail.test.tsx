import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { OrderDetailsBox } from '@/pages/Orders/components/OrderDetailsBox';

describe('OrderDetailsBox Component', () => {
  it('should render correctly the box component', async () => {
    render(<MemoryRouter><OrderDetailsBox id={1} quantity={1} subtotal={100}
                                          product_name="product 1" /></MemoryRouter>);

    const orderDetailsBox = screen.getByTestId('order-details-box');
    const quantity = screen.getByText('1-product 1');
    const subtotal = screen.getByText('$100');

    expect(orderDetailsBox).toBeInTheDocument();
    expect(quantity).toBeInTheDocument();
    expect(subtotal).toBeInTheDocument();
  });
});
