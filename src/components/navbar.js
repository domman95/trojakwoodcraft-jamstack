import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from './logo';
import Hamburger from './hamburger';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 60px;
    object-fit: cover;
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
      transform: translateX(-100%);
      transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    &:hover {
      &::before {
        transform: translateX(0);
      }
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
      <Hamburger toggle={toggle} />
      <Links open={isOpen}>
        <li>poznajmy się</li>
        <li>realizacje</li>
        <li>kontakt</li>
      </Links>
    </Nav>
  );
}
