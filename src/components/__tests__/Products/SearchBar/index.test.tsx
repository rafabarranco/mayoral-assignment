import { render, screen, fireEvent } from '@testing-library/react';

import ProductsSearchBar from 'components/Products/SearchBar';

describe('ProductsSearchBar', () => {
  it('renders the input with correct placeholder and value', () => {
    const mockOnChange = jest.fn();
    const searchTerm = 'Test';

    render(<ProductsSearchBar searchTerm={searchTerm} onChangeTerm={mockOnChange} />);

    const input = screen.getByPlaceholderText('Buscar');
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue(searchTerm);
  });

  it('calls onChangeTerm when the input value changes', () => {
    const mockOnChange = jest.fn();
    const searchTerm = '';

    render(<ProductsSearchBar searchTerm={searchTerm} onChangeTerm={mockOnChange} />);

    const input = screen.getByPlaceholderText('Buscar');
    fireEvent.change(input, { target: { value: 'New search term' } });

    expect(mockOnChange).toHaveBeenCalledWith('New search term');
  });

  it('renders the search icon', () => {
    const mockOnChange = jest.fn();
    const searchTerm = '';

    render(<ProductsSearchBar searchTerm={searchTerm} onChangeTerm={mockOnChange} />);

    const icon = document.querySelector('.text-gray-500');
    expect(icon).toBeInTheDocument();
  });
});
