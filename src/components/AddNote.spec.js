import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import AddNote from './AddNote';

describe('Form', () => {
  it('renders a form with three inputs and a button', () => {
    render(
      <MemoryRouter>
        <AddNote />
      </MemoryRouter>
    );
    const fileInput = screen.getByTestId('file-upload');
    const dateInput = screen.getByLabelText('date');
    const titleInput = screen.getByLabelText('title');
    const textInput = screen.getByLabelText('text');
    const submitButton = screen.getByRole('button', { name: /save/i });
    expect(fileInput).toBeInTheDocument();
    expect(dateInput).toBeInTheDocument();
    expect(titleInput).toBeInTheDocument();
    expect(textInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('does not submit form if one input field is left empty (except categories)', () => {
    const mockHandleFormSubmit = jest.fn();
    const mockSetNotes = jest.fn();
    const mockShowFormSubmitMessage = jest.fn();
    const testData = [
      {
        date: '2022-07-09',
        categories: 'family, friends',
        location: 'Hamburg',
        title: 'Capstone Projekt gestartet',
        text: 'Es geht los! Schauen wir mal, ob ich in vier Wochen eine funktionierende App gebaut hab...',
      },
    ];
    render(
      <MemoryRouter>
        <AddNote
          setNotes={mockSetNotes}
          notes={testData}
          onSubmit={mockHandleFormSubmit}
          showFormSubmitMessage={mockShowFormSubmitMessage}
        />
      </MemoryRouter>
    );

    const titleInput = screen.getByRole('textbox', { name: /title/i });
    const textInput = screen.getByRole('textbox', { name: /text/i });
    const dateInput = screen.getByLabelText('date');
    const submitButton = screen.getByRole('button', { name: /save/i });

    userEvent.type(titleInput, 'title');
    userEvent.type(textInput, 'text');
    userEvent.type(dateInput, 'any');
    userEvent.click(submitButton);
  });
});
