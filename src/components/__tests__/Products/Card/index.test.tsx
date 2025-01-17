import { render, screen } from '@testing-library/react';

import ProductCard from 'components/Products/Card';

jest.mock('../../../Products/Card/components/Thumbnail', () => ({
  __esModule: true,
  default: ({ image, name }: { image: string; name: string }) => <img src={image} alt={name} />,
}));

jest.mock('../../../Products/Card/components/Section', () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

jest.mock('../../../Products/Card/components/Name', () => ({
  __esModule: true,
  default: ({ name }: { name: string }) => <h2>{name}</h2>,
}));

jest.mock('../../../Products/Card/components/Price', () => ({
  __esModule: true,
  default: ({ price }: { price: { current: number; retail: number } }) => <p>{price.current} €</p>,
}));

jest.mock('../../../Products/Card/components/Colors', () => ({
  __esModule: true,
  default: ({ colors }: { colors: { id: string; name: string; image: string }[] }) => (
    <div>
      {colors.map((color) => (
        <div key={color.id}>{color.name}</div>
      ))}
    </div>
  ),
}));

jest.mock('../../../Products/Card/components/Button', () => ({
  __esModule: true,
  default: () => <button>Buy Now</button>,
}));

describe('ProductCard', () => {
  const product = {
    image: 'https://example.com/image.jpg',
    name: 'Sample Product',
    price: { current: 20, retail: 30 },
    colors: [
      { id: '1', name: 'Red', image: 'https://example.com/red.jpg' },
      { id: '2', name: 'Blue', image: 'https://example.com/blue.jpg' },
    ],
  };

  it('renders the product card correctly', () => {
    render(<ProductCard {...product} />);

    expect(screen.getByText(product.name)).toBeInTheDocument();

    expect(screen.getByText(`${product.price.current} €`)).toBeInTheDocument();

    product.colors.forEach((color) => {
      expect(screen.getByText(color.name)).toBeInTheDocument();
    });

    expect(screen.getByText('Buy Now')).toBeInTheDocument();
  });

  it('renders the image with correct src and alt', () => {
    render(<ProductCard {...product} />);

    const imgElement = screen.getByAltText(product.name);
    expect(imgElement).toHaveAttribute('src', product.image);
    expect(imgElement).toHaveAttribute('alt', product.name);
  });

  it('renders the correct number of colors', () => {
    render(<ProductCard {...product} />);

    const colorElements = screen.getAllByText(/Red|Blue/);
    expect(colorElements).toHaveLength(product.colors.length);
  });
});
