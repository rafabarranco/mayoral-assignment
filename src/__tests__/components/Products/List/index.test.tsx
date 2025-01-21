import { render, screen } from '@testing-library/react';

import ProductsList from 'components/Products/List';

jest.mock('components/Products/Card', () => ({
  __esModule: true,
  default: ({ name, price }: { name: string; price: { current: number; retail: number } }) => (
    <div>
      <h2>{name}</h2>
      <p>{price.current} €</p>
    </div>
  ),
}));

describe('ProductsList', () => {
  const mockProducts = [
    {
      id: '1',
      name: 'Product 1',
      price: { current: 10, retail: 15 },
    },
    {
      id: '2',
      name: 'Product 2',
      price: { current: 20, retail: 25 },
    },
    {
      id: '3',
      name: 'Product 3',
      price: { current: 30, retail: 35 },
    },
  ];

  it('renders a list of products correctly', () => {
    render(<ProductsList products={mockProducts} />);

    mockProducts.forEach((product) => {
      expect(screen.getByText(product.name)).toBeInTheDocument();
      expect(screen.getByText(`${product.price.current} €`)).toBeInTheDocument();
    });
  });

  it('renders the correct number of ProductCard components', () => {
    render(<ProductsList products={mockProducts} />);

    const productCards = screen.getAllByText(/Product/);
    expect(productCards).toHaveLength(mockProducts.length);
  });

  it('does not render any products when the products list is empty', () => {
    render(<ProductsList products={[]} />);

    expect(screen.queryByText(/Product/)).toBeNull();
  });
});
