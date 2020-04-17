import React from "react"
import { graphql } from "gatsby"
import { Box } from "rebass"
import Layout from "../components/Layout"
import ContentBlocks from "../components/ContentBlocks"
import Wrapper from "../components/Layout/Wrapper"
import MarkdownRender from "../components/markdown-render"
import PostsAndLinks from "../components/exxpedition/posts-and-links"

const IndexPage = ({ data: { page, logo } }) => {
  return (
    <Layout transparent>
      <ContentBlocks contentBlocks={page.contentBlocks} />
      <Box my="20px">
        <Wrapper>
          {page.description && <MarkdownRender {...page.description} />}
          <PostsAndLinks />
        </Wrapper>
      </Box>
    </Layout>
  )
}

export default IndexPage

export const homeQuery = graphql`
  query exxpeditionQuery {
    page: contentfulPage(slug: { eq: "exxpedition" }) {
      id
      title
      description {
        childMarkdownRemark {
          html
        }
      }
      contentBlocks {
        ... on ContentfulBanner {
          id
          title
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
    logo: contentfulAsset(title: { eq: "Crew member logo" }) {
      id
      title
      file {
        url
      }
      fluid {
        ...GatsbyContentfulFluid
      }
      fixed(width: 200) {
        ...GatsbyContentfulFixed
      }
    }
  }
`
