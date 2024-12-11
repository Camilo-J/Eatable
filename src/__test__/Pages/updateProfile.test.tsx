import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { UpdateProfile } from '@/pages/Profile/components/pages/UpdateProfile';
import { MemoryRouter } from 'react-router';

const updateFn = vi.fn();
vi.mock('@/store/user', () => ({
  useUserStore: vi.fn((fn) => {
    if (fn) return updateFn;

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

describe('Update Profile Page', () => {
  const user = userEvent.setup();
  it('should render correctly the header', async () => {
    render(<MemoryRouter><UpdateProfile /></MemoryRouter>);
    const headerText = screen.getByTestId('text-header');
    const logoutButton = screen.getByTestId('update-button');

    expect(headerText).toBeInTheDocument();
    expect(headerText).toHaveTextContent('My Profile');
    expect(logoutButton).toBeInTheDocument();
  });

  it('should call the function to update user information', async () => {
    render(<MemoryRouter><UpdateProfile /></MemoryRouter>);
    const updateButton = screen.getByTestId('update-button');
    await user.click(updateButton);

    expect(updateFn).toHaveBeenCalledTimes(1);
  });

  it('should call the function with the new values', async () => {
    render(<MemoryRouter><UpdateProfile /></MemoryRouter>);
    const updateButton = screen.getByTestId('update-button');
    const nameInput = screen.getByTestId('input-name');
    const emailInput = screen.getByTestId('input-email');
    const phoneInput = screen.getByTestId('input-phone');
    const addressInput = screen.getByTestId('input-address');

    await user.clear(nameInput);
    await user.clear(emailInput);
    await user.clear(phoneInput);
    await user.clear(addressInput);

    await user.type(nameInput, 'Test1');
    await user.type(emailInput, 'test1@mail.com');
    await user.type(phoneInput, '654321');
    await user.type(addressInput, 'Test Address 1');

    await user.click(updateButton);

    expect(updateFn).toHaveBeenCalledWith({
      name: 'Test1',
      email: 'test1@mail.com',
      phone: '654321',
      address: 'Test Address 1'
    });
  });
});