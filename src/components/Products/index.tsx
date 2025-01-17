import { FC, Suspense, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

import { fetchProducts } from 'lib/products/fetch';

import ProductsSort from './Sort';
import ProductsSearchBar from './SearchBar';

import { IProduct, TSortOrder } from 'models/Product';
import { IProductsProps } from './types';
import ProductsGridToggle from './Toggle';

const ProductsList = dynamic(() => import('./List'), {
  ssr: false,
});

const Products: FC<IProductsProps> = ({ initialProducts }) => {
  const [products, setProducts] = useState<IProduct[]>(initialProducts);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<TSortOrder>('' as TSortOrder);
  const [cols, setCols] = useState<number | null>(null);

  const isMobile =
    typeof window !== 'undefined' && /Mobile|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  const gridConfig = isMobile ? [2, 3] : [4, 5];

  const handleSearch = async () => {
    const data = await fetchProducts(searchTerm, sortOrder);
    setProducts(data);
  };

  useEffect(() => {
    if (!cols) setCols(isMobile ? 2 : 4);
  }, [isMobile, cols]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleSearch();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchTerm, sortOrder]);

  if (!cols || initialProducts.length < 1) return <p>Loading...</p>;

  return (
    <>
      <div className="flex flex-col gap-4 mt-4 mb-8 md:flex-row-reverse md:justify-between md:items-center">
        <ProductsSort sortOrder={sortOrder} onChangeOrder={setSortOrder} />
        <ProductsSearchBar searchTerm={searchTerm} onChangeTerm={setSearchTerm} />
      </div>
      {isMobile && <hr className="mb-4" />}
      <div className="flex justify-end align-items-center mb-2">
        <ProductsGridToggle toggleConfig={gridConfig} cols={cols} onChangeCols={setCols} />
      </div>
      <Suspense fallback={<p>Cargando productos...</p>}>
        <ProductsList cols={cols} products={products} />
      </Suspense>
    </>
  );
};

export default Products;
