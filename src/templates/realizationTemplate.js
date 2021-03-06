import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Main from '../components/main';
import SEO from '../components/SEO';
import Section from '../components/section';
import { Link } from 'gatsby';
import Arrow from '../assets/arrow';
import { useStaticQuery, graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import Img from 'gatsby-image';
import { Image } from 'react-datocms';

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

  .realizationDescription {
    p {
      font-family: 'Montserrat', sans-serif;
      font-size: 16px;
      margin: 10px 0;
    }

    ul {
      padding: 10px 30px;
    }

    a {
      text-decoration: underline;
    }
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

    &.hide {
      opacity: 0.3;
      pointer-events: none;
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
  const [pageData, setPageData] = useState(null);
  const [active, setActive] = useState(null);
  const { allDatoCmsRealization } = useStaticQuery(graphql`
    query {
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
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
          slug
          title
          content
        }
      }
    }
  `);

  const { id: activeId, images, title, content } = pageContext;
  const data = allDatoCmsRealization.nodes;

  useEffect(() => {
    const index = data.findIndex(({ id }) => {
      return id === activeId;
    });

    const pageContextData = data.filter(({ id }) => id === activeId);
    setPageData(...pageContextData);

    setActive(index);
  }, [data]);

  return (
    <div animation={true}>
      <SEO title={title} />
      <Main>
        <Section title={title}>
          <Container>
            <Link to="/realizacje" className="back">
              <div className="arrow">
                <Arrow />
              </div>
              <p className="text">powr??t do realizacji</p>
            </Link>
            <Realization>
              <h2 className="realizationTitle">{title}</h2>
              <ReactMarkdown className="realizationDescription">
                {content}
              </ReactMarkdown>
              <div className="realizationGallery">
                {pageData &&
                  pageData.images.map(({ title, url, fluid }) => (
                    <div className="image" key={url}>
                      <Img
                        fluid={fluid}
                        style={{ height: '100%', width: '100%' }}
                        imgStyle={{ objectFit: 'cover' }}
                        alt={title}
                      />
                    </div>
                  ))}
              </div>
            </Realization>
            {active !== null && (
              <NextPrevContainer>
                <Link
                  to={`/realizacje/${
                    active === 0 ? '' : data[active - 1].slug
                  }`}
                  className={`link prev ${active === 0 && 'hide'}`}>
                  <div className="arrow prevArrow">
                    <Arrow />
                  </div>
                  <p className="text">zobacz poprzedni?? realizacj?? </p>
                </Link>
                <Link
                  to={`/realizacje/${
                    active === data.length - 1 ? '' : data[active + 1].slug
                  }`}
                  className={`link next ${
                    active === data.length - 1 && 'hide'
                  }`}>
                  <div className="arrow nextArrow">
                    <Arrow />
                  </div>
                  <p className="text">zobacz nastepn?? realizacj?? </p>
                </Link>
              </NextPrevContainer>
            )}
          </Container>
        </Section>
      </Main>
    </div>
  );
}
