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

    const toggle = screen.getByRole('button'); // Verifica si el toggle es un botón
    expect(toggle).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument(); // Verifica que el valor 2 esté en pantalla
  });

  it('changes columns value when clicked', () => {
    const toggleConfig = [2, 3];
    const cols = 2;
    const onChangeCols = jest.fn();

    render(
      <ProductsGridToggle toggleConfig={toggleConfig} cols={cols} onChangeCols={onChangeCols} />,
    );

    const toggle = screen.getByRole('button');
    fireEvent.click(toggle); // Dispara el clic en el toggle

    // Verifica que onChangeCols haya sido llamado con el valor adecuado
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
    fireEvent.click(toggle); // Cambia el valor de las columnas al hacer clic

    // Verifica que onChangeCols haya sido llamado con el valor adecuado
    expect(onChangeCols).toHaveBeenCalledWith(2);
  });
});
