const getGridColsClass = (cols: number): string => {
  const gridColsMap: Record<number, string> = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
  };
  return gridColsMap[cols] || 'grid-cols-1';
};

export default getGridColsClass;
