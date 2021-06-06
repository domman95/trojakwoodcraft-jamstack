import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import Logo from '../assets/logo';
import Context from '../context';
import Hamburger from './hamburger';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: ${({ show }) => (show ? '#212121' : 'transparent')};
  height: var(--navbarHeight);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  z-index: 10;
  transition: background 0.3s linear;

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 115px;
    height: 60px;
    object-fit: cover;
    transform: ${({ show }) => (show ? 'translateY(0)' : 'translateY(-100%)')};
    transition: transform 0.3s linear;
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
    transform: translateX(-5%);
    opacity: 0;
    animation: show 1s linear forwards;

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

    &:hover {
      transform: skewY(1deg);
    }

    &:hover::before {
      transform: translateX(0);
    }

    @keyframes show {
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }

  @media (min-width: 768px) {
    position: static;
    transform: translateX(0);
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 0 10px;
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

  const { showLogo, setShowLogo } = useContext(Context);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Nav show={showLogo}>
      <div className="logo">
        <Logo />
      </div>
      <Hamburger open={isOpen} toggle={toggle} />
      <Links open={isOpen}>
        <li className="meetUs">poznajmy się</li>
        <li className="realizations">realizacje</li>
        <li className="contact">kontakt</li>
      </Links>
    </Nav>
  );
}
