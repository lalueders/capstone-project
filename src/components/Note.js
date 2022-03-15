import styled from 'styled-components';
import editIcon from '../assets/icon_edit.png';

export default function Note({ date, title, text, location, categories }) {
  return (
    <>
      <Wrapper>
        <EditButton>
          <img src={editIcon} alt="edit note" />
        </EditButton>
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
    </>
  );
}

const Wrapper = styled.section`
  margin: 0.5rem;
  border: 1px solid;
  border-radius: 4px;
  display: grid;
  gap: 0.75rem;
  padding: 0.5rem;
  color: #394a59;
  word-break: break-word;
`;

const EditButton = styled.button`
  cursor: pointer;
  position: absolute;
  border: none;
  background: none;
  justify-self: end;
  img {
    height: 20px;
  }
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
