import styled from 'styled-components/macro';
import { useNavigate } from 'react-router-dom';
import iconFeather from '../assets/icon_feather_light.png';

export default function AddButton() {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate('/add')}>
      <img src={iconFeather} alt="add note" />
    </Button>
  );
}

const Button = styled.button`
  z-index: 2;
  position: fixed;
  left: 50%;
  transform: translate(-50%);
  bottom: 1rem;
  background: #394a59;
  border-radius: 20px;
  border: none;
  padding: 0.5rem;
  box-shadow: 2px 2px 6px 0px #a3afbf;
  img {
    width: 45px;
  }
`;
