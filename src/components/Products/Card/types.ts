import { IProduct } from 'models/Product';

export type TProductCardProps = Omit<IProduct, 'id'>;
