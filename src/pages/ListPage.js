import styled from 'styled-components';
import Card from '../components/Card';
import FormSubmitMessage from '../components/FormSubmitMessage.js';
import EmptyListMessage from '../components/EmptyListMessage.js';
import AddButton from '../components/AddButton';

export default function ListPage({ notes, isFormSubmitted }) {
  return (
    <StyledPage>
      {notes.length === 0 ? <EmptyListMessage /> : ''}
      {isFormSubmitted ? <FormSubmitMessage /> : ''}
      {notes.map((note, index) => (
        <Card
          key={index}
          date={note.date}
          title={note.title}
          text={note.text}
          location={note.location}
          categories={note.categories}
        />
      ))}
      <AddButton />
    </StyledPage>
  );
}

const StyledPage = styled.main`
  position: relative;
  top: 64px;
  right: 0;
  left: 0;
  bottom: 0;
`;
