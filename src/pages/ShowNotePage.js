import styled from 'styled-components';
import Note from '../components/Note';
import EmptyListMessage from '../components/EmptyListMessage.js';
import AddButton from '../components/AddButton';
import Filter from '../components/Filter';
import SearchNotes from '../components/SearchNotes';
import { useState } from 'react';
import Navigation from '../components/Navigation';

export default function ShowNotePage({
  editNote,
  deleteNote,
  notes,
  isFormSubmitted,
  categories,
  filterNotes,
  filterResult,
}) {
  const [searchInput, setSearchInput] = useState('');

  const searchNotes = notes.filter(note => {
    if (searchInput.toLowerCase() === '') {
      return note;
    } else {
      return note.text.toLowerCase().includes(searchInput.toLowerCase().trim());
    }
  });

  return (
    <StyledPage>
      <Header>
        <Navigation />
        <SearchNotes
          setSearchInput={setSearchInput}
          searchNotes={searchNotes}
          searchInput={searchInput}
        />
        <Filter
          setSearchInput={setSearchInput}
          filterNotes={filterNotes}
          filterResult={filterResult}
          categories={categories}
        />
      </Header>
      {notes.length === 0 ? <EmptyListMessage /> : ''}
      {isFormSubmitted ? (
        <StyledMessage>
          Got it!... But for the moment your notes will be deleted at page refresh 😟{' '}
        </StyledMessage>
      ) : (
        ''
      )}
      <NotesList>
        {searchInput.length > 0
          ? searchNotes.map(note => (
              <Note
                key={note.id}
                id={note.id}
                date={note.date}
                title={note.title}
                text={note.text}
                location={note.location}
                categories={note.categories}
                img={note.img}
                deleteNote={() => deleteNote(note.id)}
                editNote={() => editNote(note.id)}
              />
            ))
          : filterResult.length > 0
          ? filterResult.map(note => (
              <Note
                key={note.id}
                id={note.id}
                date={note.date}
                title={note.title}
                text={note.text}
                location={note.location}
                categories={note.categories}
                img={note.img}
                deleteNote={() => deleteNote(note.id)}
                editNote={() => editNote(note.id)}
              />
            ))
          : notes.map(note => (
              <Note
                key={note.id}
                id={note.id}
                date={note.date}
                title={note.title}
                text={note.text}
                location={note.location}
                categories={note.categories}
                img={note.img}
                deleteNote={() => deleteNote(note.id)}
                editNote={() => editNote(note.id)}
              />
            ))}
      </NotesList>
      <AddButton />
    </StyledPage>
  );
}

const StyledPage = styled.main`
  margin-top: 167px;
`;

const Header = styled.header`
  max-width: 600px;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  display: grid;
  gap: 0.5rem;
  background: var(--grey);
  padding-bottom: 0.5rem;
  border-bottom: 10px solid var(---grey);
`;

const NotesList = styled.main`
  margin: 0 0.5rem;
  display: grid;
  gap: 1rem;
`;

const StyledMessage = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: green;
  text-align: center;
  background: #cde7b3;
  border-radius: 4px;
  opacity: 0.75;
  padding: 1rem 1.5rem;
  margin: 4.5rem 0.5rem 1rem 0.5rem;
`;
