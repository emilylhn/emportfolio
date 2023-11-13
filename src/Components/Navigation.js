import React from 'react';
import styled from 'styled-components';

const Navigation = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #FAC9B6;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  @media (max-width: 768px) {
    background: #FAC9B6;
    text-align: center;
    padding-top: 80px;
    height: auto;
    padding: 3px;
  }
`;

const NavItem = styled.a`
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  color: #02776f;
  padding: 10px 20px;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 5px 0;
    display: block;
    margin: 4px;
  }
`;

const NavigationBar = () => {
  return (
    <Navigation>
      <NavItem href="#hero">Home</NavItem>
      <NavItem href="#about">About</NavItem>
      <NavItem href="#projects">Projects</NavItem>
      <NavItem href="#contact">Contact</NavItem>
      <NavItem href="https://github.com/emilylhn">GitHub</NavItem>
      <NavItem href="https://ca.linkedin.com/">LinkedIn</NavItem>
    </Navigation>
  );
};

export default NavigationBar;
