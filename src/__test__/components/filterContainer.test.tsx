import { render, screen } from '@testing-library/react';
import { FilterContainer } from '@/pages/Products/components/FilterContainer';
import { MemoryRouter } from 'react-router';

vi.mock('@/store/product.ts', () => ({
  useProductStore: vi.fn().mockReturnValueOnce(['test']).mockReturnValue([])
}));


describe('FilterContainer Component', () => {
  it('should render correctly the filters', async () => {
    render(
      <MemoryRouter>
        <FilterContainer />
      </MemoryRouter>
    );

    const filterContainer = screen.getByTestId('filter-container');
    const filterTitle = screen.getByText(/test/i);

    expect(filterContainer).toBeInTheDocument();
    expect(filterTitle).toBeInTheDocument();
  });


});