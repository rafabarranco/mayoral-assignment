import { render, screen } from '@testing-library/react';

import App from 'pages/_app';

jest.mock('next/router', () => require('next-router-mock'));

describe('App', () => {
  it('renders the RootLayout and Component', () => {
    const Component = () => <div>Test Component</div>;

    render(<App Component={Component} pageProps={{}} />);

    expect(screen.getByText('Test Component')).toBeInTheDocument();
    expect(screen.getByTestId('root-layout')).toBeInTheDocument();
  });
});
