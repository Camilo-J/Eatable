import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { LoadingPage } from '@/components/LoadingPage';


describe('Loading Page', () => {
  it('should render correctly', async () => {
    render(<MemoryRouter> <LoadingPage /> </MemoryRouter>);
    const loading = screen.getByRole('status');
    const title = screen.getByText(/food for everyone/i);

    expect(loading).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });
});