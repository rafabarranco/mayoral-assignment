import { FC } from 'react';
import { ICardSectionProps } from './types';

const CardSection: FC<ICardSectionProps> = ({ children }) => (
  <section className="flex-grow mt-6 flex flex-col items-center">{children}</section>
);

export default CardSection;
