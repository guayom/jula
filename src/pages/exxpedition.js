import React from "react"
import { graphql } from "gatsby"
import { Box, Flex } from "rebass"
import Layout from "../components/Layout"
import ContentBlocks from "../components/ContentBlocks"
import Wrapper from "../components/Layout/Wrapper"
import DonateButton from "../components/Buttons/DonateButton"

const IndexPage = ({ data: { page, logo } }) => {
  return (
    <Layout transparent>
      <ContentBlocks contentBlocks={page.contentBlocks} />
      {page.description && (
        <Wrapper>
          <Flex
            pt={[3, 3, 3, 4]}
            pb={5}
            flexWrap={["wrap", "wrap", "wrap", "nowrap"]}
            mx={[0, 0, 0, -3]}
          >
            <Flex
              width={[1, 1, 1, 1 / 4]}
              mt={[4, 4, 4, 0]}
              mb={[4, 4, 4, 3]}
              flexDirection="column"
              sx={{ textAlign: `center` }}
            >
              <Flex mb={[3, 3, 3, 4]} justifyContent="center" mx={3}>
                <img
                  src={logo.file.url}
                  alt={logo.title}
                  style={{ maxWidth: `150px`, margin: `0 auto` }}
                />
              </Flex>
              <Box>
                <DonateButton />
              </Box>
            </Flex>

            <Box width={[1, 1, 1, 3 / 4]} mx={3}>
              <Box
                dangerouslySetInnerHTML={{
                  __html: page.description.childMarkdownRemark.html,
                }}
              />
              <DonateButton />
            </Box>
          </Flex>
        </Wrapper>
      )}
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
