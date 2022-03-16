import styled from 'styled-components';

export default function DeleteDialog({ cancelDelete, handleDeleteNote }) {
  return (
    <Dialog>
      It's irreversible. Are you sure you want to delete this form your notes?
      <Wrapper>
        <button onClick={handleDeleteNote}>Yes, please!</button>
        <button onClick={cancelDelete}>Nooo</button>
      </Wrapper>
    </Dialog>
  );
}

const Dialog = styled.div`
  background: white;
  width: 300px;
  height: 160px;
  position: fixed;
  top: 20%;
  left: 50%;
  margin-top: -80px;
  margin-left: -150px;
  padding: 20px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0px 0px 6px var(--color-boxshadow);
  text-align: center;
  z-index: 1;
`;

const Wrapper = styled.div`
  display: grid;
  gap: 15px;
  padding-top: 25px;
`;
