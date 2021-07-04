import React, { useEffect } from 'react';
import styled from 'styled-components';
import Logo from '../assets/logo';

const StyledSvg = styled.div`
  display: flex;
  width: 100%;

  @keyframes drawStroke {
    to {
      opacity: 1;
      stroke-dashoffset: 0;
      transform: translateY(0);
    }
  }

  @keyframes fill {
    0% {
      opacity: 0;
    }
    1% {
      opacity: 1;
    }

    50% {
      fill: white;
    }

    100% {
      fill: white;
      filter: drop-shadow(-10px 10px 4px rgba(0, 0, 0, 0.5));
    }
  }
`;

export default function AnimationLogo() {
  const id = 'animationLogo';

  useEffect(() => {
    const paths = document.querySelectorAll(`#${id} path`);
    const logo = document.getElementById(id);

    paths.forEach((path) => {
      path.style.strokeDashoffset = Math.round(path.getTotalLength());
      path.style.strokeDasharray = Math.round(path.getTotalLength());
      path.style.opacity = '0';
      path.style.transform = 'translateY(-2%)';
      path.style.animation = `drawStroke 2s ease-out forwards ${Number(
        Math.random().toFixed(2)
      )}s`;
    });

    logo.style.animation =
      'fill 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards 2.4s';
  }, []);

  return (
    <StyledSvg>
      <Logo fill="none" id={id} />
    </StyledSvg>
  );
}
