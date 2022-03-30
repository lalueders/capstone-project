import styled from 'styled-components';
import { useState } from 'react';
import editIcon from '../assets/edit_icon--light.svg';
import trashIcon from '../assets/trash_icon--light.svg';

export default function Note({
  editNote,
  deleteNote,
  date,
  title,
  text,
  location,
  categories,
  img,
}) {
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
      <NoteHeader active={isSelected}>
        <time>{date}</time>
        {location ? <p>{location}</p> : <p>No location has been saved for this card!</p>}
      </NoteHeader>
      <h2>{title}</h2>
      <p>{text}</p>
      <StyledImage src={img} alt="" width="100%" />
      <StyledList role="list" active={isSelected}>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </StyledList>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  user-select: none;
  background: ${props => (props.active ? 'var(--darkblue)' : '')};
  padding: ${props => (props.active ? '1rem' : '0.75rem')};
  color: ${props => (props.active ? 'var(--lightblue)' : 'var(--darkblue)')};
  border: 1px solid;
  border-radius: 4px;
  display: grid;
  gap: 0.75rem;
  word-break: break-word;
`;

const NoteHeader = styled.time`
  display: grid;
  gap: 0.25rem;
  font-size: 0.9rem;
  color: ${props => (props.active ? 'var(--blue)' : '#687B8C')};
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #687b8c;
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  color: ${props => (props.active ? 'var(--blue)' : '#687B8C')};

  li {
    padding: 0.25rem;
    font-size: 0.75rem;
    border: 1px solid;
    border-radius: 4px;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-self: end;
  position: absolute;
  button {
    user-select: none;
    border: none;
    background: none;
    img {
      height: 20px;
    }
  }
`;

const StyledImage = styled.img`
  border-radius: 4px;
`;
