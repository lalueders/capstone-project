import { render, screen } from '@testing-library/react';
import Card from './Card.js';

describe('Card', () => {
  it('renders date, heading and text', () => {
    render(<Card date="03/08/2022" title="Lorem ipsum" text="Lorem Ipsum" />);

    const date = screen.getByText('03/08/2022');
    expect(date).toBeInTheDocument();

    const heading = screen.getByText('Lorem ipsum');
    expect(heading).toBeInTheDocument();

    const text = screen.getByText('Lorem Ipsum');
    expect(text).toBeInTheDocument();
  });
});
