/* import { render, screen, fireEvent, waitFor } from '@testing-library/react';
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

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the Products component with initial products', async () => {
    render(<Products initialProducts={initialProducts} />);

    await waitFor(() => screen.getByText('Product 1'));
    expect(screen.getByText('Product 1')).toBeInTheDocument();
  });

  it('calls fetchProducts when search term changes', async () => {
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

    await waitFor(() => screen.getByText('Product 2'));
    expect(fetchProducts).toHaveBeenCalledWith('Product 2', '');
    expect(screen.getByText('Product 2')).toBeInTheDocument();
  });

  it('calls fetchProducts when sort order changes', async () => {
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

    const sortSelect = screen.getByRole('combobox');
    fireEvent.change(sortSelect, { target: { value: 'desc' } });

    await waitFor(() => screen.getByText('Product 3'));
    expect(fetchProducts).toHaveBeenCalledWith('', 'desc');
    expect(screen.getByText('Product 3')).toBeInTheDocument();
  });

  it('updates sort order state when sort option is selected', async () => {
    (fetchProducts as jest.Mock).mockResolvedValueOnce([]);

    render(<Products initialProducts={initialProducts} />);

    const sortSelect = screen.getByRole('combobox');
    fireEvent.change(sortSelect, { target: { value: 'asc' } });

    await waitFor(() => {
      expect(fetchProducts).toHaveBeenCalledWith('', 'asc');
    });
  });

  it('renders loading text if no columns or products are available', () => {
    render(<Products initialProducts={[]} />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
 */

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

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the Products component with initial products', async () => {
    render(<Products initialProducts={initialProducts} />);

    await waitFor(() => screen.getByText('Product 1'));
    expect(screen.getByText('Product 1')).toBeInTheDocument();
  });

  it('calls fetchProducts when search term changes', async () => {
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

    await waitFor(() => screen.getByText('Product 2'));
    expect(fetchProducts).toHaveBeenCalledWith('Product 2', '');
    expect(screen.getByText('Product 2')).toBeInTheDocument();
  });

  it('calls fetchProducts when sort order changes', async () => {
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

    const sortSelect = screen.getByRole('combobox');
    fireEvent.change(sortSelect, { target: { value: 'desc' } });

    await waitFor(() => screen.getByText('Product 3'));
    expect(fetchProducts).toHaveBeenCalledWith('', 'desc');
    expect(screen.getByText('Product 3')).toBeInTheDocument();
  });

  it('updates sort order state when sort option is selected', async () => {
    (fetchProducts as jest.Mock).mockResolvedValueOnce([]);

    render(<Products initialProducts={initialProducts} />);

    const sortSelect = screen.getByRole('combobox');
    fireEvent.change(sortSelect, { target: { value: 'asc' } });

    await waitFor(() => {
      expect(fetchProducts).toHaveBeenCalledWith('', 'asc');
    });
  });

  it('renders loading text if no columns or products are available', () => {
    render(<Products initialProducts={[]} />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders grid configuration for mobile devices', () => {
    Object.defineProperty(navigator, 'userAgent', {
      value:
        'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/537.36 (KHTML, like Gecko) Mobile/15E148',
      configurable: true,
    });

    render(<Products initialProducts={initialProducts} />);

    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByText('Product 1')).toBeInTheDocument();
  });

  it('renders grid configuration for non-mobile devices', () => {
    Object.defineProperty(navigator, 'userAgent', {
      value:
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
      configurable: true,
    });

    render(<Products initialProducts={initialProducts} />);

    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByText('Product 1')).toBeInTheDocument();
  });
});
