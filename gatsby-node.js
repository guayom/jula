const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(
      `
        {
            allContentfulPage(filter: { node_locale: { eq: "en" } }){
                edges{
                    node{
                        id
                        title
                        slug
                    }
                }
            }
        }
      `
    )
      .then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        _.each(result.data.allContentfulPage.edges, edge => {
          const pageTemplate = edge.node.slug === "home" || edge.node.slug === "work" ? path.resolve(`./src/templates/${edge.node.slug}.js`) : path.resolve(`./src/templates/page.js`)
          createPage({
            path: edge.node.slug === "home" ? "/" : `/${edge.node.slug}/`,
            component: slash(pageTemplate),
            context: {
              id: edge.node.id,
            },
          })
        })
      })
      .then(() => {
        graphql(
          `
            {
              allContentfulProjectCategory(filter: { node_locale: { eq: "en" } }) {
                edges {
                  node {
                    id
                    title
                    slug
                  }
                }
              }
              allContentfulProject(filter: { node_locale: { eq: "en" } }) {
                edges {
                  node {
                    id
                    title
                    slug
                  }
                }
              }
            }
          `
        ).then(result => {
          if (result.errors) {
            reject(result.errors)
          }
          const categoryTemplate = path.resolve(`./src/templates/category.js`)
          _.each(result.data.allContentfulProjectCategory.edges, edge => {
            createPage({
              path: `/${edge.node.slug}/`,
              component: slash(categoryTemplate),
              context: {
                id: edge.node.id,
              },
            })
          })
          const projectTemplate = path.resolve(`./src/templates/project.js`)
          _.each(result.data.allContentfulProject.edges, edge => {
            createPage({
              path: `/work/${edge.node.slug}/`,
              component: slash(projectTemplate),
              context: {
                id: edge.node.id,
              },
            })
          })

          resolve()
        })
      })
  })
}