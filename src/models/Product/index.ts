export type TSortOrder = 'asc' | 'desc';

export interface IPrice {
  retail: number;
  current: number;
  isDiscounted: boolean;
  discountPercentage: number;
}

export interface IColor {
  id: string;
  name: string;
  image: string;
}

export interface IProduct {
  id: string;
  name: string;
  image: string;
  price: IPrice;
  colors: IColor[];
}
