// async function createBasicPages(graphql, actions, reporter) {
//   const { createPage } = actions;
//   const result = await graphql(`
//     {
//       allContentfulPage(filter: { node_locale: { eq: "en" } }) {
//         edges {
//           node {
//             id
//             slug
//             title
//           }
//         }
//       }
//     }
//   `);

//   if (result.errors) throw result.errors;

//   const pageEdges = (result.data.allContentfulPage || {}).edges || [];

//   pageEdges.forEach(edge => {
//     const { id, title, slug } = edge.node;
//     const finalSlug = slug === "home" ? "/" : `/${slug}/`;
//     const path = finalSlug;

//     reporter.info(`Creating blog post page: ${title}`);

//     createPage({
//       path,
//       component: require.resolve("./src/templates/home.js"),
//       context: { id }
//     });
//   });
// }

// exports.createPages = async ({ graphql, actions, reporter }) => {
//   await createBasicPages(graphql, actions, reporter);
// };
