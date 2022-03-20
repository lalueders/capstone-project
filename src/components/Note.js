import styled from 'styled-components';
import { useState } from 'react';
import editIcon from '../assets/edit_icon--light.svg';
import trashIcon from '../assets/trash_icon--light.svg';

export default function Note({ editNote, deleteNote, date, title, text, location, categories }) {
  const [isSelected, setIsSelected] = useState(false);

  const handleOnClickNote = () => {
    setIsSelected(!isSelected);
  };

  const handleOnClickEdit = () => {
    editNote();
  };

  return (
    <Wrapper active={isSelected} onClick={handleOnClickNote}>
      <Buttons hidden={isSelected}>
        <button hidden={!isSelected} onClick={handleOnClickEdit}>
          <img src={editIcon} alt="edit note" />
        </button>
        <button hidden={!isSelected} onClick={deleteNote}>
          <img src={trashIcon} alt="delete note" />
        </button>
      </Buttons>
      <time>{date}</time>
      {location ? <p>{location}</p> : <p>No location has been saved for this card!</p>}
      <h2>{title}</h2>
      <p>{text}</p>
      <StyledList role="list">
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </StyledList>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  cursor: pointer;
  background: ${props => (props.active ? '#394a59' : '')};
  padding: ${props => (props.active ? '1.5rem' : '0.5rem')};
  color: ${props => (props.active ? '#DCE6F2' : '#394a59')};
  margin: 0.5rem;
  border: 1px solid;
  border-radius: 4px;
  display: grid;
  gap: 0.75rem;
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

const Buttons = styled.div`
  /* gap: 0.5rem; */
  display: flex;
  justify-self: end;
  position: absolute;

  button {
    user-select: none;
    cursor: pointer;
    border: none;
    background: none;
    img {
      height: 20px;
    }
  }
`;
