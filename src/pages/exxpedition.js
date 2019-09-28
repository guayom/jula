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

class IndexPage extends React.Component {
  render() {
    const { page, logo } = this.props.data;

    return (
      <Layout>
        <ContentBlocks contentBlocks={page.contentBlocks} />
        {page.description && (
          <Wrapper>
            <Flex
              pt={[3, 3, 3, 4]}
              pb={5}
              flexWrap={["wrap", "wrap", "wrap", "nowrap"]}
              mx={-3}
            >
              <Flex
                width={[1, 1, 1, 1 / 4]}
                height="200px"
                bg="primary"
                justifyContent="center"
                mx={3}
                mb={3}
              >
                <img src={logo.file.url} alt={logo.title} />
              </Flex>
              <Box
                width={[1, 1, 1, 3 / 4]}
                mx={3}
                dangerouslySetInnerHTML={{
                  __html: page.description.childMarkdownRemark.html
                }}
              />
            </Flex>
          </Wrapper>
        )}
      </Layout>
    );
  }
}

IndexPage.propTypes = propTypes;

export default IndexPage;

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
    logo: contentfulAsset(title: { eq: "Exxpedition Logo" }) {
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
`;
