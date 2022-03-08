import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './Form';

describe('Form', () => {
  it('renders a form with three inputs and a button', () => {
    render(<Form />);
    const dateInput = screen.getByLabelText('date');
    expect(dateInput).toBeInTheDocument();
    const titleInput = screen.getByLabelText('title');
    expect(titleInput).toBeInTheDocument();
    const textInput = screen.getByLabelText('text');
    expect(textInput).toBeInTheDocument();
    const submitButton = screen.getByRole('button', { name: /save/i });
    expect(submitButton).toBeInTheDocument();
  });

  it('does not submit form if one input field is left empty', () => {
    const handleFormSubmit = jest.fn();
    const mockSetNotes = jest.fn();
    const testData = [
      {
        date: '2022-07-09',
        title: 'Capstone Projekt gestartet',
        text: 'Es geht los! Schauen wir mal, ob ich in vier Wochen eine funktionierende App gebaut hab...',
      },
    ];
    render(<Form setNotes={mockSetNotes} notes={testData} onSubmit={handleFormSubmit} />);
    const titleInput = screen.getByLabelText('title');
    const dateInput = screen.getByLabelText('date');
    const textInput = screen.getByLabelText('text');
    const submitButton = screen.getByRole('button', { name: /save/i });

    userEvent.type(titleInput, 'title');
    userEvent.type(dateInput, 'any');
    userEvent.type(textInput, 'text');
    userEvent.click(submitButton);

    const submitMessage = screen.getByText('Your data has been submitted!');
    expect(submitMessage).toBeInTheDocument();
  });
});
