import { IProduct } from 'models/Product';

export const fetchProducts = async (name = '', sort = ''): Promise<IProduct[]> => {
  const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/products`;
  const res = await fetch(`${endpoint}?name=${name}&sort=${sort}`);

  if (!res.ok) throw new Error('Failed to fetch products');

  return res.json();
};
