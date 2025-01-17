import { render, screen } from '@testing-library/react';

import CardSection from 'components/Products/Card/components/Section';

describe('CardSection', () => {
  it('renders the children correctly', () => {
    const testContent = 'This is a test content';

    render(
      <CardSection>
        <p>{testContent}</p>
      </CardSection>,
    );

    expect(screen.getByText(testContent)).toBeInTheDocument();
  });

  it('has the correct classes applied', () => {
    render(
      <CardSection>
        <p>Content</p>
      </CardSection>,
    );

    const sectionElement = screen.getByRole('region');

    expect(sectionElement).toHaveClass('flex-grow');
    expect(sectionElement).toHaveClass('mt-6');
    expect(sectionElement).toHaveClass('flex');
    expect(sectionElement).toHaveClass('flex-col');
    expect(sectionElement).toHaveClass('items-center');
  });
});
