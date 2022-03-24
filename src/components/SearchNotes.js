import styled from 'styled-components/macro';

export default function SearchNotes({ setActive, searchInput, setSearchInput }) {
  function handleSearchInput(event) {
    setSearchInput(event.target.value);
  }

  function handleClickOnSearch(event) {
    setActive('all');
    event.target.select();
  }

  return (
    <Wrapper>
      <SearchInput
        type="search"
        id="search"
        aria-label="search"
        placeholder="Search..."
        onChange={handleSearchInput}
        onClick={handleClickOnSearch}
        value={searchInput}
      ></SearchInput>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: #f2f0f0;
  position: fixed;
  z-index: 2;
  top: 4rem;
  width: 100%;
  max-width: 600px;
  padding: 0.5rem;
`;

const SearchInput = styled.input`
  cursor: pointer;
  user-select: none;
  width: 100%;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #394a59;
  color: #394a59;
  resize: none;
  font-size: 1rem;
`;
