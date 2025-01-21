import { render, screen } from '@testing-library/react';

import CardColors from 'components/Products/Card/components/Colors';

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, title }: { src: string; alt: string; title: string }) => (
    <img title={title} src={src} alt={alt} />
  ),
}));

const mockColors = [
  {
    id: '1',
    name: 'Red',
    image: 'https://example.com/red.jpg',
  },
  {
    id: '2',
    name: 'Blue',
    image: 'https://example.com/blue.jpg',
  },
];

describe('CardColors', () => {
  it('renders images when colors are provided', () => {
    render(<CardColors colors={mockColors} />);

    mockColors.forEach((color) => {
      const image = screen.getByAltText(color.name);
      expect(image).toBeInTheDocument();
      expect(image.getAttribute('src')).toBe(color.image);
    });
  });

  it('does not render anything when colors are empty', () => {
    render(<CardColors colors={[]} />);

    expect(screen.queryByRole('img')).toBeNull();
  });

  it('renders the correct number of images for the provided colors', () => {
    render(<CardColors colors={mockColors} />);

    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(mockColors.length);
  });

  it('renders images with the correct title attribute', () => {
    render(<CardColors colors={mockColors} />);

    mockColors.forEach((color) => {
      const image = screen.getByAltText(color.name);
      expect(image).toHaveAttribute('title', color.name);
    });
  });
});
