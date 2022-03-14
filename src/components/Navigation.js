import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';
import iconFeather from '../assets/icon_feather_light.png';
import iconList from '../assets/icon_list--light.png';

export default function Navigation() {
  return (
    <StyledNav>
      <StyledNavLink to="/">
        <StyledButton>
          <img src={iconList} alt=" " />
        </StyledButton>
      </StyledNavLink>
      <Title>My Notes</Title>
      <StyledNavLink to="/form">
        <StyledButton>
          <img src={iconFeather} alt=" " />
        </StyledButton>
      </StyledNavLink>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  position: fixed;
  height: 64px;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  background: #394a59;
  border-bottom: 0.5rem solid #f2f0f0;
  padding: 0 0.5rem;
`;

const StyledNavLink = styled(NavLink)`
  &.active {
    opacity: 35%;
  }
`;

const StyledButton = styled.button`
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

const Title = styled.p`
  color: #dce6f2;
  font-size: 1.25rem;
`;
