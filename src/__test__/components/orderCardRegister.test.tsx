import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { OrderRegisterCard } from '@/pages/Orders/components/OrderRegisterCard';
import { userEvent } from '@testing-library/user-event';
import orderExample from '@/mock/Endpoints/orders.json';

describe('OrderRegisterCard Component', () => {
  const user = userEvent.setup();
  it('should render correctly the component', async () => {
    render(<MemoryRouter><OrderRegisterCard order={orderExample[0]} /></MemoryRouter>);
    const orderCard = screen.getByTestId('order-register-card');
    const amountOfItems = screen.getByText('2 items');
    const totalAmount = screen.getByText('$200');

    expect(orderCard).toBeInTheDocument();
    expect(totalAmount).toBeInTheDocument();
    expect(amountOfItems).toBeInTheDocument();
  });

  it('should display the section hidden by clicking the icon', async () => {
    render(<MemoryRouter><OrderRegisterCard order={orderExample[0]} /></MemoryRouter>);
    const orderCard = screen.getByTestId('order-register-card');
    const icon = screen.getByTestId('icon-chevron');
    const hiddenSection = screen.getByTestId('hidden-section');

    await user.click(icon);

    expect(orderCard).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
    expect(hiddenSection).toHaveClass('h-auto');
  });
});
