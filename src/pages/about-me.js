import React from "react";
import * as PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import ContentBlocks from "../components/ContentBlocks";
import Wrapper from "../components/Layout/Wrapper";
import { Box, Flex } from "rebass";

const propTypes = {
  data: PropTypes.object.isRequired
};

const AboutPage = ({ data }) => {
  const { page } = data;
  return (
    <Layout>
      <Wrapper>
        <Flex flexWrap={["wrap", "wrap", "wrap", "nowrap"]} mx={-3} my={4}>
          <Box
            order={1}
            width={[1, 1, 1, 1 / 4]}
            mx={3}
          >
            <ContentBlocks contentBlocks={page.contentBlocks} />
          </Box>
          <Box
            order={[-1, -1, -1, 2]}
            mb={4}
            mx={3}
            width={[1, 1, 1, 3 / 4]}
          >
            <h1>{page.title}</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: page.description.childMarkdownRemark.html
              }}
            />
          </Box>
        </Flex>
      </Wrapper>
    </Layout>
  );
};

AboutPage.propTypes = propTypes;

export default AboutPage;

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
`;
