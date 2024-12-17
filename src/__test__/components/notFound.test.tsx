import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { NotFound } from '@/components/NotFound';
import { IconHome } from '@tabler/icons-react';

describe('Not Found Component', () => {
  it('should display the component correctly', async () => {
    render(<MemoryRouter> <NotFound text="not found text" icon={<IconHome data-testid="icon-home" />} />
    </MemoryRouter>);
    const notFound = screen.getByText('not found text');
    const icon = screen.getByTestId('icon-home');

    expect(notFound).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });
});