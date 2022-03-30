import styled from 'styled-components/macro';
import EditNote from '../components/EditNote';
import Navigation from '../components/Navigation';

export default function EditNotePage({ updateNote, noteToEdit, categories, addCategory }) {
  return (
    <StyledPage>
      <Navigation />
      <EditNote
        noteToEdit={noteToEdit}
        updateNote={updateNote}
        categories={categories}
        addCategory={addCategory}
      />
    </StyledPage>
  );
}

const StyledPage = styled.main`
  height: 100vh;
  width: 100%;
`;
