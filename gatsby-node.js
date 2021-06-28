const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const realizationTemplate = path.resolve(
    `src/templates/realizationTemplate.js`
  );
  const result = await graphql(`
    query realization {
      allDatoCmsRealization(sort: { fields: meta___firstPublishedAt }) {
        nodes {
          id
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
  `);

  result.data.allDatoCmsRealization.nodes.forEach((node) => {
    createPage({
      path: `realizacje/${node.slug}`,
      component: realizationTemplate,
      context: node,
    });
  });
};
