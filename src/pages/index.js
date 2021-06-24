import React from 'react';
import SEO from '../components/SEO';
import Layout from '../components/layout';
import Header from '../components/header';
import Main from '../components/main';
import About from '../templates/about';
import Contact from '../templates/contact';
import Realizations from '../templates/realizations';
import { graphql } from 'gatsby';

export default function HomePage({ data }) {
  const realizations = data.allDatoCmsRealization.nodes;

  return (
    <Layout animation={false}>
      <SEO title="Strona Główna" />
      <Header />
      <Main>
        <About />
        <Realizations data={realizations} />
        <Contact />
      </Main>
    </Layout>
  );
}

export const query = graphql`
  query {
    allDatoCmsRealization {
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
