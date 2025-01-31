import { IProduct, TSortOrder } from 'models/Product';

export const filterAndSortProducts = (
  products: IProduct[],
  name: string,
  sort: TSortOrder,
): IProduct[] => {
  const filtered = name
    ? products.filter((product) => product.name.toLowerCase().includes(name.toLowerCase()))
    : products;

  const sorted = filtered.sort((a, b) =>
    sort === 'asc' ? a.price.current - b.price.current : b.price.current - a.price.current,
  );

  return sorted;
};
