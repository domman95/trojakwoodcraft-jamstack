import React from 'react';
import styled from 'styled-components';
import Main from '../components/main';
import SEO from '../components/SEO';
import Section from '../components/section';
import { Link } from 'gatsby';
import Arrow from '../assets/arrow';
import Button from '../components/button';
import { graphql } from 'gatsby';

const Container = styled.div`
  .back {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .arrow {
      display: flex;
      width: 28px;
      height: 28px;
      object-fit: cover;
      transform: rotate(90deg);
      transition: transform 0.3s linear;
    }

    &:hover .arrow {
      transform: rotate(90deg) translateY(5px);
      fill: black;
    }
  }
`;

const StyledRealizations = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(300px, 320px));
  margin: 20px 0;
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

    &:nth-child(even) {
      direction: rtl;

      .mainInfo__content {
        direction: ltr;
      }
    }
  }
`;

export default function Realizations({ data }) {
  const realizations = data.allDatoCmsRealization.nodes;

  return (
    <>
      <SEO title="Realizacje" />
      <Main>
        <Section title="Realizacje">
          <Container>
            <Link to="/" className="back">
              <div className="arrow">
                <Arrow />
              </div>
              <p className="text">powrót na stronę główną</p>
            </Link>
            {realizations.map((item) => (
              <StyledRealizations className="realization" key={item.id}>
                <div className="mainImg">
                  <img src={item.images[0].url} alt={item.images[0].alt} />
                </div>
                <div className="mainInfo">
                  <h3 className="mainInfo__title">{item.title}</h3>
                  <p className="mainInfo__content">{item.content}</p>
                  <Button primary slug={item.slug}>
                    zobacz więcej
                  </Button>
                </div>
              </StyledRealizations>
            ))}
          </Container>
        </Section>
      </Main>
    </>
  );
}

export const query = graphql`
  query realization {
    allDatoCmsRealization(
      sort: { fields: meta___firstPublishedAt, order: DESC }
    ) {
      nodes {
        id
        meta {
          publishedAt
        }
        images {
          title
          url
          alt
        }
        slug
        title
        content
      }
    }
  }
`;
