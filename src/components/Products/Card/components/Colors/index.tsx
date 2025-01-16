import { FC } from 'react';
import Image from 'next/image';

import { ICardColorsProps } from './types';

const CardColors: FC<ICardColorsProps> = ({ colors }) => {
  return colors.length > 0 ? (
    <p className="text-gray-400 font-bold mb-2">
      {colors.map(({ id, name, image }) => (
        <Image
          className="object-cover"
          key={id}
          src={image}
          alt={name}
          width={20}
          height={20}
          title={name}
        />
      ))}
    </p>
  ) : (
    <></>
  );
};

export default CardColors;
