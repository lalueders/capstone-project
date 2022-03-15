import styled from 'styled-components';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ListPage from './pages/ListPage.js';
import FormPage from './pages/FormPage.js';
import Navigation from './components/Navigation.js';

function App() {
  // const [notes, setNotes] = useState([]);
  const [notes, setNotes] = useState([
    {
      date: '2022-07-03',
      title: 'Capstone Projekt gestartet',
      text: 'Es geht los! Mal schauen, was m,an in vier Wochen so schafft...',
      location: 'Hamburg, Eimsbüttel',
      categories: ['job', 'carrer'],
    },

    {
      date: '2022-01-10',
      title: 'Das Bootcamp geht los!',
      text: 'Man sagt da kommt ganz schön viel Arbeit auf mich zu...',
      location: 'Hamburg, Eimsbüttel',
      categories: ['job', 'carrer'],
    },

    {
      date: '2022-1-03',
      title: 'Family zu Besuch in HH',
      text: 'Die Karlsruher haben es auch mal in den Norden geschafft! Emma ist echt groß geworden und Lisa wachsen immernoch keine Haare',
      location: 'Hamburg, Rotherbaum',
      categories: ['family', 'vacation'],
    },

    {
      date: '2022-11-15',
      title: 'Leyla ist da!',
      text: 'Na endlich! Happy Welcome to the World Leyla Hayal!!! 2.25 Uhr, 3500g, 53cm',
      location: 'Hamburg, Eimsbüttel',
      categories: ['family'],
    },
  ]);

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
