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
  max-width: 600px;
  margin: 0 0.5rem;
  display: flex;
  gap: 0.5rem;
  overflow: auto;
`;

const Button = styled.button`
  border: 1px solid ${props => (props.active ? 'var(--white)' : 'var(--darkblue)')};
  background: ${props => (props.active ? 'var(--darkblue)' : 'var(--white)')};
  color: ${props => (props.active ? 'var(--white)' : 'var(--darkblue)')};
  font-size: 1rem;
  border-radius: 4px;
  white-space: nowrap;
  text-decoration: none;
  padding: 0.5rem;
  user-select: none;
`;
