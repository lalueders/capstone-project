import styled from 'styled-components';

export default function Card({ date, title, text }) {
  return (
    <Wrapper>
      <time>{date}</time>
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

  h1 {
    padding-bottom: 0.25rem;
    font-size: 1.25rem;
    border-bottom: 1px solid #394a59;
  }
`;
