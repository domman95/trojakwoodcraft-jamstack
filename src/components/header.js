import React, { useEffect, useRef, useState, useContext } from 'react';
import styled from 'styled-components';
import Logo from '../assets/logo';
import Instagram from '../assets/instagram';
import Facebook from '../assets/facebook';
import Arrow from '../assets/arrow';
import Context from '../context';

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: -webkit-fill-available;
  max-width: 1440px;
  margin: 0 auto;
  padding: 20px 10px;

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    height: auto;
    object-fit: cover;
  }

  .socials {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 40px;
    left: 20px;
    z-index: 10;

    .media {
      display: flex;
      width: 24px;
      height: 24px;
      object-fit: cover;

      &.facebook {
        margin-top: 20px;
      }
    }
  }
`;

export default function Header() {
  const myRef = useRef();

  const { showLogo, setShowLogo } = useContext(Context);

  useEffect(() => {
    const logo = myRef.current;

    const getOffsetTop = () => {
      const top = logo.getBoundingClientRect().top;

      if (top <= 0 && !showLogo) setShowLogo(true);
      if (top >= 0 && showLogo) setShowLogo(false);
    };

    window.addEventListener('scroll', getOffsetTop);

    return () => {
      window.removeEventListener('scroll', getOffsetTop);
    };
  }, [myRef, showLogo]);

  return (
    <StyledHeader>
      <div className="logo" ref={myRef}>
        <Logo />
      </div>
      <div className="socials">
        <a href="#" className="instagram media">
          <Instagram />
        </a>
        <a href="#" className="facebook media">
          <Facebook />
        </a>
      </div>
    </StyledHeader>
  );
}
