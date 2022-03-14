import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Form from './Form';

// const mockedNavigate = jest.fn();

// jest.mock('react-router-dom', () => ({
//   ...jest.requireActual('react-router-dom'),
//   useNavigate: () => mockedNavigate,
// }));

describe('Form', () => {
  it('renders a form with three inputs and a button', () => {
    render(
      <MemoryRouter>
        <Form />
      </MemoryRouter>
    );
    const dateInput = screen.getByLabelText('date');
    expect(dateInput).toBeInTheDocument();
    const titleInput = screen.getByLabelText('title');
    expect(titleInput).toBeInTheDocument();
    const textInput = screen.getByLabelText('text');
    expect(textInput).toBeInTheDocument();
    const submitButton = screen.getByRole('button', { name: /save/i });
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
        <Form
          setNotes={mockSetNotes}
          notes={testData}
          onSubmit={mockHandleFormSubmit}
          showFormSubmitMessage={mockShowFormSubmitMessage}
        />
      </MemoryRouter>
    );
    // screen.getAllByRole('');
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
