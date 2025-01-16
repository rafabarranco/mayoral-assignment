import { FC } from 'react';

import ProductCard from '../Card';

import { IProductListProps } from './types';

const ProductsList: FC<IProductListProps> = ({ products }) => (
  <div className="grid gap-4 grid-cols-2 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 last:mb-3">
    {products.map((product) => (
      <ProductCard key={product.id} {...product} />
    ))}
  </div>
);

export default ProductsList;
