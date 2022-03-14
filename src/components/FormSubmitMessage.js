import styled from 'styled-components/macro';

export default function FormSubmitMessage() {
  return <StyledMessage>Got it!... but for the moment your notes will be deleted with page refresh 😟</StyledMessage>;
}

const StyledMessage = styled.p`
  position: relative;
  font-size: 1.25rem;
  color: green;
  text-align: center;
  background: #cde7b3;
  border-radius: 4px;
  padding: 20px;
  margin: 0.5rem;
`;
