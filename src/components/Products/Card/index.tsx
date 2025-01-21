import { FC } from 'react';

import CardThumbnail from './components/Thumbnail';
import CardSection from './components/Section';
import CardName from './components/Name';
import CardPrice from './components/Price';
import CardColors from './components/Colors';
import CardButton from './components/Button';

import { TProductCardProps } from './types';

const ProductCard: FC<TProductCardProps> = ({ image, name, price, colors }) => (
  <article className="border border-blue-200 rounded-lg p-4 shadow-md w-auto flex flex-col h-full">
    <figure className="flex justify-center items-center flex-shrink-0">
      <CardThumbnail image={image} name={name} />
    </figure>
    <CardSection>
      <CardName name={name} />
    </CardSection>
    <CardSection>
      <CardPrice price={price} />
    </CardSection>
    <CardSection>
      <CardColors colors={colors} />
    </CardSection>
    <footer className="mt-4 flex justify-center items-center">
      <CardButton />
    </footer>
  </article>
);

export default ProductCard;
