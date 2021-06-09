import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  border: none;
  text-transform: uppercase;
  padding: 15px 35px;
  font-size: 1.6rem;
  cursor: pointer;
  align-self: flex-end;

  ${({ primary }) =>
    primary &&
    css`
      background: #333333;
    `}

  ${({ secondary }) =>
    secondary &&
    css`
      background: #212121;
    `}
`;

export default function Button({ children, primary, secondary }) {
  return (
    <StyledButton primary={primary} secondary={secondary}>
      {children}
    </StyledButton>
  );
}
