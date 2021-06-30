import React from 'react';
import styled, { css } from 'styled-components';
import { navigate } from 'gatsby';

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

export default function Button({
  children,
  primary,
  secondary,
  slug = null,
  type = null,
}) {
  const handleClick = (slug) => {
    navigate(`/realizacje/${slug}`, { replace: true });
  };
  return (
    <StyledButton
      primary={primary}
      secondary={secondary}
      type={type}
      onClick={slug && (() => handleClick(slug))}>
      {children}
    </StyledButton>
  );
}
