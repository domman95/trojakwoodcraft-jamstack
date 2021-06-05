import React from 'react';
import styled from 'styled-components';
import Section from '../components/section';
import Offer from '../assets/offer';
import Locale from '../assets/locale';
import Individual from '../assets/individual';
import Next from '../components/next';

const StyledAbout = styled.article`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  align-self: center;
  z-index: 5;
  padding: 100px 50px;
  max-width: 1440px;
  margin: 0 auto;

  .about {
    color: white;
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
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    justify-content: center;
    padding: 10px 0;

    .card {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      flex: 1;
      background: #212121;
      padding: 30px 10px;
      margin: 10px;
      box-shadow: -10px 10px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      transition: transform 0.3s cubic-bezier(1, 0, 0, 1);

      &:hover {
        transform: scale(1.05);
        box-shadow: -10px 10px 4px rgba(10, 10, 10, 0.25);
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
      }

      .paragraph {
        color: #cecece;
        padding: 0 10px;
        font-size: 1.8rem;
      }
    }
  }
`;

export default function About() {
  return (
    <Section title="poznajmy się">
      <StyledAbout>
        <p className="about">
          <span>TROJAKwoodcraft </span>
          jest firmą która istnieje krótko na rynku ale z wielkim zapałem,
          zaangażowaniem i świeżą energią zajmujemy się produkcją małej i dużej
          architektury ogrodowej z drewna oraz drewna łączonego z metalem.
        </p>
        <div className="wrapper">
          <div className="card offer">
            <div className="icon">
              <Offer />
            </div>
            <p className="paragraph">
              Produkty jakie między innymi oferujemy to domki narzędziowe, domki
              letniskowe, budy, kurniki, drewutnie, studnie ozdobne, stoły,
              ławki, huśtawki, altanki oraz wiaty. Przeprowadzamy również
              metamorfozy i przebudowy obiektów drewnianych.
            </p>
          </div>
          <div className="card locale">
            <div className="icon">
              <Locale />
            </div>
            <p className="paragraph">
              Stosujemy materiały wysokiej jakości od zaprzyjaźnionych, stałych
              dostawców. Tym samym wspierając lokalny rynek.
            </p>
          </div>
          <div className="card individual">
            <div className="icon">
              <Individual />
            </div>
            <p className="paragraph">
              Do każdego zlecenia podchodzimy indywidualnie, słuchając potrzeb i
              doradzając najlepsze rozwiązania.
            </p>
          </div>
        </div>
      </StyledAbout>
      <Next name="realizacje" />
    </Section>
  );
}
