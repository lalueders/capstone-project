import styled from 'styled-components';
import AddNote from '../components/AddNote';
import Navigation from '../components/Navigation';

export default function AddNotePage({
  notes,
  setNotes,
  showFormSubmitMessage,
  addCategory,
  categories,
}) {
  return (
    <StyledPage>
      <Navigation Children="New Note" />
      <AddNote
        setNotes={setNotes}
        notes={notes}
        showFormSubmitMessage={showFormSubmitMessage}
        addCategory={addCategory}
        categories={categories}
      />
    </StyledPage>
  );
}

const StyledPage = styled.main`
  height: 100vh;
  width: 100%;
`;
