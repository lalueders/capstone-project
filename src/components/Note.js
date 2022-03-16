import styled from 'styled-components';
import editIcon from '../assets/icon_edit.png';
import trashIcon from '../assets/icon_trash.png';

export default function Note({ deleteNote, date, title, text, location, categories }) {
  return (
    <Wrapper>
      <EditButton>
        <img src={editIcon} alt="edit note" />
      </EditButton>
      <time>{date}</time>
      {location ? <p>{location}</p> : <p>No location has been saved for this card!</p>}
      <h2>{title}</h2>
      <p>{text}</p>
      <StyledList role="list">
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </StyledList>
      <DeleteButton onClick={deleteNote}>
        <img src={trashIcon} alt="delete note" />
      </DeleteButton>
    </Wrapper>
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

const StyledList = styled.ul`
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

const EditButton = styled.button`
  user-select: none;
  cursor: pointer;
  position: absolute;
  border: none;
  background: none;
  justify-self: end;
  img {
    height: 20px;
  }
`;

const DeleteButton = styled.button`
  user-select: none;
  cursor: pointer;
  position: absolute;
  right: 45px;
  border: none;
  background: none;
  justify-self: end;
  img {
    height: 20px;
  }
`;
