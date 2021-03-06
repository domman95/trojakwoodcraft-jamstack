import { Link } from 'gatsby';
import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import Logo from '../assets/logo';
import Context from '../context';
import Hamburger from './hamburger';
import getOffsetTop from '../utils/getOffsetTop';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: ${({ show }) => (show ? 'rgba(33, 33, 33, .75)' : 'transparent')};
  backdrop-filter: blur(5px);
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
    transform: translateY(-100%);
    animation: show 0.3s linear forwards;
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
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    180deg,
    rgba(51, 51, 51, 0.95) 0%,
    rgba(66, 66, 66, 0.95) 100%
  );
  padding: 60px 10px;
  width: 100vw;
  height: 100vh;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in;

  li {
    position: relative;
    list-style: none;
    margin: 10px 25px;
    font-size: 1.4rem;
    padding: 5px;
    text-transform: uppercase;
    cursor: pointer;
    border-bottom: 1px solid #cecece;
    overflow: hidden;
    transform: translateY(-25%);
    opacity: 0;
    animation: ${({ open }) => open && `show 1s linear forwards var(--delay)`};

    a {
      color: #cecece;
      text-decoration: none;
    }

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
        transform: translateY(0);
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
      opacity: 0;
      border: none;
      animation: none;
      transform: ${({ open }) => !open && 'translateX(-50%)'};
      animation: ${({ open }) => !open && `showLinks .7s linear forwards`};

      &.meetUs {
        animation-delay: 3.1s;
      }

      &.realizations {
        animation-delay: 2.8s;
      }

      &.contact {
        animation-delay: 2.5s;
      }
    }

    @keyframes showLinks {
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
  }
`;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHome, setIsHome] = useState(true);

  const { showLogo, setShowLogo } = useContext(Context);

  useEffect(() => {
    if (window.location.pathname !== '/') {
      setShowLogo(true);
      setIsHome(false);
    }
    if (window.location.pathname === '/') {
      window.addEventListener('scroll', () =>
        getOffsetTop(showLogo, setShowLogo)
      );
    }

    return () => {
      window.removeEventListener('scroll', getOffsetTop);
    };
  }, [showLogo, setShowLogo, isHome, setIsHome]);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Nav show={showLogo}>
      <Link to="/">
        {showLogo && (
          <div className="logo">
            <Logo fill="white" id="logo" />
          </div>
        )}
      </Link>
      <Hamburger open={isOpen} toggle={toggle} />
      <Links open={isOpen} home={isHome}>
        <li className="meetUs" style={{ '--delay': '.1s' }}>
          <Link to="/#poznajmy-sie">poznajmy si??</Link>
        </li>
        <li className="realizations" style={{ '--delay': '.2s' }}>
          <Link to="/realizacje">realizacje</Link>
        </li>
        <li className="contact" style={{ '--delay': '.3s' }}>
          <Link to="/#kontakt">kontakt</Link>
        </li>
      </Links>
    </Nav>
  );
}
