import { GetStaticProps } from 'next';

import { fetchProducts } from 'lib/products/fetch';

import Products from 'components/Products';

import { IProductsProps } from 'models/Product';

export default function ProductsPage({ initialProducts }: IProductsProps) {
  return <Products initialProducts={initialProducts} />;
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const initialProducts = await fetchProducts();
    return {
      props: {
        initialProducts,
      },
      revalidate: 3600,
    };
  } catch (error) {
    return {
      props: {
        initialProducts: [],
      },
    };
  }
};
