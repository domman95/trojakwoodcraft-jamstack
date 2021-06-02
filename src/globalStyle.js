import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: 'Montserrat', sans-serif;
    background: linear-gradient(180deg, #212121 0%, #424242 100%);
    font-size: 10px;
  }

  body {
    min-height: 100vh;
    font-size: 1.6rem;
  }

  .container {
    // todo
  }
`;
