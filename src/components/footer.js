import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 70px 0;
  background: #212121;

  .copyright {
    margin-bottom: 10px;
  }

  .designed {
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: #cecece;

    a {
      color: #cecece;
    }
  }

  p,
  a {
    text-align: center;
    color: white;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <p className="copyright">
        {String.fromCharCode('0169')}
        {new Date().getFullYear()} TROJAKwoodcraft | Wszelkie prawa zastrzeżone.
      </p>
      <Link to="/">Polityka prywatności</Link>
      <div className="designed">
        Wykonanie: <a href="https://dlwebdev.com">dlwebdev.com</a> | Dominik
        Lasek
      </div>
    </StyledFooter>
  );
}
