import styled from 'styled-components';
import Form from '../components/Form';

export default function FormPage({ notes, setNotes, showFormSubmitMessage }) {
  return (
    <StyledPage>
      <Form setNotes={setNotes} notes={notes} showFormSubmitMessage={showFormSubmitMessage} />
    </StyledPage>
  );
}

const StyledPage = styled.main`
  position: absolute;
  top: 64px;
  right: 0;
  left: 0;
  bottom: 0;
`;
