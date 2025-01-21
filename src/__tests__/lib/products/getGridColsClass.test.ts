import getGridColsClass from 'lib/products/getGridColsClass';

describe('getGridColsClass', () => {
  it('returns grid-cols-1 for 1 column', () => {
    expect(getGridColsClass(1)).toBe('grid-cols-1');
  });

  it('returns grid-cols-2 for 2 columns', () => {
    expect(getGridColsClass(2)).toBe('grid-cols-2');
  });

  it('returns grid-cols-3 for 3 columns', () => {
    expect(getGridColsClass(3)).toBe('grid-cols-3');
  });

  it('returns grid-cols-4 for 4 columns', () => {
    expect(getGridColsClass(4)).toBe('grid-cols-4');
  });

  it('returns grid-cols-5 for 5 columns', () => {
    expect(getGridColsClass(5)).toBe('grid-cols-5');
  });

  it('returns grid-cols-1 for an invalid number of columns', () => {
    expect(getGridColsClass(6)).toBe('grid-cols-1'); // Por defecto
    expect(getGridColsClass(0)).toBe('grid-cols-1');
    expect(getGridColsClass(-1)).toBe('grid-cols-1');
  });
});
