import styled from 'styled-components/macro';

export default function FormSubmitMessage() {
  return <StyledMessage>Got it!... But f the moment your notes will be deleted at page refresh 😟</StyledMessage>;
}

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
