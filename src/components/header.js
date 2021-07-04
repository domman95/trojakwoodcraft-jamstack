import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import AnimationLogo from '../components/animationLogo';
import Instagram from '../assets/instagram';
import Facebook from '../assets/facebook';
import Next from './scrollDownSign';

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
    opacity: 0;
    animation: opacityChange 3s linear forwards;
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
  }

  @keyframes opacityChange {
    to {
      opacity: 1;
    }
  }
`;

const Media = styled.a`
  position: relative;
  display: flex;
  width: 24px;
  height: 24px;
  object-fit: cover;
  transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover::before {
    content: ${({ name }) => `'${name}'`};
    position: absolute;
    height: 100%;
    background: white;
    top: -25%;
    left: 100%;
    color: #333333;
    padding: 0 5px;
    border-radius: 1px;
    animation: delay 0.3s 0.3s linear forwards;
  }

  &:hover {
    transform: skewY(-5deg) scale(1.3);
  }

  &.facebook {
    margin-top: 20px;
  }

  @keyframes delay {
    from {
      text-decoration: none;
    }

    to {
      text-decoration: underline;
    }
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <div className="logo">
        <AnimationLogo />
      </div>
      <div className="socials">
        <Media
          href="https://www.instagram.com/trojakwoodcraft/"
          className="instagram media"
          name="ig:trojakwoodcraft">
          <Instagram />
        </Media>
        <Media
          href="https://www.facebook.com/TROJAKwoodcraft-109441140834265/"
          className="facebook media"
          name="fb:trojakwoodcraft">
          <Facebook />
        </Media>
      </div>
      <Next name="poznajmy się" />
    </StyledHeader>
  );
}
