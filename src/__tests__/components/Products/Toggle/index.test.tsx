import { render, screen, fireEvent } from '@testing-library/react';
import ProductsGridToggle from 'components/Products/Toggle';

describe('ProductsGridToggle', () => {
  it('renders with initial columns value', () => {
    const toggleConfig = [2, 3];
    const cols = 2;
    const onChangeCols = jest.fn();

    render(
      <ProductsGridToggle toggleConfig={toggleConfig} cols={cols} onChangeCols={onChangeCols} />,
    );

    const toggle = screen.getByRole('button');
    expect(toggle).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('changes columns value when clicked', () => {
    const toggleConfig = [2, 3];
    const cols = 2;
    const onChangeCols = jest.fn();

    render(
      <ProductsGridToggle toggleConfig={toggleConfig} cols={cols} onChangeCols={onChangeCols} />,
    );

    const toggle = screen.getByRole('button');
    fireEvent.click(toggle);

    expect(onChangeCols).toHaveBeenCalledWith(3);
  });

  it('calls onChangeCols with correct values when toggled', () => {
    const toggleConfig = [2, 3];
    const cols = 3;
    const onChangeCols = jest.fn();

    render(
      <ProductsGridToggle toggleConfig={toggleConfig} cols={cols} onChangeCols={onChangeCols} />,
    );

    const toggle = screen.getByRole('button');
    fireEvent.click(toggle);

    expect(onChangeCols).toHaveBeenCalledWith(2);
  });
});
