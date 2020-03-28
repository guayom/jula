async function createBasicPages(graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      posts: allContentfulPost(filter: { node_locale: { eq: "en" } }) {
        edges {
          node {
            id
            slug
            title
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const postEdges = (result.data.posts || {}).edges || [];

  postEdges.forEach(post => {
    const { id, title, slug } = post.node;
    const path = `/blog/${slug}`;

    reporter.info(`Creating blog post page: ${title}`);

    createPage({
      path,
      component: require.resolve("./src/templates/blog-post.jsx"),
      context: { id }
    });
  });
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createBasicPages(graphql, actions, reporter);
};
