import React from 'react';
import styled from 'styled-components';
import Section from '../components/section';
import Pic from '../assets/pic.png';
import Button from '../components/button';

const StyledRealizations = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(300px, 320px));
  margin: 20px 10px;
  box-shadow: -10px 10px 4px rgba(0, 0, 0, 0.25);

  .mainImg img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .mainInfo {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #212121;
    padding: 20px;

    .mainInfo__title {
      text-transform: uppercase;
      font-size: 2rem;
    }

    .mainInfo__content {
      margin: 20px 0;
      font-size: 1.8rem;
      justify-items: flex-start;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
    }
  }

  @media (min-width: 720px) {
    .mainInfo__title {
      align-self: flex-end;
    }

    &:nth-child(2) {
      direction: rtl;

      .mainInfo__content {
        direction: ltr;
      }
    }
  }
`;

export default function Realizations() {
  return (
    <Section title="realizacje" nextName="kontakt">
      <StyledRealizations className="realization">
        <div className="mainImg">
          <img src={Pic} alt="" />
        </div>
        <div className="mainInfo">
          <h3 className="mainInfo__title">title</h3>
          <p className="mainInfo__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim praesent elementum facilisis
            leo, vel
          </p>
          <Button primary>zobacz więcej</Button>
        </div>
      </StyledRealizations>
      <StyledRealizations className="realization">
        <div className="mainImg">
          <img src={Pic} alt="" />
        </div>
        <div className="mainInfo">
          <h3 className="mainInfo__title">title</h3>
          <p className="mainInfo__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim praesent elementum facilisis
            leo, velpurus sit amet luctus venenatis, lectus magna fringilla
            urna, porttitor rhoncus dolor purus non enim praesent elementum
            facilisis leo, vel
          </p>
          <Button primary>zobacz więcej</Button>
        </div>
      </StyledRealizations>
      <StyledRealizations className="realization">
        <div className="mainImg">
          <img src={Pic} alt="" />
        </div>
        <div className="mainInfo">
          <h3 className="mainInfo__title">title</h3>
          <p className="mainInfo__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim praesent elementum facilisis
            leo, vel Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
            aliquam, purus sit amet luctus venenatis, lectus magna fringilla
            urna, porttitor rhoncus dolor purus non enim praesent elementum
            facilisis leo, vel
          </p>
          <Button primary>zobacz więcej</Button>
        </div>
      </StyledRealizations>
    </Section>
  );
}
