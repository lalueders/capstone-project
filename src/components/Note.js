import styled from 'styled-components';
import { useState } from 'react';
import edit from '../assets/iconEdit--light.svg';
import remove from '../assets/iconRemove--light.svg';

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
      <Edit hidden={isSelected}>
        <button hidden={!isSelected} onClick={handleOnClickEdit}>
          <img src={edit} height="20" width="20" alt="edit note" />
        </button>
        <button hidden={!isSelected} onClick={deleteNote}>
          <img src={remove} height="20" width="20" alt="delete note" />
        </button>
      </Edit>
      <Header active={isSelected}>
        <time>{date}</time>
        {location ? <p>{location}</p> : <p>No location has been saved for this card!</p>}
      </Header>
      <h2>{title}</h2>
      <p>{text}</p>
      <Image src={img} alt="" width="100%" />
      <Categories role="list" active={isSelected}>
        {categories.map((category, index) => (
          <li key={category}>{category}</li>
        ))}
      </Categories>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  user-select: none;
  background: ${props => (props.active ? 'var(--darkblue)' : 'white')};
  padding: ${props => (props.active ? '1rem' : '0.75rem')};
  color: ${props => (props.active ? 'var(--lightblue)' : 'var(--darkblue)')};
  border: 1px solid;
  border-radius: 4px;
  display: grid;
  gap: 0.75rem;
  word-break: break-word;
`;

const Header = styled.time`
  display: grid;
  gap: 0.25rem;
  font-size: 0.9rem;
  color: ${props => (props.active ? 'var(--blue)' : '#687B8C')};
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #687b8c;
`;

const Categories = styled.ul`
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

const Edit = styled.div`
  display: flex;
  justify-self: end;
  position: absolute;
  button {
    user-select: none;
    border: none;
    background: none;
  }
`;

const Image = styled.img`
  border-radius: 4px;
`;
