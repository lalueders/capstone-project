import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';
import iconFeather from '../assets/iconFeather--light.svg';
import iconList from '../assets/iconList--light.svg';

export default function Navigation() {
  return (
    <StyledNav>
      <StyledNavLink to="/">
        <img src={iconList} height="20" width="auto" alt="Go to my list of notes" />
      </StyledNavLink>
      <h2>My Notes</h2>
      <StyledNavLink to="/add">
        <img src={iconFeather} height="30" width="auto" alt="Create a new note" />
      </StyledNavLink>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  background: var(--darkblue);
  padding: 0.75rem;

  h2 {
    color: var(--lightblue);
    font-size: 1.25rem;
  }
`;

const StyledNavLink = styled(NavLink)`
  cursor: default;
  &.active {
    opacity: 35%;
    cursor: default;
  }
`;
