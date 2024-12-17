import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { InvoiceBox } from '@/pages/Orders/components/InvoiceBox';

vi.mock('@/store/order.ts', () => ({
  useOrderStore: vi.fn(() => {
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
    return ([orderParsed]);
  })
}));

describe('InvoiceBox Component', () => {
  it('should render correctly the component', async () => {
    render(<MemoryRouter><InvoiceBox /></MemoryRouter>);
    const invoiceBox = screen.getByTestId('invoice-box');
    const totalAmount = screen.getByText('$100');

    expect(invoiceBox).toBeInTheDocument();
    expect(totalAmount).toBeInTheDocument();
  });
});