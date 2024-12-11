import { act, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Root } from '@/pages/Root';
import { Suspense } from 'react';

describe('Root Page', () => {
  it('should render correctly the Page', async () => {
    const userResponse = Promise.resolve();
    let container;
    await act(async () => {
      const result = render(
        <MemoryRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Root userResponse={userResponse} />
          </Suspense>
        </MemoryRouter>
      );
      container = result.container;
    });

    const textHeader = screen.getByText(/Food for Everyone/i);
    const image = screen.getByAltText('logo-title');
    
    expect(textHeader).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(container).toBeInTheDocument();
  });
});