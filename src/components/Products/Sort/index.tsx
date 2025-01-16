import { FC } from 'react';

import { TSortOrder } from 'models/Product';
import { IProductsSortProps } from './types';

const ProductsSort: FC<IProductsSortProps> = ({ sortOrder, onChangeOrder }) => (
  <div className="w-full flex justify-end items-center">
    <select
      className="w-full md:w-auto p-2 border-2 border-gray-300 rounded-lg text-gray-700 focus:outline-none"
      value={sortOrder}
      onChange={(e) => onChangeOrder(e.target.value as TSortOrder)}
    >
      <option value="">Ordenar</option>
      <option value="asc">Precio Ascendente</option>
      <option value="desc">Precio Descendente</option>
    </select>
  </div>
);

export default ProductsSort;
