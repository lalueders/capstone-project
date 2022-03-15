import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import EmptyListMessage from './EmptyListMessage';

describe('FormSubmitMessage', () => {
  it('renders a message with text', () => {
    render(
      <MemoryRouter>
        <EmptyListMessage />
      </MemoryRouter>
    );
    // const test = screen.getByRole('');
    const message = screen.getByText("You don't have any notes yet! What's on your mind? Write it down right here...");
    expect(message).toBeInTheDocument();
    const icon = screen.getByRole('img', { name: /feather/i });
    expect(icon).toBeInTheDocument();
  });
});
