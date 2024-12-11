import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Header } from '@/components/Header';
import { MemoryRouter } from 'react-router';

describe('Header Component', () => {
  const user = userEvent.setup();
  it('should display the component with its values correctly', async () => {
    render(<MemoryRouter> <Header text="header text" /> </MemoryRouter>);
    const textHeader = screen.getByTestId('text-header');
    const backIcon = screen.getByTestId('back-icon');

    expect(textHeader).toBeInTheDocument();
    expect(backIcon).toBeInTheDocument();
  });

  it('should display only the Icon when the text is not set', async () => {
    render(<MemoryRouter> <Header /> </MemoryRouter>);
    const backIcon = screen.getByTestId('back-icon');

    expect(backIcon).toBeInTheDocument();
  });

  it('should go back to the previous page by clicking the button', async () => {
    const { container } = render(<MemoryRouter initialEntries={['/test', '/test2']}> <Header text="header text" />
    </MemoryRouter>);
    const backIcon = screen.getByTestId('back-icon');

    await user.click(backIcon);
    expect(container).toBeInTheDocument();
  });
});