import { act, Suspense } from 'react';
import { render, screen } from '@testing-library/react';

import { fetchProducts } from 'lib/products/fetch';

import ProductsPage, { getStaticProps } from 'pages';

jest.mock('lib/products/fetch', () => ({
  fetchProducts: jest.fn(),
}));

const mockProducts = [
  {
    id: '300000000008748645',
    name: 'Chaquetón ultraligero chico',
    image: 'https://example.com/product.jpg',
    price: { retail: 47.99, current: 38.39, isDiscounted: true, discountPercentage: 20 },
    colors: [],
  },
];

describe('ProductsPage', () => {
  it('renders products correctly', async () => {
    (fetchProducts as jest.Mock).mockResolvedValueOnce(mockProducts);

    await act(async () => {
      render(
        <Suspense fallback="Loading...">
          <ProductsPage initialProducts={mockProducts} />
        </Suspense>,
      );
    });

    mockProducts.forEach((product) => {
      expect(
        screen.getByText((content, element) => content.includes(product.name)),
      ).toBeInTheDocument();
    });
  });

  it('fetches products with getStaticProps', async () => {
    (fetchProducts as jest.Mock).mockResolvedValue(mockProducts);

    const { props } = await getStaticProps();

    expect(fetchProducts).toHaveBeenCalled();
    expect(props.initialProducts).toEqual(mockProducts);
  });
});
