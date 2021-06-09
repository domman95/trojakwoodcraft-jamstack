import React from 'react';
import styled from 'styled-components';
import About from '../templates/about';
import Contact from '../templates/contact';
import Realizations from '../templates/realizations';

const StyledMain = styled.main`
  background: #333333;
  overflow: hidden;
`;

export default function Main() {
  return (
    <StyledMain>
      <About />
      <Realizations />
      <Contact />
    </StyledMain>
  );
}
