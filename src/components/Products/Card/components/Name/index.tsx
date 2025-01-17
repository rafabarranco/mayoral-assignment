import { FC } from 'react';

import { ICardNameProps } from './types';

const CardName: FC<ICardNameProps> = ({ name }) => (
  <h3 className="text-md text-gray-500 text-center truncate w-full overflow-hidden whitespace-nowrap">
    {name}
  </h3>
);

export default CardName;
