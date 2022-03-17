import styled from 'styled-components';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ShowNotePage from './pages/ShowNotePage.js';
import AddNotePage from './pages/AddNotePage.js';
import Navigation from './components/Navigation.js';

function App() {
  const [notes, setNotes] = useState([]);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const showFormSubmitMessage = () => {
    setIsFormSubmitted(true);
    setTimeout(() => setIsFormSubmitted(false), 1500);
  };

  const deleteNote = id => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const editNote = note => {
    console.log(note);
  };

  return (
    <Grid>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <ShowNotePage
              setNotes={setNotes}
              notes={notes}
              isFormSubmitted={isFormSubmitted}
              deleteNote={deleteNote}
              editNote={editNote}
            />
          }
        />
        <Route
          path="add"
          element={
            <AddNotePage
              setNotes={setNotes}
              notes={notes}
              showFormSubmitMessage={showFormSubmitMessage}
            />
          }
        />
      </Routes>
    </Grid>
  );
}

export default App;

const Grid = styled.div`
  height: 100vh;
  position: relative;
  display: grid;
  grid-template-rows: 64px auto;
  justify-items: center;
`;
