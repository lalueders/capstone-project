import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navigation from './Navigation.js';

describe('Navigation', () => {
  it('renders navigation with two links and two buttons with img', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );
    // screen.getAllByRole('');

    const navbar = screen.getByRole('navigation');
    expect(navbar).toBeInTheDocument();

    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(2);

    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);

    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(2);
  });
});
