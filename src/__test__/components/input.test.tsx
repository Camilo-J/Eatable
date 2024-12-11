import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Input } from '@/components/Input';

describe('Input Component', () => {
  it('should render correctly with values', async () => {
    render(<MemoryRouter> <Input label="Test" name="test" id="test" type="text" placeholder="Search" />
    </MemoryRouter>);

    const input = screen.getByTestId('input-test') as HTMLInputElement;
    const label = screen.getByTestId('label-test');

    expect(input).toBeInTheDocument();
    expect(input.placeholder).toBe('Search');
    expect(label).toBeInTheDocument();
    expect(label.textContent).toBe('Test');
  });

  it('should display correctly the error when it´s available', async () => {
    render(<MemoryRouter> <Input label="Test" name="test" id="test" type="text" placeholder="Search" error="Error"
    />
    </MemoryRouter>);

    const error = screen.getByTestId('error-test');

    expect(error).toBeInTheDocument();
    expect(error.textContent).toBe('Error');
  });
});