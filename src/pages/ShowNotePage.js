import styled from 'styled-components';
import Note from '../components/Note';
import EmptyListMessage from '../components/EmptyListMessage.js';
import AddButton from '../components/AddButton';
import FilterNotes from '../components/FilterNotes';
import SearchNotes from '../components/SearchNotes';
import { useState } from 'react';

export default function ShowNotePage({ editNote, deleteNote, notes, isFormSubmitted }) {
  const [filterResult, setFilterResult] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [active, setActive] = useState('all');

  const filterNotes = filter => {
    switch (filter) {
      case 'family':
        setFilterResult(notes.filter(note => note.categories.includes(filter)));
        break;
      case 'friends':
        setFilterResult(notes.filter(note => note.categories.includes(filter)));
        break;
      case 'vacation':
        setFilterResult(notes.filter(note => note.categories.includes(filter)));
        break;
      case 'others':
        setFilterResult(notes.filter(note => note.categories.includes(filter)));
        break;
      default:
        setFilterResult(notes);
    }
  };

  const searchNotes = notes.filter(note => {
    if (searchInput.toLowerCase() === '') {
      return note;
    } else {
      return note.title.toLowerCase().includes(searchInput.toLowerCase());
    }
  });

  return (
    <StyledPage>
      <SearchNotes
        setSearchInput={setSearchInput}
        searchInput={searchInput}
        setActive={setActive}
      />
      <FilterNotes
        filterNotes={filterNotes}
        setSearchInput={setSearchInput}
        notes={notes}
        setActive={setActive}
        active={active}
      />
      {notes.length === 0 ? <EmptyListMessage /> : ''}
      {isFormSubmitted ? (
        <StyledMessage>
          Got it!... But for the moment your notes will be deleted at page refresh 😟{' '}
        </StyledMessage>
      ) : (
        ''
      )}
      <NoteList>
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
      </NoteList>
      <AddButton />
    </StyledPage>
  );
}

const StyledPage = styled.main`
  width: 100%;
  position: absolute;
  top: 64px;
  right: 0;
  left: 0;
  bottom: 0;
`;

const NoteList = styled.div`
  margin-top: 7rem;
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
