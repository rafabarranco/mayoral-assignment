import { render, screen } from '@testing-library/react';

import RootLayout from 'containers/RootLayout';

describe('RootLayout', () => {
  it('renders children correctly', () => {
    render(
      <RootLayout>
        <div>Test Child</div>
      </RootLayout>,
    );

    expect(screen.getByText('Test Child')).toBeInTheDocument();
  });

  it('has the correct class name', () => {
    render(
      <RootLayout>
        <div>Test Child</div>
      </RootLayout>,
    );

    expect(screen.getByTestId('root-layout')).toHaveClass('px-4');
  });
});
