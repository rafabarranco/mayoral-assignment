import { render, screen } from '@testing-library/react';

import CardPrice from 'components/Products/Card/components/Price';

describe('CardPrice', () => {
  it('renders the current price correctly when there is no discount', () => {
    const testPrice = {
      current: 20,
      retail: 20,
      isDiscounted: false,
      discountPercentage: 0,
    };

    render(<CardPrice price={testPrice} />);

    expect(screen.getByText('20,00 €')).toBeInTheDocument();
  });

  it('renders the discounted price correctly', () => {
    const testPrice = {
      current: 20,
      retail: 30,
      isDiscounted: true,
      discountPercentage: 33.33,
    };

    render(<CardPrice price={testPrice} />);

    const priceElements = screen.getAllByText(/20,00 €/);
    expect(priceElements.length).toBe(1);
    expect(priceElements[0]).toBeInTheDocument();

    const retailElements = screen.getAllByText(/30,00 €/);
    expect(retailElements.length).toBe(1);
    expect(retailElements[0]).toBeInTheDocument();

    const discountText = screen.getByText((content, element) => content.includes('-33,33%'));
    expect(discountText).toBeInTheDocument();

    expect(screen.getByText('30,00 €')).toHaveClass('line-through');
  });

  it('renders the price correctly when discount is 0%', () => {
    const testPrice = {
      current: 50,
      retail: 50,
      isDiscounted: true,
      discountPercentage: 0,
    };

    render(<CardPrice price={testPrice} />);

    expect(screen.getByText('50,00 €')).toBeInTheDocument();
  });
});
