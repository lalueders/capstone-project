import { render, screen } from '@testing-library/react';
import Card from './Card.js';

describe('Card', () => {
  const mapData = ['family', 'friends'];
  it('renders date, location, title and text', () => {
    render(
      <Card
        categories={mapData}
        date="2022-07-09"
        location="Hamburg, Rotherbaum"
        title="Capstone Projekt gestartet"
        text="Es geht los! Schauen wir mal, ob ich in vier Wochen eine funktionierende App gebaut hab..."
      />
    );

    const date = screen.getByText('2022-07-09');
    expect(date).toBeInTheDocument();

    const title = screen.getByRole('heading');
    expect(title).toBeInTheDocument();

    const text = screen.getByText(
      'Es geht los! Schauen wir mal, ob ich in vier Wochen eine funktionierende App gebaut hab...'
    );
    expect(text).toBeInTheDocument();

    const location = screen.getByText('Hamburg, Rotherbaum');
    expect(location).toBeInTheDocument();

    const category = screen.getByRole('list');
    expect(category).toBeInTheDocument();
  });
});
