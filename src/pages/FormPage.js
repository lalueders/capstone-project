import styled from 'styled-components';
import Form from '../components/Form';

export default function FormPage({ notes, setNotes }) {
  return (
    <Container>
      <Form setNotes={setNotes} notes={notes} />
    </Container>
  );
}

const Container = styled.main`
  height: 1000px;
`;
