import { FC } from 'react';
import { FaSearch } from 'react-icons/fa';

import { IProductsSearchBarProps } from './types';

const ProductsSearchBar: FC<IProductsSearchBarProps> = ({ searchTerm, onChangeTerm }) => (
  <div className="relative w-full flex justify-start items-center">
    <input
      className="w-full p-2 pl-10 border-2 border-gray-300 rounded-lg text-gray-700 focus:outline-none"
      type="text"
      placeholder="Buscar"
      value={searchTerm}
      onChange={(e) => onChangeTerm(e.target.value)}
    />
    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
  </div>
);

export default ProductsSearchBar;
