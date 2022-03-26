import styled from 'styled-components/macro';
import { nanoid } from 'nanoid';

export default function FilterNotes({ active, setActive, setFilter, setSearchInput, categories }) {
  function handleOnClick(event) {
    setFilter(event.target.value);
    setActive(event.target.value);
    setSearchInput('');
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
  background: #f2f0f0;
  z-index: 1;
  border-radius: 4px;
  display: flex;
  gap: 0.5rem;
  position: fixed;
  padding: 3.5rem 0.5rem 0.5rem 0.5rem;
  width: 100%;
  overflow: auto;
`;

const Button = styled.button`
  background: ${props => (props.active ? '#394a59' : '#ffffff')};
  border: 1px solid ${props => (props.active ? '#ffffff' : '#394a59')};
  color: ${props => (props.active ? '#ffffff' : '#394a59')};
  user-select: none;
  border-radius: 4px;
  padding: 0.5rem;
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;
`;
