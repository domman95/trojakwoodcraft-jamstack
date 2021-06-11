import React from 'react';
import styled from 'styled-components';
import Section from '../components/section';
import Offer from '../assets/offer';
import Locale from '../assets/locale';
import Individual from '../assets/individual';
import Tilt from 'react-vanilla-tilt';

const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .about {
    font-size: 1.8rem;
    padding: 0 10px;
    margin: 0 0 20px;

    span {
      font-weight: bold;
      font-size: 2rem;
    }
  }

  .wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
    margin-top: 20px;

    .card {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      flex: 1;
      background: #212121;
      padding: 30px 10px;
      margin: 10px;
      box-shadow: -10px 10px 4px rgba(0, 0, 0, 0.25);
      transition: all 0.3s cubic-bezier(1, 0, 0, 1);

      .tilt {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      &::before {
        content: '';
        position: absolute;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background: #333333;
        box-shadow: 20px 0 0 #333333;
        top: 10px;
        left: 15px;
      }

      &::after {
        content: '';
        position: absolute;
        height: 30px;
        width: 8px;
        background: #333333;
        transform: skewX(13deg);
        background: #333333;
        box-shadow: 20px 0 0 #333333;
        top: -10px;
        left: 15px;
      }

      &:hover {
        transform: scale(1.05);
        box-shadow: -15px 15px 4px rgba(10, 10, 10, 0.25);
      }

      &:nth-last-child(1) {
        grid-column: span;
      }

      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 64px;
        height: 64px;
        object-fit: cover;
        margin-bottom: 20px;
        transform: translateZ(55px);
      }

      .paragraph {
        padding: 0 10px;
        font-size: 1.8rem;
      }
    }
  }
`;

export default function About() {
  return (
    <Section title="poznajmy się" nextName="realizacje">
      <StyledAbout>
        <p className="about">
          <span>TROJAKwoodcraft </span>
          jest firmą która istnieje krótko na rynku ale z wielkim zapałem,
          zaangażowaniem i świeżą energią zajmujemy się produkcją małej i dużej
          architektury ogrodowej z drewna oraz drewna łączonego z metalem.
        </p>
        <article className="wrapper">
          <div className="card offer">
            <Tilt className="tilt" style={{}}>
              <div className="icon">
                <Offer />
              </div>
              <p className="paragraph">
                Produkty jakie między innymi oferujemy to domki narzędziowe,
                domki letniskowe, budy, kurniki, drewutnie, studnie ozdobne,
                stoły, ławki, huśtawki, altanki oraz wiaty. Przeprowadzamy
                również metamorfozy i przebudowy obiektów drewnianych.
              </p>
            </Tilt>
          </div>
          <div className="card locally">
            <Tilt className="tilt" style={{}}>
              <div className="icon">
                <Locale />
              </div>
              <p className="paragraph">
                Stosujemy materiały wysokiej jakości od zaprzyjaźnionych,
                stałych dostawców. Tym samym wspierając lokalny rynek.
              </p>
            </Tilt>
          </div>
          <div className="card individual">
            <Tilt className="tilt" style={{}}>
              <div className="icon">
                <Individual />
              </div>
              <p className="paragraph">
                Do każdego zlecenia podchodzimy indywidualnie, słuchając potrzeb
                i doradzając najlepsze rozwiązania.
              </p>
            </Tilt>
          </div>
        </article>
      </StyledAbout>
    </Section>
  );
}
