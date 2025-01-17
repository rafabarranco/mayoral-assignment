import { filterAndSortProducts } from 'lib/products/filterAndSort';

import { IProduct } from 'models/Product';

describe('filterAndSortProducts', () => {
  const mockProducts: IProduct[] = [
    {
      id: '1',
      name: 'Chaquetón ultraligero chico',
      image: 'https://example.com/product1.jpg',
      price: { retail: 47.99, current: 38.39, isDiscounted: true, discountPercentage: 20 },
      colors: [],
    },
    {
      id: '2',
      name: 'Chaqueta de invierno hombre',
      image: 'https://example.com/product2.jpg',
      price: { retail: 89.99, current: 70.79, isDiscounted: true, discountPercentage: 21 },
      colors: [],
    },
    {
      id: '3',
      name: 'Pantalón de nieve mujer',
      image: 'https://example.com/product3.jpg',
      price: { retail: 59.99, current: 50.99, isDiscounted: false, discountPercentage: 0 },
      colors: [],
    },
  ];

  it('filters products by name', () => {
    const name = 'chaquetón';
    const filtered = filterAndSortProducts(mockProducts, name, 'asc');

    console.log(filtered);

    expect(filtered).toEqual([
      {
        id: '1',
        name: 'Chaquetón ultraligero chico',
        image: 'https://example.com/product1.jpg',
        price: { retail: 47.99, current: 38.39, isDiscounted: true, discountPercentage: 20 },
        colors: [],
      },
    ]);
  });

  it('sorts products by price in ascending order', () => {
    const sorted = filterAndSortProducts(mockProducts, '', 'asc');

    expect(sorted).toEqual([
      {
        id: '1',
        name: 'Chaquetón ultraligero chico',
        image: 'https://example.com/product1.jpg',
        price: { retail: 47.99, current: 38.39, isDiscounted: true, discountPercentage: 20 },
        colors: [],
      },
      {
        id: '3',
        name: 'Pantalón de nieve mujer',
        image: 'https://example.com/product3.jpg',
        price: { retail: 59.99, current: 50.99, isDiscounted: false, discountPercentage: 0 },
        colors: [],
      },
      {
        id: '2',
        name: 'Chaqueta de invierno hombre',
        image: 'https://example.com/product2.jpg',
        price: { retail: 89.99, current: 70.79, isDiscounted: true, discountPercentage: 21 },
        colors: [],
      },
    ]);
  });

  it('sorts products by price in descending order', () => {
    const sorted = filterAndSortProducts(mockProducts, '', 'desc');

    expect(sorted).toEqual([
      {
        id: '2',
        name: 'Chaqueta de invierno hombre',
        image: 'https://example.com/product2.jpg',
        price: { retail: 89.99, current: 70.79, isDiscounted: true, discountPercentage: 21 },
        colors: [],
      },
      {
        id: '3',
        name: 'Pantalón de nieve mujer',
        image: 'https://example.com/product3.jpg',
        price: { retail: 59.99, current: 50.99, isDiscounted: false, discountPercentage: 0 },
        colors: [],
      },
      {
        id: '1',
        name: 'Chaquetón ultraligero chico',
        image: 'https://example.com/product1.jpg',
        price: { retail: 47.99, current: 38.39, isDiscounted: true, discountPercentage: 20 },
        colors: [],
      },
    ]);
  });

  it('returns an empty array when no products match the name filter', () => {
    const filtered = filterAndSortProducts(mockProducts, 'camiseta', 'asc');

    expect(filtered).toEqual([]);
  });

  it('returns all products if no name filter is provided', () => {
    const filtered = filterAndSortProducts(mockProducts, '', 'asc');
    expect(filtered).toEqual(mockProducts);
  });
});
