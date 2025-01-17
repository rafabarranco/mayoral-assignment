import { FC } from 'react';

import { ICardPriceProps } from './types';

const CardPrice: FC<ICardPriceProps> = ({ price }) => {
  const parsePrice = (price: number): string => {
    return price.toFixed(2).replace('.', ',');
  };
  return (
    <div className="mt-2 text-center">
      {price.isDiscounted ? (
        <div className="text-gray-400">
          <p className="line-through">{`${parsePrice(price.retail)} €`}</p>
          <p className="text-red-500">{`${parsePrice(price.current)} € (-${parsePrice(
            price.discountPercentage,
          )}%)`}</p>
        </div>
      ) : (
        <p>{`${parsePrice(price.current)} €`}</p>
      )}
    </div>
  );
};

export default CardPrice;
