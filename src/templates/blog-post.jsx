import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Box } from "rebass"
import styled from "@emotion/styled"
import PageTitle from "../components/page-title"
import Wrapper from "../components/Layout/Wrapper"
import Layout from "../components/Layout"
import MarkdownRender from "../components/markdown-render"

const Container = styled.div`
  .embed-container {
    margin-bottom: 20px;
  }
`

export default ({
  data: {
    post: { title, cover, content, coverInArticle },
  },
}) => {
  return (
    <Layout>
      <Wrapper>
        <PageTitle>{title}</PageTitle>
        {cover && coverInArticle && cover.fluid ? (
          <Box mb={4}>
            <Img fluid={cover.fluid} alt={title} />
          </Box>
        ) : null}
        <Container>{content && <MarkdownRender {...content} />}</Container>
      </Wrapper>
    </Layout>
  )
}

export const blogPostQuery = graphql`
  query blogPostQuery($id: String) {
    post: contentfulPost(id: { eq: $id }) {
      ...BlogPost
    }
  }
`
