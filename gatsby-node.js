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
            allContentfulPage{
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
        const pageTemplate = path.resolve(`./src/templates/page.js`)
        const homeTemplate = path.resolve(`./src/templates/home.js`)
        _.each(result.data.allContentfulPage.edges, edge => {
          createPage({
            path: edge.node.slug === "home" ? "/" : `/${edge.node.slug}/`,
            component: edge.node.slug === "home" ? slash(homeTemplate) : slash(pageTemplate),
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
                allContentfulProjectCategory {
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

          // Create Category pages
          const categoryTemplate = path.resolve(`./src/templates/category.js`)
          // We want to create a detailed page for each
          // category node. We'll just use the Contentful id for the slug.
          _.each(result.data.allContentfulProjectCategory.edges, edge => {
            createPage({
              path: `/${edge.node.slug}/`,
              component: slash(categoryTemplate),
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