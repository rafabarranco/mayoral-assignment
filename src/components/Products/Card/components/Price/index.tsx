import { FC } from 'react';

import { ICardPriceProps } from './types';

const CardPrice: FC<ICardPriceProps> = ({ price }) => (
  <div className="mt-2 text-center">
    {price.isDiscounted ? (
      <div className="text-gray-500">
        <p className="line-through">{`${price.retail} €`}</p>
        <p className="text-red-500">{`${price.current} € (-${price.discountPercentage}%)`}</p>
      </div>
    ) : (
      <p>{`${price.current} €`}</p>
    )}
  </div>
);

export default CardPrice;
