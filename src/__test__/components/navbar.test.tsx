import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Navbar } from '@/components/Navbar';

describe('Navbar Component', () => {
  it('should display the component correctly', async () => {
    render(<MemoryRouter> <Navbar /> </MemoryRouter>);
    const navbar = screen.getByTestId('navbar');

    expect(navbar).toBeInTheDocument();
  });

  it('should display all the link correctly', async () => {
    const links = ['products', 'profile', 'history'];
    render(<MemoryRouter> <Navbar /> </MemoryRouter>);

    links.forEach((link) => {
      const linkElement = screen.getByTestId(`link-${link}`);
      expect(linkElement).toBeInTheDocument();
    });
  });
});