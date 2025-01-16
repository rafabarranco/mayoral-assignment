import { TSortOrder } from 'models/Product';

export interface IProductsSortProps {
  sortOrder: TSortOrder;
  onChangeOrder(order: TSortOrder): void;
}
