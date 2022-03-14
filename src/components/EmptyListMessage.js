import styled from 'styled-components/macro';
import iconFeather from '../assets/icon_feather.png';
import { useNavigate } from 'react-router-dom';

export default function EmptyListMessage() {
  const navigate = useNavigate();

  function handleClick(e) {
    navigate('../form');
  }

  return (
    <StyledMessage onClick={handleClick}>
      You don't have any notes yet! What's on your mind? Write it down right here...
      <StyledIcon>
        <img src={iconFeather} alt="feather" />
      </StyledIcon>
    </StyledMessage>
  );
}

const StyledMessage = styled.section`
  height: 75vh;
  color: #394a59;
  font-size: 1.25rem;
  text-align: center;
  line-height: 1.5;
  margin: 0.5rem 2rem;
  opacity: 0.5;
`;

const StyledIcon = styled.div`
  background: none;
  display: inline;
  height: 1.5rem;
  padding-left: 2px;
  img {
    height: 1.5rem;
  }
`;
