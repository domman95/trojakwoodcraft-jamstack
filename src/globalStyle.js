import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --navbarHeight: 80px;
    --bgcColor: linear-gradient(180deg, #212121 0%, #424242 100%);
    --bgcColorOpacity: linear-gradient(180deg, rgba(33,33,33,.8) 0%, rgba(66,66,66,.8) 100%);
  }

  html {
    font-family: 'Montserrat', sans-serif;
    font-size: 10px;
    height: -webkit-fill-available;
    color: #cecece;
    scroll-behavior: smooth;
  }

  body {
    min-height: -webkit-fill-available;
    font-size: 1.6rem;
    background: url('https://images.unsplash.com/photo-1555505019-8c3f1c4aba5f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80') no-repeat center/cover;
  }

  body::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--bgcColorOpacity);
  }

  html,
  body,
  #___gatsby,
  div[tabindex] {
    height: 100%;
  }

  button,
  input,
  textarea {
    color: #cecece;
    --webkit-appearance: none;
    border-radius: 0;
  }

  a {
    color: #cecece;
    text-decoration: none;
  }

  .scrollAnimation {
    transform: translateY(-25%);
    opacity: 0;
    animation: scroll 1s linear forwards;
  }

  @keyframes scroll {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

`;
