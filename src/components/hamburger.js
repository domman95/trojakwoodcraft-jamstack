import React from 'react';
import styled, { css } from 'styled-components';

const Menu = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
  z-index: 1;

  @media (min-width: 768px) {
    display: none;
  }

  .hamburger__line {
    position: relative;
    position: absolute;
    background: white;
    width: 100%;
    height: 2px;
    border-radius: 5px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 0.3s linear;

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: white;
      border-radius: 5px;
      transition: 0.3s linear;
      transform: translateY(6px);
    }

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: white;
      border-radius: 5px;
      transition: 0.3s linear;
      transform: translateY(-6px);
    }
  }

  ${({ open }) =>
    open &&
    css`
      .hamburger__line {
        transform: translate(-50%, -50%) rotate(135deg);

        &::before {
          transform: translateY(0);
        }

        &::after {
          transform: translateY(0) rotate(90deg);
        }
      }
    `}
`;

export default function Hamburger({ open, toggle }) {
  return (
    <Menu onClick={toggle} open={open}>
      <div className="hamburger__line" />
    </Menu>
  );
}
