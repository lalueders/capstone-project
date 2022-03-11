import styled from 'styled-components';

export default function Card({ date, title, text, location, categories }) {
  return (
    <Wrapper>
      <time>{date}</time>
      {location ? <p>{location}</p> : <p>No location has been saved for this card!</p>}
      <h2>{title}</h2>
      <p>{text}</p>
      <Categories role="list">
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </Categories>
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
  word-break: break-word;
`;

const Categories = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  li {
    border: 1px solid;
    border-radius: 4px;
    padding: 0.25rem;
  }
`;
