import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Wrapper from "../components/Layout/Wrapper"
import Summary from "../components/Blog/summary"
import PageTitle from "../components/page-title"
import PostsAndLinksGrid from "../components/exxpedition/posts-and-links-grid"

export default ({ data: { posts } }) => {
  return (
    <Layout>
      <Wrapper>
        <PageTitle>Blog</PageTitle>
      </Wrapper>
      <PostsAndLinksGrid>
        {posts.edges.map(({ node }) => (
          <Summary key={node.id} {...node} />
        ))}
      </PostsAndLinksGrid>
    </Layout>
  )
}

export const blogIndexQuery = graphql`
  query blogIndexQuery {
    posts: allContentfulPost(filter: { node_locale: { eq: "en" } }) {
      edges {
        node {
          ...BlogPost
        }
      }
    }
  }
`
