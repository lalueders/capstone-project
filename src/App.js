import styled from 'styled-components';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ListPage from './pages/ListPage.js';
import FormPage from './pages/FormPage.js';
import Navigation from './components/Navigation.js';

function App() {
  // const testData = [
  //   {
  //     date: '2022/07/03',
  //     heading: 'Capstone Projekt gestartet',
  //     text: 'Es geht los! Schauen wir mal, ob ich in vier Wochen eine funktionierende App gebaut hab...',
  //   },
  //   {
  //     date: '10.01.2022',
  //     heading: 'Das Bootcamp geht los!',
  //     text: 'Man munkelt da kommt ganz schön viel Arbeit auf mich zu',
  //   },
  //   {
  //     date: '03.01.2022',
  //     heading: 'Family zu Besuch in HH',
  //     text: 'Die Karlsruher haben es auch mal in den Norden geschafft! Emma ist echt groß geworden und Lisa wachsen immernoch keine Haare',
  //   },
  //   {
  //     date: '15.11.2021',
  //     heading: 'Leyla ist da!',
  //     text: 'Na endlich! Happy Welcome to the World Leyla Hayal!!! Du siehts zwar bischen aus wie Peter Altmeier aber das verwächst sich bestimmt noch ;) 2.25 Uhr, 3500g, 53cm',
  //   },
  //   {
  //     date: '03.10.2021',
  //     heading: 'Trip nach Dresden',
  //     text: 'Immer wieder schön mit den Jungs. Robert kann immer noch trinken als wäre er zwanzig. Beeindruckend!',
  //   },
  // ];

  const [notes, setNotes] = useState([]);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const showFormSubmitMessage = () => {
    setIsFormSubmitted(true);
    setTimeout(() => setIsFormSubmitted(false), 3000);
  };

  return (
    <Grid>
      <Navigation />
      <Routes>
        <Route path="/" element={<ListPage notes={notes} isFormSubmitted={isFormSubmitted} />} />
        <Route
          path="form"
          element={<FormPage setNotes={setNotes} notes={notes} showFormSubmitMessage={showFormSubmitMessage} />}
        />
      </Routes>
    </Grid>
  );
}

export default App;

const Grid = styled.main`
  height: 100vh;
  position: relative;
  display: grid;
  grid-template-rows: 64px auto;
`;
