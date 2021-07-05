require('dotenv').config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: 'TROJAKwoodcraft',
    titleTemplate: '%s · TROJAKwoodcraft',
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
