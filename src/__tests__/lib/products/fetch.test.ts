import { fetchProducts } from 'lib/products/fetch';

import { IProduct } from 'models/Product';

describe('fetchProducts', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('fetches products successfully with query parameters', async () => {
    const mockProducts: IProduct[] = [
      {
        id: '300000000008748645',
        name: 'Chaquetón ultraligero chico',
        image: 'https://example.com/product.jpg',
        price: { retail: 47.99, current: 38.39, isDiscounted: true, discountPercentage: 20 },
        colors: [],
      },
    ];

    fetch.mockResponseOnce(JSON.stringify(mockProducts));

    const name = 'chaquetón';
    const sort = 'price';

    const products = await fetchProducts(name, sort);

    expect(fetch).toHaveBeenCalledWith(
      `${process.env.NEXT_PUBLIC_API_URL}/products?name=${name}&sort=${sort}`,
    );

    expect(products).toEqual(mockProducts);
  });

  it('throws an error when the fetch fails due to non-ok response', async () => {
    fetch.mockResponseOnce('', { status: 404 });

    try {
      await fetchProducts();
    } catch (error) {
      expect(error).toEqual(new Error('Failed to fetch products'));
    }
  });

  it('throws an error when the fetch fails due to network issues', async () => {
    fetch.mockRejectOnce(new Error('Network error'));

    try {
      await fetchProducts();
    } catch (error) {
      expect(error).toEqual(new Error('Network error'));
    }
  });
});
