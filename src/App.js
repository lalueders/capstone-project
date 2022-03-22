import styled from 'styled-components';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ShowNotePage from './pages/ShowNotePage.js';
import AddNotePage from './pages/AddNotePage.js';
import EditNotePage from './pages/EditNotePage.js';
import Navigation from './components/Navigation.js';

function App() {
  const [notes, setNotes] = useState([
    {
      id: '4',
      date: '2022-03-22',
      location: 'Hamburg, Rotherbaum',
      title: 'Pausen sind auch wichtig!',
      text: 'Bald ist es geschafft..',
      categories: ['job', 'bootcamp'],
      img: 'https://res.cloudinary.com/dq7bhlygi/image/upload/v1647948992/gbla2npjsth195dhvzv3.jpg',
    },
    {
      id: '3',
      date: '2022-03-18',
      location: 'Hamburg, Rotherbaum',
      title: '2. Sprint Woche geschafft!',
      text: 'Hoch die Hände, Wochenende! Aaaaaber nach dem Sprint ist vor dem Sprint! USer Stories müssen her...',
      categories: ['job', 'bootcamp'],
    },
    {
      id: '2',
      date: '2022-03-11',
      location: 'Hamburg, Rotherbaum',
      title: '1. Sprint Woche geschafft!',
      text: 'MVP steht, auch wenn es noch hakt und klemmt!',
      categories: ['job', 'bootcamp'],
    },
    {
      id: '1',
      date: '2022-01-10',
      location: 'Hamburg, Rotherbaum',
      title: 'Bootcamp geht los!',
      text: 'Man sagt, da kommt viel Arbeit auf mich zu...',
      categories: ['job', 'bootcamp'],
    },
  ]);

  const [noteToEdit, setNoteToEdit] = useState();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const navigate = useNavigate();

  const showFormSubmitMessage = () => {
    setIsFormSubmitted(true);
    setTimeout(() => setIsFormSubmitted(false), 1500);
  };

  const deleteNote = id => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const editNote = id => {
    setNoteToEdit(notes.find(note => note.id === id));
    navigate('/edit');
  };

  const updateNote = data => {
    const noteToUpdate = notes.findIndex(note => note.id === data.id);
    setNotes(notes, notes.splice(noteToUpdate, 1, data));
    navigate('/');
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
        <Route
          path="edit"
          element={<EditNotePage noteToEdit={noteToEdit} updateNote={updateNote} />}
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
