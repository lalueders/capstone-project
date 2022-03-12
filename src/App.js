import styled from 'styled-components';
import { useState } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import ListPage from './pages/ListPage.js';
import FormPage from './pages/FormPage.js';

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

  return (
    <Grid>
      <Nav>
        <NavLink to="/">
          <button>List</button>
        </NavLink>
        <NavLink to="/form">
          <button>Form</button>
        </NavLink>
      </Nav>
      <Routes>
        <Route path="/" element={<ListPage notes={notes} />} />
        <Route path="form" element={<FormPage setNotes={setNotes} notes={notes} />} />
      </Routes>
    </Grid>
  );
}

export default App;

const Grid = styled.main`
  display: grid;
  gap: 0.5rem;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  border: 1px solid;
  margin: 0.5rem;
  padding: 1rem;

  button {
    padding: 0.5rem;
    cursor: pointer;
  }
`;
