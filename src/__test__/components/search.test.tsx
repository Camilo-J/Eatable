import { render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import { Search } from '@/pages/Products/components/Search';
import { afterEach, expect } from 'vitest';

const searchFn = vi.fn();
let returnProductSearched = false;
let count = 0;
vi.mock('@/store/product.ts', () => ({
  useProductStore: vi.fn(() => {
      if (returnProductSearched && count === 0) {
        count++;
        return 'test';
      }

      if (count === 0) {
        count++;
        return '';
      }

      return searchFn;
    }
  )
}));

afterEach(() => {
  vi.clearAllMocks();
});


describe('Search Component', () => {
  const user = userEvent.setup();
  it('should render correctly the search component', async () => {
    count = 0;
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
    count = 0;
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

  it('should call the function to reset the search selected by clicking back icon', async () => {
    count = 0;
    returnProductSearched = true;
    render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>
    );
    const backIcon = screen.getByTestId(/chevron-icon/i);

    await user.click(backIcon);

    await waitFor(() => {
      expect(searchFn).toHaveBeenCalledWith('');
    });
  });
});