import styled from 'styled-components/macro';
import EditNote from '../components/EditNote';

export default function EditNotePage() {
  return (
    <StyledPage>
      <EditNote />
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
