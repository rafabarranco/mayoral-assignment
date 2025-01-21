import { render, screen, fireEvent } from '@testing-library/react';

import ProductsSort from 'components/Products/Sort';

import { TSortOrder } from 'models/Product';

describe('ProductsSort', () => {
  it('renders the sort options correctly', () => {
    const mockOnChangeOrder = jest.fn();
    const sortOrder = '';

    render(<ProductsSort sortOrder={sortOrder as TSortOrder} onChangeOrder={mockOnChangeOrder} />);

    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeInTheDocument();

    expect(screen.getByRole('option', { name: 'Precio Ascendente' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Precio Descendente' })).toBeInTheDocument();
  });

  it('sets the correct initial value for the sort order', () => {
    const mockOnChangeOrder = jest.fn();
    const sortOrder = 'asc';

    render(<ProductsSort sortOrder={sortOrder} onChangeOrder={mockOnChangeOrder} />);

    const selectElement = screen.getByRole('combobox');
    expect(selectElement.value).toBe('asc');
  });

  it('calls onChangeOrder when a new sort order is selected', () => {
    const mockOnChangeOrder = jest.fn();
    const sortOrder = '';

    render(<ProductsSort sortOrder={sortOrder as TSortOrder} onChangeOrder={mockOnChangeOrder} />);

    const selectElement = screen.getByRole('combobox');
    fireEvent.change(selectElement, { target: { value: 'desc' } });

    expect(mockOnChangeOrder).toHaveBeenCalledWith('desc');
  });
});
