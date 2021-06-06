import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --navbarHeight: 80px;
    --bgcColor: linear-gradient(180deg, #212121 0%, #424242 100%)
  }

  html {
    font-family: 'Montserrat', sans-serif;
    font-size: 10px;
    height: -webkit-fill-available;
    background: var(--bgcColor);
  }

  body {
    min-height: -webkit-fill-available;
    font-size: 1.6rem;
  }

  html,
  body,
  #___gatsby,
  div[tabindex] {
    height: 100%;
  }

`;