import React from "react";
import * as PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

const propTypes = {
  data: PropTypes.object.isRequired
};

class PageTemplate extends React.Component {
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
        <form
          name="contact"
          data-netlify-honeypot="country"
          method="POST"
          action="/thank-you"
          data-netlify={true}
        >
          <div style={{ display: `none` }}>
            <input name="country" />
            <input type="hidden" name="form-name" value="contact" />
          </div>
          <div>
            <label>Name:</label>
            <br />
            <input type="text" name="name" />
          </div>
          <div>
            <label>Email:</label>
            <br />
            <input type="email" name="email" />
          </div>
          <div>
            <label>Message:</label>
            <br />
            <textarea name="message" />
          </div>
          <div>
            <button type="submit">Send</button>
          </div>
        </form>
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
