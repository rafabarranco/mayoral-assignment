import type { NextApiRequest, NextApiResponse } from 'next';

import products from 'data/products.json';

import { filterAndSortProducts } from 'lib/products/filterAndSort';

import { IProduct, TSortOrder } from 'models/Product';

const handler = (req: NextApiRequest, res: NextApiResponse<IProduct[]>) => {
  const { name = '', sort = '' } = req.query;

  const filteredAndSorted = filterAndSortProducts(
    products,
    name.toString(),
    sort.toString() as TSortOrder,
  );

  res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');
  res.status(200).json(filteredAndSorted);
};

export default handler;
