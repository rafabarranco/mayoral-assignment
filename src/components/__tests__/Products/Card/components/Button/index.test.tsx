import { render, screen, fireEvent } from '@testing-library/react';

import CardButton from 'components/Products/Card/components/Button';

describe('CardButton', () => {
  it('renders the button with correct text', () => {
    render(<CardButton />);

    expect(screen.getByText('AÑADIR')).toBeInTheDocument();
  });

  it('has the correct initial styles', () => {
    render(<CardButton />);

    const button = screen.getByText('AÑADIR');

    expect(button).toHaveClass('w-fit');
    expect(button).toHaveClass('bg-blue-600');
    expect(button).toHaveClass('text-white');
    expect(button).toHaveClass('py-1');
    expect(button).toHaveClass('px-3');
    expect(button).toHaveClass('rounded-lg');
  });

  it('changes color on hover', () => {
    render(<CardButton />);

    const button = screen.getByText('AÑADIR');

    fireEvent.mouseOver(button);

    expect(button).toHaveClass('hover:bg-blue-700');
  });
});
