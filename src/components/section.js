import React from 'react';
import styled from 'styled-components';
import Next from './next';

const StyledSection = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-content: center;
  min-height: 100vh;
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
    }

    &.down {
      bottom: 40px;
      left: 0;
      transform: translateX(-35%);
    }
  }
`;

const Container = styled.div`
  position: relative;
  max-width: 1440px;
  display: grid;
  z-index: 5;
  border: 1px solid white;
  flex: 1;
  padding: 150px 50px;
`;

export default function Section({ title, children, nextName }) {
  return (
    <StyledSection>
      <h2 className="title up">{title}</h2>
      <h2 className="title down">{title}</h2>
      <Container>
        <>
          {children}
          <Next name={nextName} />
        </>
      </Container>
    </StyledSection>
  );
}
