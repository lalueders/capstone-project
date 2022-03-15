import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AddButton from './AddButton';

describe('AddButton', () => {
  it('renders a button with an image as content', () => {
    render(
      <MemoryRouter>
        <AddButton />
      </MemoryRouter>
    );

    const button = screen.getByRole('img', { name: /add note/i });
    const icon = screen.getByRole('img', { name: /add note/i });

    expect(button).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });
});
