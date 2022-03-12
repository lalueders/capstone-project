import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';
import iconFeather from '../assets/icon_feather_light.png';
import iconBackArrow from '../assets/backArrow.png';

export default function Navigation() {
  return (
    <Nav>
      <NavLink to="/">
        <ListButton>
          <img src={iconBackArrow} alt="Cancel" />
        </ListButton>
      </NavLink>
      <p>My Notes</p>
      <NavLink to="/form">
        <CreateButton>
          <img src={iconFeather} alt="feather" />
        </CreateButton>
      </NavLink>
    </Nav>
  );
}

const Nav = styled.nav`
  display: grid;
  background: #394a59;
  position: fixed;
  height: 2.5rem;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0.5rem;
  border-bottom: 0.5rem solid #f2f0f0;
  z-index: 1;

  p {
    color: #dce6f2;
    font-size: 1.25rem;
  }
`;

const CreateButton = styled.button`
  height: 40px;
  background: #394a59;
  border: none;
  border-radius: 8px;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  img {
    height: 100%;
  }
`;

const ListButton = styled.button`
  height: 30px;
  background: #394a59;
  border: none;
  border-radius: 8px;
  padding: 0.25rem 0.5rem;
  cursor: pointer;

  img {
    height: 100%;
  }
`;
