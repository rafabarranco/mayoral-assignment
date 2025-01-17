import { createMocks } from 'node-mocks-http';

import handler from 'pages/api/products';

import { filterAndSortProducts } from 'lib/products/filterAndSort';

jest.mock('lib/products/filterAndSort', () => ({
  filterAndSortProducts: jest.fn(),
}));

describe('API Products Handler', () => {
  it('returns filtered and sorted products based on query parameters', async () => {
    const mockFilteredProducts = [
      {
        id: '300000000008748645',
        name: 'Chaquetón ultraligero chico',
        image: 'https://example.com/product.jpg',
        price: { retail: 47.99, current: 38.39, isDiscounted: true, discountPercentage: 20 },
        colors: [],
      },
    ];

    (filterAndSortProducts as jest.Mock).mockReturnValue(mockFilteredProducts);

    const { req, res } = createMocks({
      method: 'GET',
      query: { name: 'chaquetón', sort: 'price' },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);

    expect(JSON.parse(res._getData())).toEqual(mockFilteredProducts);
    expect(res._getHeaders()['cache-control']).toBe('s-maxage=10, stale-while-revalidate');
  });

  it('returns the default products if no query parameters are provided', async () => {
    const mockDefaultProducts = [
      {
        id: '300000000008748645',
        name: 'Chaquetón ultraligero chico',
        image: 'https://example.com/product.jpg',
        price: { retail: 47.99, current: 38.39, isDiscounted: true, discountPercentage: 20 },
        colors: [],
      },
    ];

    (filterAndSortProducts as jest.Mock).mockReturnValue(mockDefaultProducts);

    const { req, res } = createMocks({
      method: 'GET',
      query: {},
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);

    expect(JSON.parse(res._getData())).toEqual(mockDefaultProducts);
  });
});
