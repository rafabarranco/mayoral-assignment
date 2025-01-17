import { render, screen } from '@testing-library/react';

import CardName from 'components/Products/Card/components/Name';

describe('CardName', () => {
  it('renders the name correctly', () => {
    const testName = 'Test Product Name';

    render(<CardName name={testName} />);

    const nameElement = screen.getByText(testName);
    expect(nameElement).toBeInTheDocument();
  });

  it('has the correct class names', () => {
    const testName = 'Test Product Name';

    render(<CardName name={testName} />);

    const nameElement = screen.getByText(testName);
    expect(nameElement).toHaveClass('text-md');
    expect(nameElement).toHaveClass('text-gray-500');
    expect(nameElement).toHaveClass('text-center');
    expect(nameElement).toHaveClass('truncate');
    expect(nameElement).toHaveClass('w-full');
    expect(nameElement).toHaveClass('overflow-hidden');
    expect(nameElement).toHaveClass('whitespace-nowrap');
  });

  it('renders an empty string when no name is provided', () => {
    render(<CardName name="" />);

    const nameElement = screen.queryByRole('heading');
    expect(nameElement).toBeInTheDocument();
    expect(nameElement).toHaveTextContent('');
  });
});
