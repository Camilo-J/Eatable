import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Products } from '@/pages/Products';

describe('Products', () => {
  it('should render the products page', async () => {
    render(<Products />, { wrapper: MemoryRouter });
    const search = screen.getByTestId('search-component');
    const filter = screen.getByTestId('filter-container');
    const productContainer = screen.getByTestId('product-container');
    const navbar = screen.getByTestId('navbar');

    expect(search).toBeInTheDocument();
    expect(filter).toBeInTheDocument();
    expect(productContainer).toBeInTheDocument();
    expect(navbar).toBeInTheDocument();
  });
});