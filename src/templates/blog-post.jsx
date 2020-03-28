import React from 'react';
import PageTitle from '../components/page-title'
import Wrapper from "../components/Layout/Wrapper";
import Layout from "../components/Layout";

export default ({ data: {post: { title }} }) => {
    return(
        <Layout>
            <Wrapper>
                <PageTitle>{ title }</PageTitle>
            </Wrapper>
        </Layout>
    );
};

export const blogPostQuery = graphql`
  query blogPostQuery($slug: String) {
    post: contentfulPost(slug: { eq: $slug }) {
      title
    }
  }
`;
