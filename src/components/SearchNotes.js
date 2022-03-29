import styled from 'styled-components/macro';

export default function SearchNotes({ searchInput, setSearchInput }) {
  function handleSearchInput(event) {
    setSearchInput(event.target.value);
  }

  function handleClickOnSearch(event) {
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
  max-width: 600px;
  margin: 0 0.5rem;
`;

const SearchInput = styled.input`
  user-select: none;
  width: 100%;
`;
