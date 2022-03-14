import styled from 'styled-components';
import Card from '../components/Card';
import FormSubmitMessage from '../components/FormSubmitMessage';

export default function ListPage({ notes, isFormSubmitted }) {
  return (
    <StyledPage>
      {isFormSubmitted ? <FormSubmitMessage>Your data has been submitted!</FormSubmitMessage> : ''}

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
    </StyledPage>
  );
}

const StyledPage = styled.main`
  position: relative;
  top: 64px;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: -1;
`;
