import { FC } from 'react';

import { IGridToggleProps } from './types';

const ProductsGridToggle: FC<IGridToggleProps> = ({ toggleConfig, cols, onChangeCols }) => {
  const handleToggleClick = () => {
    const nextCols = cols === toggleConfig[0] ? toggleConfig[1] : toggleConfig[0];
    console.log(nextCols);
    onChangeCols(nextCols);
  };

  const selectedLabel = cols === toggleConfig[0] ? toggleConfig[0] : toggleConfig[1];

  return (
    <div
      className="relative flex items-center w-12 h-6 p-0.5 bg-blue-300 rounded-full cursor-pointer"
      onClick={handleToggleClick}
    >
      <div
        className={`absolute top-0 left-0 w-1/2 h-full bg-white rounded-full transition-all duration-300 
          ${cols === toggleConfig[0] ? 'translate-x-0' : 'translate-x-full'}
          border-2 border-blue-400 flex items-center justify-center text-xs font-semibold text-blue-600`}
      >
        {selectedLabel}
      </div>
    </div>
  );
};

export default ProductsGridToggle;
