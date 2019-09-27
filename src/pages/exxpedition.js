import React from "react";
import * as PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

const propTypes = {
  data: PropTypes.object.isRequired
};

class IndexPage extends React.Component {
  render() {
    const { page } = this.props.data;

    return (
      <Layout>
        <h1>{page.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: page.description.childMarkdownRemark.html
          }}
        />
        <pre>{JSON.stringify(page, null, 2)}</pre>
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
          description {
            childMarkdownRemark {
              html
            }
          }
          image {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`;
