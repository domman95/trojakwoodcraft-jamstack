import React from 'react';
import SEO from './SEO';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
  }

  html {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <SEO />
      {children}
    </>
  );
}
