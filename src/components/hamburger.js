import React from 'react';
import styled from 'styled-components';

const Menu = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 24px;
  height: 24px;
  z-index: 1;

  @media (min-width: 768px) {
    display: none;
  }

  .hamburger__line {
    width: 100%;
    border-top: 1px solid white;
  }
`;

export default function Hamburger({ open, toggle }) {
  return (
    <Menu onClick={toggle} open={open}>
      <div className="hamburger__line hamburger__line__01 " />
      <div className="hamburger__line hamburger__line__02 " />
      <div className="hamburger__line hamburger__line__03 " />
    </Menu>
  );
}
