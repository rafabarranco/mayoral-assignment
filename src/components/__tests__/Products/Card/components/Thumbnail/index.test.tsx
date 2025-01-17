import { render, screen } from '@testing-library/react';

import CardThumbnail from 'components/Products/Card/components/Thumbnail';

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({
    src,
    alt,
    width,
    height,
  }: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }) => <img src={src} alt={alt} width={width} height={height} />,
}));

describe('CardThumbnail', () => {
  const image = 'https://example.com/image.jpg';
  const name = 'Sample Image';

  it('renders the image with correct properties', () => {
    render(<CardThumbnail image={image} name={name} />);

    const imgElement = screen.getByRole('img');
    expect(imgElement).toBeInTheDocument();

    expect(imgElement).toHaveAttribute('src', image);
    expect(imgElement).toHaveAttribute('alt', name);
    expect(imgElement).toHaveAttribute('width', '300');
    expect(imgElement).toHaveAttribute('height', '300');
  });

  it('renders the image with the correct alt attribute', () => {
    render(<CardThumbnail image={image} name={name} />);

    const imgElement = screen.getByRole('img');
    expect(imgElement).toHaveAttribute('alt', name);
  });

  it('renders the image with the correct width and height', () => {
    render(<CardThumbnail image={image} name={name} />);

    const imgElement = screen.getByRole('img');
    expect(imgElement).toHaveAttribute('width', '300');
    expect(imgElement).toHaveAttribute('height', '300');
  });
});
