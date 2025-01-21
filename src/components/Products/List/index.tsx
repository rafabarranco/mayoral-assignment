import { FC } from 'react';

import getGridColsClass from 'lib/products/getGridColsClass';

import ProductCard from '../Card';

import { IProductListProps } from './types';

const ProductsList: FC<IProductListProps> = ({ products, cols }) => (
  <div className={`grid gap-4 ${getGridColsClass(cols)} last:mb-3`}>
    {products.map((product) => (
      <ProductCard key={product.id} {...product} />
    ))}
  </div>
);

export default ProductsList;
