import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import Main from '../components/main';
import SEO from '../components/SEO';
import Section from '../components/section';
import { Link } from 'gatsby';
import Arrow from '../assets/arrow';

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

const Realization = styled.article`
  margin-top: 40px;

  .realizationTitle {
    margin: 20px 0;
  }

  .realizationGallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
    justify-content: center;
    gap: 20px;
    margin: 20px 0;

    .image {
      display: flex;
      object-fit: cover;
      width: 100%;
      transition: all 0.3s cubic-bezier(1, 0, 0, 1);

      &:nth-child(even):hover {
        transform: scale(1.05) skewX(1deg);
        box-shadow: -10px 10px 4px rgba(0, 0, 0, 0.25);
      }

      &:nth-child(odd):hover {
        transform: scale(1.05) skewX(-1deg);
        box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.25);
      }

      img {
        width: 100%;
        height: auto;
      }
    }
  }
`;

const NextPrevContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .link {
    display: flex;
    align-items: center;

    &.next {
      flex-direction: row-reverse;

      .arrow {
        transform: rotate(-90deg);
      }
    }

    .arrow {
      display: flex;
      width: 28px;
      height: 28px;
      object-fit: cover;
      transform: rotate(90deg);
      transition: transform 0.3s linear;
    }

    &:hover .prevArrow {
      transform: rotate(90deg) translateY(5px);
    }

    &:hover .nextArrow {
      transform: rotate(-90deg) translateY(5px);
    }
  }
`;

export default function Realizations({ pageContext }) {
  const { images, title, content } = pageContext;
  return (
    <Layout animation={true}>
      <SEO title={title} />
      <Main>
        <Section title={title}>
          <Container>
            <Link to="/" className="back">
              <div className="arrow">
                <Arrow />
              </div>
              <p className="text">powrót na stronę główną</p>
            </Link>
            <Realization>
              <h3 className="realizationTitle">{title}</h3>
              <p className="realizationDescription">{content}</p>
              <div className="realizationGallery">
                {images.map(({ title, alt, url }) => (
                  <div className="image" key={title}>
                    <img src={url} alt={alt} />
                  </div>
                ))}
              </div>
            </Realization>
            <NextPrevContainer>
              <Link to="/" className="link prev">
                <div className="arrow prevArrow">
                  <Arrow />
                </div>
                <p className="text">zobacz poprzednią realizację </p>
              </Link>
              <Link to="/" className="link next">
                <div className="arrow nextArrow">
                  <Arrow />
                </div>
                <p className="text">zobacz nastepną realizację </p>
              </Link>
            </NextPrevContainer>
          </Container>
        </Section>
      </Main>
    </Layout>
  );
}
