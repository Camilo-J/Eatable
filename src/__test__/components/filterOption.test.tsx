import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { FilterOption } from '@/pages/Products/components/FilterOption';
import { MemoryRouter } from 'react-router';

const updateFn = vi.fn();
vi.mock('@/store/product.ts', () => ({
  useProductStore: vi.fn((fn) => {
      if (fn) return updateFn;

      return 'test1';
    }
  ).mockReturnValueOnce('test1')
}));

describe('FilterOption Component', () => {
  const user = userEvent.setup();
  it('should render correctly the filter option', async () => {
    render(
      <MemoryRouter>
        <FilterOption name="test-filter" />
      </MemoryRouter>
    );

    const filterTitle = screen.getByText(/test-filter/i);

    expect(filterTitle).toBeInTheDocument();
  });

  it('should call the function to update the filter selected', async () => {
    render(<MemoryRouter><FilterOption name="test-filter" /></MemoryRouter>);

    const filter = screen.getByTestId('filter-option');
    await user.click(filter);

    expect(updateFn).toHaveBeenCalledTimes(1);
  });
});