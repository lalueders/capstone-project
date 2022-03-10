import { render, screen } from '@testing-library/react';
import Card from './Card.js';

describe('Card', () => {
  it('renders date, location, title and text', () => {
    render(
      <Card
        date="03/08/2022"
        location="Hamburg, Rotherbaum"
        title="Capstone Projekt gestartet"
        text="Es geht los! Schauen wir mal, ob ich in vier Wochen eine funktionierende App gebaut hab..."
      />
    );

    const date = screen.getByText('03/08/2022');
    expect(date).toBeInTheDocument();

    const title = screen.getByRole('heading');
    expect(title).toBeInTheDocument();

    const text = screen.getByText(
      'Es geht los! Schauen wir mal, ob ich in vier Wochen eine funktionierende App gebaut hab...'
    );
    expect(text).toBeInTheDocument();

    const location = screen.getByText('Hamburg, Rotherbaum');
    expect(location).toBeInTheDocument();
  });
});
