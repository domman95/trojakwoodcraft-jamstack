import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Section from '../components/section';
import Button from '../components/button';
import sortByNewest from '../utils/sortByPublishAt';
import Img from 'gatsby-image';

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
    background: rgba(33, 33, 33, 0.5);
    padding: 20px;
    backdrop-filter: blur(5px);

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

export default function Realizations({ data }) {
  const [sortedRealization, setSortedRealization] = useState(null);

  useEffect(() => {
    const newest = sortByNewest(data);
    const sliceFirstThree = newest.slice(0, 3);
    setSortedRealization(sliceFirstThree);
  }, [data]);

  return (
    <Section title="realizacje" nextName="kontakt">
      {sortedRealization &&
        sortedRealization.map((item) => (
          <StyledRealizations className="realization" key={item.id}>
            <div className="mainImg">
              <Img
                fluid={item.images[0].fluid}
                style={{ height: '100%', width: '100%' }}
                imgStyle={{ objectFit: 'cover' }}
                alt={item.images[0].title}
              />
            </div>
            <div className="mainInfo">
              <h3 className="mainInfo__title">{item.title}</h3>
              <p className="mainInfo__content">{item.content}</p>
              <Button primary slug={item.slug}>
                zobacz wi??cej
              </Button>
            </div>
          </StyledRealizations>
        ))}
    </Section>
  );
}
