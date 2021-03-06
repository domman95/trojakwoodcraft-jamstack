import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

export default function SEO({ title }) {
  const { site } = useStaticQuery(query);

  const { defaultTitle, titleTemplate, description } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
  };

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        rel="stylesheet preload prefetch"
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap"
        as="style"
        crossorigin=""
      />
      <meta name="description" content={description} />
    </Helmet>
  );
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        description
      }
    }
  }
`;

SEO.propTypes = {
  title: PropTypes.string,
};

SEO.defaultProps = {
  title: null,
};
