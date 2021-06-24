import React from 'react';
import styled from 'styled-components';
import Next from './next';

const StyledSection = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-content: center;
  border-bottom: 20px solid #424242;

  .title {
    position: absolute;
    color: #212121;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 74px;
    white-space: nowrap;

    @media (min-width: 768px) {
      font-size: 104px;
    }

    @media (min-width: 1024px) {
      font-size: 134px;
    }

    @media (min-width: 1440px) {
      font-size: 164px;
    }

    &.up {
      top: 40px;
      right: 0;
      transform: translateX(65%);
      animation: moveForUp 10s linear infinite;
    }

    &.down {
      bottom: 40px;
      left: 0;
      transform: translateX(-35%);
      animation: moveForDown 10s linear infinite;
    }
  }

  @keyframes moveForUp {
    0% {
      transform: translateX(65%);
    }
    50% {
      transform: translateX(66%);
      text-shadow: -8px 4px 4px rgba(0, 0, 0, 0.25);
    }

    100% {
      transform: translateX(65%);
    }
  }

  @keyframes moveForDown {
    0% {
      transform: translateX(-35%);
    }
    50% {
      transform: translateX(-36%);
      text-shadow: -8px 4px 4px rgba(0, 0, 0, 0.25);
    }

    100% {
      transform: translateX(-35%);
    }
  }
`;

const Container = styled.div`
  position: relative;
  max-width: 1440px;
  display: grid;
  z-index: 5;
  flex: 1;
  padding: 150px 50px;
`;

export default function Section({ id, title, children, nextName }) {
  return (
    <StyledSection id={id}>
      <h2 className="title up">{title}</h2>
      <h2 className="title down">{title}</h2>
      <Container>
        <>
          {children}
          {nextName && <Next name={nextName} />}
        </>
      </Container>
    </StyledSection>
  );
}
