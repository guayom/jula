import React from "react";
import * as PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Wrapper from "../components/Layout/Wrapper";
import { Box } from "rebass";

const propTypes = {
  data: PropTypes.object.isRequired
};

const WorkPage = ({ data }) => {
  const { page } = data;
  return (
    <Layout>
      <Wrapper>
        <Box mt={4}>
          <h1>{page.title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: page.description.childMarkdownRemark.html
            }}
          />
        </Box>
      </Wrapper>
    </Layout>
  );
};

WorkPage.propTypes = propTypes;

export default WorkPage;

export const workQuery = graphql`
  query workQuery {
    page: contentfulPage(slug: { eq: "work" }) {
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
