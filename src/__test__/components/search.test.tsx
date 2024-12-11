import { render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import { Search } from '@/pages/Products/components/Search';
import { expect } from 'vitest';

const searchFn = vi.fn();
vi.mock('@/store/product.ts', () => ({
  useProductStore: vi.fn((fn) => {
      if (fn) return searchFn;

      return '';
    }
  ).mockReturnValueOnce('')
}));

describe('Search Component', () => {
  const user = userEvent.setup();
  it('should render correctly the search component', async () => {
    render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>
    );
    const searchIcon = screen.getByTestId('search-icon');
    const searchInput = screen.getByTestId('search-input');

    expect(searchInput).toBeInTheDocument();
    expect(searchIcon).toBeInTheDocument();
  });

  it('should call the function to update the search selected by typing in the input', async () => {
    render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>
    );

    const searchInput = screen.getByTestId(/search-input/i);

    await user.type(searchInput, 'test');

    await waitFor(() => {
      expect(searchFn).toHaveBeenCalledTimes(1);
      expect(searchInput).toHaveValue('test');
    });
  });
});