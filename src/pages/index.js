import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import ContentBlocks from "../components/ContentBlocks"

const IndexPage = ({ data: { page } }) => {
  return (
    <Layout transparent>
      <ContentBlocks contentBlocks={page.contentBlocks} />
    </Layout>
  )
}

export default IndexPage

export const homeQuery = graphql`
  query homeQuery {
    page: contentfulPage(slug: { eq: "home" }) {
      id
      title
      description {
        childMarkdownRemark {
          html
        }
      }
      contentBlocks {
        ... on ContentfulFullScreenBanner {
          id
          title
          description {
            childMarkdownRemark {
              html
            }
          }
          image {
            fluid(quality: 100) {
              ...GatsbyContentfulFluid
            }
          }
        }
        ... on ContentfulSmallBanner {
          id
          body {
            childMarkdownRemark {
              html
            }
          }
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
