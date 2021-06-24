import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
  background: #333333;
  overflow: hidden;
`;

export default function Main({ children }) {
  return <StyledMain>{children}</StyledMain>;
}
