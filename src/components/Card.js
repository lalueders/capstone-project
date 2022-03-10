import styled from 'styled-components';

export default function Card({ date, title, text, location }) {
  return (
    <Wrapper>
      <time>{date}</time>
      {location ? <p>{location}</p> : <p>No location has been saved for this card!</p>}
      <h2>{title}</h2>
      <p>{text}</p>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin: 0.5rem;
  border: 1px solid;
  border-radius: 4px;
  display: grid;
  padding: 0.5rem;
  color: #394a59;
  gap: 0.75rem;
  word-break: break-all;
`;
