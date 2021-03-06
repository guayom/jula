import React from "react"
import { graphql } from "gatsby"
import { Box, Flex } from "rebass"
import Layout from "../components/Layout"
import ContentBlocks from "../components/ContentBlocks"
import Wrapper from "../components/Layout/Wrapper"
import PageTitle from "../components/page-title"
import MarkdownRender from "../components/markdown-render"

const AboutPage = ({ data }) => {
  const { page } = data
  return (
    <Layout>
      <Wrapper>
        <PageTitle>About me</PageTitle>
        <Flex
          flexWrap={["wrap", "wrap", "wrap", "nowrap"]}
          mx={[0, 0, 0, -3]}
          my={4}
        >
          <Box mb={4} mx={[0, 0, 0, 3]} width={[1, 1, 1, 2 / 3]}>
            <MarkdownRender {...page.description} />
          </Box>
          <Box width={[1, 1, 1, 1 / 3]} mx={[0, 0, 0, 3]}>
            <ContentBlocks contentBlocks={page.contentBlocks} />
          </Box>
        </Flex>
      </Wrapper>
    </Layout>
  )
}

export default AboutPage

export const aboutQuery = graphql`
  query aboutQuery {
    page: contentfulPage(slug: { eq: "about-me" }) {
      id
      title
      description {
        childMarkdownRemark {
          html
        }
      }
      contentBlocks {
        ... on ContentfulGallery {
          id
          images {
            id
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
