import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import FormSubmitMessage from './FormSubmitMessage';

describe('FormSubmitMessage', () => {
  it('renders a message with text', () => {
    render(
      <MemoryRouter>
        <FormSubmitMessage />
      </MemoryRouter>
    );
    const message = screen.getByText('Got it!... but for the moment your notes will be deleted with page refresh 😟');
    expect(message).toBeInTheDocument();
  });
});
