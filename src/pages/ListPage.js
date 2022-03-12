import styled from 'styled-components';

import Card from '../components/Card';

export default function ListPage({ notes }) {
  return (
    <StyledPage>
      {notes.map((note, index) => (
        <Card
          key={index}
          date={note.date}
          title={note.title}
          text={note.text}
          location={note.location}
          categories={note.categories}
        />
      ))}
    </StyledPage>
  );
}

const StyledPage = styled.main`
  position: absolute;
  top: 48px;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: -1;
`;
