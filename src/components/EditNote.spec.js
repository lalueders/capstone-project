import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import EditNote from './EditNote';

const mockUpdateNote = jest.fn();
const mockNoteToEdit = [
  {
    date: '2022-07-09',
    categories: ['family', 'friends'],
    location: 'Hamburg',
    title: 'Capstone Projekt gestartet',
    text: 'Es geht los! Schauen wir mal, ob ich in vier Wochen eine funktionierende App gebaut hab...',
  },
];

describe('EditNote', () => {
  it('renders a form with 4 inputs and 2 buttons', () => {
    render(
      <MemoryRouter>
        <EditNote noteToEdit={mockNoteToEdit} updateNote={mockUpdateNote} />
      </MemoryRouter>
    );
    const locationInput = screen.getByLabelText('location');
    const dateInput = screen.getByLabelText('date');
    const titleInput = screen.getByLabelText('title');
    const textInput = screen.getByLabelText('text');
    const saveButton = screen.getByRole('button', { name: /save/i });
    const cancelButton = screen.getByRole('button', { name: /cancel/i });

    expect(locationInput).toBeInTheDocument();
    expect(titleInput).toBeInTheDocument();
    expect(textInput).toBeInTheDocument();
    expect(dateInput).toBeInTheDocument();
    expect(saveButton).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
  });
});
