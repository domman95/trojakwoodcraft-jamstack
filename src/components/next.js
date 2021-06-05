import React from 'react';
import styled from 'styled-components';
import Arrow from '../assets/arrow';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);

  .name {
    color: #cecece;
    text-transform: uppercase;
  }

  .arrow {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 34px;
    height: 34px;
    object-fit: cover;
    margin-top: 10px;
    animation: slide 3s linear infinite;

    path {
      stroke: #cecece;
    }
  }

  @keyframes slide {
    0% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(25%);
      opacity: 0.3;
    }

    100% {
      transform: translateY(0);
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
