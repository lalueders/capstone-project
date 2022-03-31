import styled from 'styled-components';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ShowNotePage from './pages/ShowNotePage.js';
import AddNotePage from './pages/AddNotePage.js';
import EditNotePage from './pages/EditNotePage.js';

function App() {
  const [notes, setNotes] = useState([
    {
      id: 'WO8KJDKK0OV',
      date: '2021-12-28',
      location: 'Hamburg, Rotherbaum',
      title: "Grandma's Birthday",
      text: 'Yay!!! Paula is in joy. Her grandmother is celebrating a milestone birthday today. She loves her Grandma...',
      categories: ['family'],
      img: '',
    },
    {
      id: 'XQW93D8LWHV',
      date: '2021-05-23',
      location: 'Suriname, Wilhelmina Mountains',
      title: 'What a trip!',
      text: "Mark Twain said that there ain't no surer way to find out whether you like people or hate them than to travel with them. Yes, he's right! And I am glad to have such friends",
      categories: ['friends', 'vacation'],
      img: 'https://res.cloudinary.com/dq7bhlygi/image/upload/v1648661759/Default/friends_ztjt56.jpg',
    },
    {
      id: 'XQUSLDSF0OV',
      date: '2020-09-04',
      location: 'Hamburg, Rotherbaum',
      title: 'What a struggle for admission',
      text: 'Our board exam results have not yet been declared and already the news of malpractice is making the rounds. There are cases of attempted bribery reported for admissions into esteemed colleges. Such news is really very disheartening. Especially when coupled with the various reservation schemes already existing. This leaves no scope for children like me who do not fit in any minority groups nor can sum up large amounts for donation. This is a very serious problem, and I am really threatened by it. Even if the malpractices are ignored or hushed up, as very often they will be, the fact that these students will not excel in their courses is inevitable, thus causing a loss of the country’s resources employed in their training. I do not know what to look forward to anymore. I just hope and pray that such practices are tracked and nipped in the bud.',
      categories: ['others'],
      img: '',
    },
    {
      id: 'WO8KK0OVSE',
      date: '2020-07-24',
      location: 'Schlweswig-Holstein, Scharbeutz',
      title: 'Family time at the sea',
      text: 'Finally the first days of summer! All of us had not seen the sea for a long time. So we decided to take a day trip to the Baltic Sea. Wonderful! The first time we just walk along the beautiful promenade. After that we settled down on the beach',
      categories: ['family', 'vacation'],
      img: 'https://res.cloudinary.com/dq7bhlygi/image/upload/v1648661759/Default/family3_antqdz.jpg',
    },
  ]);

  const [categories, setCategories] = useState(['family', 'kids', 'friends', 'vacation', 'others']);
  const [noteToEdit, setNoteToEdit] = useState();
  const [filterResult, setFilterResult] = useState('');

  const [searchInput, setSearchInput] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const navigate = useNavigate();

  function showFormSubmitMessage() {
    setIsFormSubmitted(true);
    setTimeout(() => setIsFormSubmitted(false), 1000);
  }

  function deleteNote(id) {
    setNotes(notes.filter(note => note.id !== id));
  }

  function editNote(id) {
    setNoteToEdit(notes.find(note => note.id === id));
    navigate('/edit');
  }

  function updateNote(data) {
    const noteToUpdate = notes.findIndex(note => note.id === data.id);
    setNotes(notes, notes.splice(noteToUpdate, 1, data));
    showFormSubmitMessage();
    navigate('/');
  }

  function addCategory(input) {
    setCategories([input, ...categories]);
  }

  function filterNotes(filter) {
    setFilterResult(notes.filter(note => note.categories.includes(filter)));
  }

  return (
    <Grid>
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
              filterNotes={filterNotes}
              filterResult={filterResult}
              categories={categories}
              searchInput={searchInput}
              setSearchInput={setSearchInput}
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
              addCategory={addCategory}
              categories={categories}
            />
          }
        />
        <Route
          path="edit"
          element={
            <EditNotePage
              noteToEdit={noteToEdit}
              updateNote={updateNote}
              categories={categories}
              addCategory={addCategory}
            />
          }
        />
      </Routes>
    </Grid>
  );
}

export default App;

const Grid = styled.div`
  margin: 0 auto;
  max-width: 600px;
  height: 100vh;
  position: relative;
  display: grid;
  grid-template-rows: 64px auto;
  justify-items: center;
`;
