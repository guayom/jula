import React from "react";
import * as PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

const propTypes = {
  data: PropTypes.object.isRequired
};

class IndexPage extends React.Component {
  render() {
    const {page} = this.props.data;

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
                   fluid {
                     ...GatsbyContentfulFluid
                   }
                 }
               }
             }
           }
         }
       `;
