import styled from 'styled-components';
import Form from '../components/Form';

export default function FormPage({ notes, setNotes }) {
  return (
    <StyledPage>
      <Form setNotes={setNotes} notes={notes} />
    </StyledPage>
  );
}

const StyledPage = styled.main`
  position: absolute;
  top: 48px;
  right: 0;
  left: 0;
  bottom: 0;
`;
