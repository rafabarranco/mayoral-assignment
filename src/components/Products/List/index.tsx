import { FC } from 'react';

import ProductCard from '../Card';

import { IProductListProps } from './types';

const ProductsList: FC<IProductListProps> = ({ products, cols }) => (
  <div className={`grid gap-4 grid-cols-${cols} last:mb-3`}>
    {products.map((product) => (
      <ProductCard key={product.id} {...product} />
    ))}
  </div>
);

export default ProductsList;
