import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/logo';
import Instagram from '../assets/instagram';
import Facebook from '../assets/facebook';
import Arrow from '../assets/arrow';

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: -webkit-fill-available;
  max-width: 1440px;
  margin: 0 auto;
  padding: 20px 10px;

  .logo {
    flex: 1;
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
  return (
    <StyledHeader>
      <div className="logo">
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
