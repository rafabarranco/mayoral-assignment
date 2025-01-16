import { GetStaticProps, NextPage } from 'next';

import { fetchProducts } from 'lib/products/fetch';

import Products from 'components/Products';

import { IProductsProps } from './types';

const ProductsPage: NextPage = ({ initialProducts }: IProductsProps) => (
  <Products initialProducts={initialProducts} />
);

export const getStaticProps: GetStaticProps = async () => {
  const initialProducts = await fetchProducts();

  return {
    props: {
      initialProducts,
    },
    revalidate: 10,
  };
};

export default ProductsPage;
