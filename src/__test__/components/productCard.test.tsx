import { render, screen } from '@testing-library/react';
import { ProductCard } from '@/pages/Products/components/ProductCard';
import { MemoryRouter } from 'react-router';

describe('ProductCard Component', () => {
  const product = {
    id: 1,
    name: 'test-name',
    price: 10,
    category: 'test-category',
    description: 'test-description',
    picture_url: 'test-image'
  };

  it('should render correctly the component', async () => {
    render(<MemoryRouter><ProductCard product={product} /></MemoryRouter>);
    const image = screen.getByAltText('test-name');
    const name = screen.getByText(/test-name/i);
    const price = screen.getByText('$10');

    expect(image).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(price).toBeInTheDocument();
  });
});