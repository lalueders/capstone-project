import styled from 'styled-components';
// import AddNote from '../components/AddNote';
import AddNoteRefact from '../components/AddNoteRefact';

export default function AddNotePage({
  notes,
  setNotes,
  showFormSubmitMessage,
  addCategory,
  categories,
}) {
  return (
    <StyledPage>
      <AddNoteRefact
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
  position: absolute;
  top: 64px;
  right: 0;
  left: 0;
  bottom: 0;
`;
