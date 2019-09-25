import React from "react";
import * as PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

const propTypes = {
  data: PropTypes.object.isRequired
};

class IndexPage extends React.Component {
  render() {
    const page = this.props.data.contentfulPage;

    return (
      <Layout>
        <h1>{page.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: page.description.childMarkdownRemark.html
          }}
        />
      </Layout>
    );
  }
}

IndexPage.propTypes = propTypes;

export default IndexPage;

export const homeQuery = graphql`
  query homeQuery($id: String!) {
    contentfulPage(id: { eq: $id }) {
      id
      title
      description {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
