import React from 'react';
import styled from 'styled-components';
import About from './about';
import Projects from './projects';

const StyledMain = styled.main`
  background: #333333;
  overflow: hidden;
`;

export default function Main() {
  return (
    <StyledMain>
      <About />
      <Projects />
    </StyledMain>
  );
}
