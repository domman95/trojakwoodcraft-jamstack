import React from 'react';
import styled from 'styled-components';
import Arrow from '../assets/arrow';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  opacity: 0;
  bottom: 30px;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: start 1s linear forwards 2s;

  .name {
    text-transform: uppercase;
  }

  .arrow {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 34px;
    height: 34px;
    opacity: 0;
    object-fit: cover;
    margin-top: 10px;
    animation: slide 3s linear infinite 3s;

    path {
      stroke: #cecece;
    }
  }

  @keyframes start {
    to {
      opacity: 1;
      transform: translate(-50%, 0%);
    }
  }

  @keyframes slide {
    0% {
      transform: translateY(0);
      opacity: 0.1;
    }

    25% {
      opacity: 0.3;
    }

    50% {
      transform: translateY(25%);
      opacity: 1;
    }

    100% {
      transform: translateY(0);
      opacity: 0.3;
    }
  }
`;

export default function Next({ name }) {
  return (
    <Container>
      <p className="name">{name}</p>
      <div className="arrow">
        <Arrow />
      </div>
    </Container>
  );
}
