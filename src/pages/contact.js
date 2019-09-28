import React from "react";
import * as PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Wrapper from "../components/Layout/Wrapper";

const propTypes = {
  data: PropTypes.object.isRequired
};

class PageTemplate extends React.Component {
  render() {
    const { page } = this.props.data;

    return (
      <Layout>
        <Wrapper>
          <h1>{page.title}</h1>
          <div
          dangerouslySetInnerHTML={{
            __html: page.description.childMarkdownRemark.html
          }}
        />
        </Wrapper>
      </Layout>
    );
  }
}

PageTemplate.propTypes = propTypes;

export default PageTemplate;

export const pageQuery = graphql`
  query contactQuery {
    page: contentfulPage(slug: { eq: "contact" }) {
      id
      title
      slug
      description {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
