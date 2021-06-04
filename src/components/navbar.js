import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../assets/logo';
import Hamburger from './hamburger';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--navbarHeight);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 30px;
  z-index: 10;

  .logo {
    display: none;
    justify-content: center;
    align-items: center;
    width: 115px;
    height: 60px;
    object-fit: cover;
  }

  @media (min-width: 768px) {
    & .logo {
      width: 170px;
    }
  }
`;

const Links = styled.ul`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #333333 0%, #424242 100%);
  padding: 60px 10px;
  height: 100vh;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in;

  li {
    position: relative;
    color: white;
    list-style: none;
    margin: 10px 25px;
    font-size: 1.4rem;
    padding: 5px;
    text-transform: uppercase;
    cursor: pointer;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      border: 1px solid white;
      transform: translateX(-101%);
      transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    &:hover::before {
      transform: translateX(0);
    }
  }

  @media (min-width: 768px) {
    position: static;
    transform: translateX(0);
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0;
    height: 100%;
    background: transparent;
    transition: none;

    li {
      margin: 5px 15px;
    }
  }
`;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Nav>
      <div className="logo">
        <Logo />
      </div>
      <Hamburger open={isOpen} toggle={toggle} />
      <Links open={isOpen}>
        <li>poznajmy się</li>
        <li>realizacje</li>
        <li>kontakt</li>
      </Links>
    </Nav>
  );
}
