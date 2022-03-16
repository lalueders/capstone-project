import styled from 'styled-components';
import Note from '../components/Note';
import EmptyListMessage from '../components/EmptyListMessage.js';
import AddButton from '../components/AddButton';

export default function ShowNotePage({ confirmDelete, deleteNote, notes, isFormSubmitted }) {
  return (
    <StyledPage>
      {notes.length === 0 ? <EmptyListMessage /> : ''}
      {isFormSubmitted ? (
        <StyledMessage>
          Got it!... But for the moment your notes will be deleted at page refresh 😟{' '}
        </StyledMessage>
      ) : (
        ''
      )}
      {notes.map(note => (
        <Note
          key={note.id}
          id={note.id}
          date={note.date}
          title={note.title}
          text={note.text}
          location={note.location}
          categories={note.categories}
          deleteNote={() => deleteNote(note.id)}
        />
      ))}
      <AddButton />
    </StyledPage>
  );
}

const StyledPage = styled.main`
  width: 100%;
  position: relative;
  top: 64px;
  right: 0;
  left: 0;
  bottom: 0;
`;

const StyledMessage = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: green;
  text-align: center;
  background: #cde7b3;
  border-radius: 4px;
  opacity: 0.75;
  padding: 1rem 1.5rem;
  margin: 0.5rem 0.5rem 1rem 0.5rem;
`;
