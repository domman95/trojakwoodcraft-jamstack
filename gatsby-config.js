module.exports = {
  siteMetadata: {
    title: 'TROJAKwoodcraft',
    titleTemplate: '%s · TROJAKwoodcraft',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `1fece8073600a119a2493a9b195bcd`,
        preview: false,
        disableLiveReload: false,
      },
    },
  ],
};
