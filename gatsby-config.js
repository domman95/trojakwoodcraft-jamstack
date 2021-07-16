require('dotenv').config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: 'TROJAKwoodcraft',
    titleTemplate: '%s · TROJAKwoodcraft',
    description:
      'Trojakwoodcraft jest firmą która istnieje krótko na rynku ale z wielkim zapałem zaangażowaniem i świeżą energią zajmujemy się produkcją małej i dużej architektury ogrodowej z drewna oraz drewna łączonego z metalem.',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'babel-plugin-styled-components',
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_CMS_API,
        preview: false,
        disableLiveReload: false,
      },
    },
  ],
};
