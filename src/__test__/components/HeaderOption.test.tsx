import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { HeaderOption } from '@/pages/Session/components/HeaderOption';
import { MemoryRouter } from 'react-router';

vi.mock('@/store/user', () => ({
  useUserStore: vi.fn()
}));

describe('HeaderOption Component', () => {
  const user = userEvent.setup();
  it('should render correctly', async () => {
    const handleClicked = vi.fn();
    render(<MemoryRouter> <HeaderOption name="Log in" active={true} handleClicked={handleClicked} /> </MemoryRouter>);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Log in');
  });

  it('should call the handleClicked function when the button is clicked', async () => {
    const handleClicked = vi.fn();
    render(<MemoryRouter> <HeaderOption name="Log in" active={true} handleClicked={handleClicked} /> </MemoryRouter>);
    const button = screen.getByRole('button');
    await user.click(button);

    expect(handleClicked).toHaveBeenCalledTimes(1);
  });
});