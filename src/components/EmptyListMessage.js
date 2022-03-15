import styled from 'styled-components/macro';
import iconFeather from '../assets/icon_feather.png';
import { useNavigate } from 'react-router-dom';

export default function EmptyListMessage() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('../form');
  }

  return (
    <StyledMessage role="button" onClick={handleClick}>
      You don't have any notes yet! What's on your mind? Write it down right here...
      <StyledIcon src={iconFeather} alt="feather" />
    </StyledMessage>
  );
}

const StyledMessage = styled.div`
  user-select: none;
  cursor: pointer;

  color: #394a59;
  font-size: 1.25rem;
  text-align: center;
  line-height: 1.5;
  margin: 0.5rem 2rem;
  opacity: 0.5;
`;

const StyledIcon = styled.img`
  background: none;
  display: inline;
  height: 1.5rem;
  padding-left: 2px;
  height: 1.5rem;
`;
