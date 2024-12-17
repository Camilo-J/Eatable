import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Profile } from '@/pages/Profile';
import { MemoryRouter } from 'react-router';

const logoutFn = vi.fn();
vi.mock('@/store/user', () => ({
  useUserStore: vi.fn((fn) => {
    if (fn) return logoutFn;

    return {
      user: {
        name: 'Test',
        email: 'test@mail.com',
        phone: '123456',
        address: 'Test Address'
      }
    };
  })
}));


describe('Profile Page', () => {
  const user = userEvent.setup();
  it('should render correctly the header', async () => {
    render(<MemoryRouter><Profile /></MemoryRouter>);
    const headerText = screen.getByTestId('text-header');
    const logoutButton = screen.getByTestId('logout-button');

    expect(headerText).toBeInTheDocument();
    expect(logoutButton).toBeInTheDocument();
  });

  it('should display the user´s information', async () => {
    render(<MemoryRouter><Profile /></MemoryRouter>);
    const name = screen.getByText('Test');
    const email = screen.getByText('test@mail.com');
    const phone = screen.getByText('123456');
    const address = screen.getByText('Test Address');

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(phone).toBeInTheDocument();
    expect(address).toBeInTheDocument();
  });

  it('should call the function to logout', async () => {
    render(<MemoryRouter><Profile /></MemoryRouter>);
    const logoutButton = screen.getByTestId('logout-button');
    await user.click(logoutButton);

    expect(logoutFn).toHaveBeenCalledTimes(1);
  });
});