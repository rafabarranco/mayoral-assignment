import { FC } from 'react';
import Image from 'next/image';

import { ICardThumbnailProps } from './types';

const CardThumbnail: FC<ICardThumbnailProps> = ({ image, name }) => (
  <Image className="w-full h-full" src={image} alt={name} width={300} height={300} />
);

export default CardThumbnail;
