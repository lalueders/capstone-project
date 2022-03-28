import styled from 'styled-components/macro';
import { useState } from 'react';
import { nanoid } from 'nanoid';

export default function Filter({ filterNotes, setSearchInput, categories }) {
  const [active, setActive] = useState();

  function handleOnClick(event) {
    if (event.target.value !== active) {
      setSearchInput('');
      setActive(event.target.value);
      filterNotes(event.target.value);
    } else {
      setActive('');
      filterNotes('');
    }
  }

  return (
    <Wrapper>
      {categories.map(category => (
        <Button
          key={nanoid()}
          name={category}
          value={category}
          active={active === category}
          onClick={handleOnClick}
        >
          {category}
        </Button>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: var(--grey);
  z-index: 1;
  border-radius: 4px;
  display: flex;
  gap: 0.5rem;
  position: fixed;
  padding: 3.5rem 0.5rem 0.5rem;
  width: 100%;
  overflow: scroll;
`;

const Button = styled.button`
  background: ${props => (props.active ? 'var(--darkblue)' : 'var(--white)')};
  border: 1px solid ${props => (props.active ? 'var(--white)' : 'var(--darkblue)')};
  color: ${props => (props.active ? 'var(--white)' : 'var(--darkblue)')};
  user-select: none;
  border-radius: 4px;
  padding: 0.5rem;
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;
`;
