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
      location: 'Schlweswig-Holstein, Scharbeutz',
      title: 'massa. Quisque porttitor',
      text: 'sem eget massa. Suspendisse eleifend. Cras sed leo. Cras vehicula aliquet libero. Integer in magna. Phasellus dolor elit,',
      categories: ['family'],
      img: 'https://res.cloudinary.com/dq7bhlygi/image/upload/v1648661759/Default/Grandma_zkrjke.jpg',
    },
    {
      id: 'XQW93D8LWHV',
      date: '2021-05-23',
      location: 'Suriname, Wilhelmina Mountains',
      title: 'massa. Quisque porttitor',
      text: 'sem eget massa. Suspendisse eleifend. Cras sed leo. Cras vehicula aliquet libero. Integer in magna. Phasellus dolor elit,',
      categories: ['friends', 'vacation'],
      img: 'https://res.cloudinary.com/dq7bhlygi/image/upload/v1648661759/Default/friends_ztjt56.jpg',
    },
    {
      id: 'XQUSLDSF0OV',
      date: '2020-09-04',
      location: 'Hamburg, Bergedorf',
      title: 'massa. Quisque porttitor',
      text: 'sem eget massa. Suspendisse eleifend. Cras sed leo. Cras vehicula aliquet libero. Integer in magna. Phasellus dolor elit,',
      categories: ['kids', 'family'],
      img: 'https://res.cloudinary.com/dq7bhlygi/image/upload/v1648661759/Default/kids_x84zfq.jpg',
    },
    {
      id: 'WO8KK0OV',
      date: '2020-07-24',
      location: 'Schlweswig-Holstein, Scharbeutz',
      title: 'massa. Quisque porttitor',
      text: 'sem eget massa. Suspendisse eleifend. Cras sed leo. Cras vehicula aliquet libero. Integer in magna. Phasellus dolor elit,',
      categories: ['family', 'vacation'],
      img: 'https://res.cloudinary.com/dq7bhlygi/image/upload/v1648661759/Default/family3_antqdz.jpg',
    },
  ]);
  // const [notes, setNotes] = useState([
  //   {
  //     id: 'XQW93DSF0OV',
  //     date: '2010-03-04',
  //     location: 'Bad Homburg v. d. Höhe',
  //     title: 'massa. Quisque porttitor',
  //     text: 'sem eget massa. Suspendisse eleifend. Cras sed leo. Cras vehicula aliquet libero. Integer in magna. Phasellus dolor elit,',
  //     categories: ['vacation'],
  //     img: 'https://res.cloudinary.com/dq7bhlygi/image/upload/v1647956325/l8osfoevkdxcrpm8dvho.jpg',
  //   },
  //   {
  //     id: 'BHI90RBJ7WX',
  //     date: '2018-10-23',
  //     location: 'Merseburg',
  //     title: 'egestas a, scelerisque',
  //     text: 'lacinia orci, consectetuer euismod est arcu ac orci. Ut semper pretium neque. Morbi quis urna. Nunc quis arcu vel',
  //     categories: ['family', 'vacation', 'others'],
  //   },
  //   {
  //     id: 'WBQ68WXK4NQ',
  //     date: '2019-04-17',
  //     location: 'Bremen',
  //     title: 'facilisis facilisis, magna tellus faucibus',
  //     text: 'sagittis. Duis gravida. Praesent eu nulla at sem molestie sodales. Mauris blandit enim consequat purus.',
  //     categories: ['friends', 'others'],
  //   },
  //   {
  //     id: 'ZNF75NEY4EC',
  //     date: '2014-04-24',
  //     location: 'Hameln',
  //     title: 'sed sem egestas',
  //     text: 'et tristique pellentesque, tellus sem mollis dui, in sodales elit erat vitae risus. Duis a mi fringilla mi',
  //     categories: ['friends'],
  //     img: 'https://res.cloudinary.com/dq7bhlygi/image/upload/v1648034897/xcadqnu8b8kikyqlwsdj.jpg',
  //   },
  //   {
  //     id: 'DWI82CKY7PO',
  //     date: '2011-11-07',
  //     location: 'Stralsund',
  //     title: 'posuere cubilia Curae Donec',
  //     text: 'at lacus. Quisque purus sapien, gravida non, sollicitudin a, malesuada id, erat. Etiam vestibulum massa',
  //     categories: ['friends', 'vacation'],
  //   },
  //   {
  //     id: 'HCE47INF9QI',
  //     date: '2022-10-29',
  //     location: 'Hof',
  //     title: 'velit. Aliquam nisl. Nulla eu neque pellentesque',
  //     text: 'aliquam, enim nec tempus scelerisque, lorem ipsum sodales purus, in molestie tortor nibh sit amet orci. Ut sagittis',
  //     categories: ['family'],
  //   },
  //   {
  //     id: 'RRI71JXG0ZR',
  //     date: '2019-02-24',
  //     location: 'Bremen',
  //     title: 'fermentum arcu. Vestibulum ante ipsum primis',
  //     text: 'dignissim magna a tortor. Nunc commodo auctor velit. Aliquam nisl. Nulla eu',
  //     categories: ['friends'],
  //   },
  //   {
  //     id: 'PYL84MZR5OF',
  //     date: '2017-10-04',
  //     location: 'Bremerhaven',
  //     title: 'vel lectus. Cum sociis',
  //     text: 'Proin sed turpis nec mauris blandit mattis. Cras eget nisi dictum augue malesuada malesuada. Integer id magna',
  //     categories: ['others', 'vacation'],
  //   },
  //   {
  //     id: 'KQF22CAV3PE',
  //     date: '2022-10-27',
  //     location: 'Mörfelden-Walldorf',
  //     title: 'pharetra sed, hendrerit a, arcu.',
  //     text: 'metus. Aenean sed pede nec ante blandit viverra. Donec tempus, lorem fringilla ornare placerat,',
  //     categories: ['vacation'],
  //   },
  //   {
  //     id: 'GDC62YGE1II',
  //     date: '2021-04-09',
  //     location: 'Hamburg',
  //     title: 'natoque penatibus et',
  //     text: 'lacus. Aliquam rutrum lorem ac risus. Morbi metus. Vivamus euismod urna. Nullam lobortis quam',
  //     categories: ['others'],
  //   },
  // ]);

  const [categories, setCategories] = useState([
    'family',
    'kids',
    'friends',
    'vacation',
    'sports',
    'others',
  ]);
  const [noteToEdit, setNoteToEdit] = useState();
  const [filterResult, setFilterResult] = useState('');

  const [searchInput, setSearchInput] = useState('');
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
    showFormSubmitMessage();
    navigate('/');
  };

  const addCategory = input => {
    setCategories([input, ...categories]);
  };

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
