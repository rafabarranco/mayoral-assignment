import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import { fetchProducts } from 'lib/products/fetch';

import Products from 'components/Products';

jest.mock('lib/products/fetch', () => ({
  fetchProducts: jest.fn(),
}));

describe('Products Component', () => {
  const initialProducts = [
    {
      id: '1',
      name: 'Product 1',
      image: 'https://example.com/product1.jpg',
      price: { current: 30, retail: 40, isDiscounted: true, discountPercentage: 25 },
      colors: [],
    },
  ];

  it('renders Products component with initial products', async () => {
    render(<Products initialProducts={initialProducts} />);

    await waitFor(() => screen.getByText('Product 1'));
    expect(screen.getByText('Product 1')).toBeInTheDocument();
  });

  it('calls fetchProducts on search term change', async () => {
    (fetchProducts as jest.Mock).mockResolvedValueOnce([
      {
        id: '2',
        name: 'Product 2',
        image: 'https://example.com/product2.jpg',
        price: { current: 20, retail: 30, isDiscounted: true, discountPercentage: 33.33 },
        colors: [],
      },
    ]);

    render(<Products initialProducts={initialProducts} />);

    const searchInput = screen.getByPlaceholderText('Buscar');
    fireEvent.change(searchInput, { target: { value: 'Product 2' } });

    await waitFor(() => screen.findByText('Product 2'));
    expect(fetchProducts).toHaveBeenCalledWith('Product 2', '');
    expect(screen.getByText('Product 2')).toBeInTheDocument();
  });

  it('calls fetchProducts with the correct sort order', async () => {
    (fetchProducts as jest.Mock).mockResolvedValueOnce([
      {
        id: '3',
        name: 'Product 3',
        image: 'https://example.com/product3.jpg',
        price: { current: 50, retail: 60, isDiscounted: false, discountPercentage: 0 },
        colors: [],
      },
    ]);

    render(<Products initialProducts={initialProducts} />);

    const sortButton = screen.getByText('Ordenar');
    fireEvent.click(sortButton);

    await waitFor(() => screen.getByText('Product 3'));

    expect(fetchProducts).toHaveBeenCalledWith('', '');
    expect(screen.getByText('Product 3')).toBeInTheDocument();
  });

  it('calls onChangeOrder function and updates sortOrder state', async () => {
    render(<Products initialProducts={initialProducts} />);

    const sortButton = screen.getByText('Ordenar');
    fireEvent.click(sortButton);

    expect(fetchProducts).toHaveBeenCalledWith('', '');
  });
});
