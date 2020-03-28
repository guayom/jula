import React from 'react';
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Wrapper from "../components/Layout/Wrapper";
import Summary from "../components/Blog/summary";

export default ({ data: { posts }}) => {
    return (
        <Layout>
            <Wrapper>
                <h1>Blog</h1>
                { posts.edges.map(({node}) => <Summary key={node.id} {...node} />)}
            </Wrapper>
        </Layout>
    );
};

export const blogIndexQuery = graphql`
  query blogIndexQuery {
    posts: allContentfulPost(filter: {node_locale: {eq: "en"}}) {
        edges {
            node {
                id
                title
                tags
                slug
                node_locale
            }
        }
      }
    }

`;
