import { FC, Suspense, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

import { fetchProducts } from 'lib/products/fetch';

import ProductsSort from './Sort';
import ProductsSearchBar from './SearchBar';

import { IProduct, TSortOrder } from 'models/Product';
import { IProductsProps } from './types';

const ProductsList = dynamic(() => import('./List'), {
  ssr: false,
});

const Products: FC<IProductsProps> = ({ initialProducts }) => {
  const [products, setProducts] = useState<IProduct[]>(initialProducts);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<TSortOrder>('' as TSortOrder);

  const onChangeTerm = (term: string) => {
    setSearchTerm(term);
  };

  const onChangeOrder = (order: TSortOrder) => {
    setSortOrder(order);
  };

  const handleSearch = async () => {
    const data = await fetchProducts(searchTerm, sortOrder);
    setProducts(data);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleSearch();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchTerm, sortOrder]);

  return (
    <>
      <div className="flex flex-col gap-4 mt-4 mb-8 md:flex-row-reverse md:justify-between md:items-center">
        <ProductsSort sortOrder={sortOrder} onChangeOrder={onChangeOrder} />
        <ProductsSearchBar searchTerm={searchTerm} onChangeTerm={onChangeTerm} />
      </div>
      <Suspense fallback={<p>Cargando productos...</p>}>
        <ProductsList products={products} />
      </Suspense>
    </>
  );
};

export default Products;
