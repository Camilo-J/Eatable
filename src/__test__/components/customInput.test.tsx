import { render, screen } from '@testing-library/react';
import { CustomInput } from '@/pages/Profile/components/CustomInput';

describe('Custom Input', () => {
  it('should render correctly the input', async () => {
    render(<CustomInput id="name" name="name" defaultValue="Test" type="text" placeholder="Jhon" label="Name" />);
    const input = screen.getByTestId('input-name');
    const label = screen.getByTestId('label-name');

    expect(input).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent('Name');
  });

  it('should render correctly the input with default value', async () => {
    render(<CustomInput id="" name="name" defaultValue="" type="text" placeholder="Jhon" label="Name" />);
    const input = screen.getByTestId('input-name');
    const label = screen.getByTestId('label-name');

    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });
});