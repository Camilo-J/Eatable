import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { SessionPage } from '@/pages/Session';
import { MemoryRouter } from 'react-router';

describe('Session Page', () => {
  const user = userEvent.setup();

  it('should render correctly', async () => {
    render(<MemoryRouter><SessionPage /></MemoryRouter>);
    const image = screen.getByAltText('logo-title');
    const foodText = screen.getByText('Food for Everyone');
    const loginButtons = screen.getAllByText('Log in');
    const signupButtons = screen.getAllByText('Sign up');
    
    expect(image).toBeInTheDocument();
    expect(foodText).toBeInTheDocument();
    loginButtons.forEach((button) => expect(button).toBeInTheDocument());
    signupButtons.forEach((button) => expect(button).toBeInTheDocument());
  });

  it('should update the option selected', async () => {
    render(<MemoryRouter><SessionPage /></MemoryRouter>);
    const signupButton = screen.getByText('Sign up');
    const submitButton = screen.getByTestId('button-session');

    await user.click(signupButton);
    expect(submitButton).toHaveTextContent('Sign up');
  });
});