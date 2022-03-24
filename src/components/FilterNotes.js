import styled from 'styled-components/macro';

export default function FilterNotes({ active, setActive, filterNotes, setSearchInput }) {
  function handleOnClick(event) {
    filterNotes(event.target.name);
    setActive(event.target.name);
    setSearchInput('');
  }

  return (
    <Wrapper>
      <Button name="all" active={active === 'all'} onClick={handleOnClick}>
        all
      </Button>
      <Button name="family" active={active === 'family'} onClick={handleOnClick}>
        family
      </Button>
      <Button name="friends" active={active === 'friends'} onClick={handleOnClick}>
        friends
      </Button>
      <Button name="vacation" active={active === 'vacation'} onClick={handleOnClick}>
        vacation
      </Button>
      <Button name="others" active={active === 'others'} onClick={handleOnClick}>
        others
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: #f2f0f0;
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
