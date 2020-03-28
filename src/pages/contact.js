import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Wrapper from "../components/Layout/Wrapper"
import MarkdownRender from "../components/markdown-render"

const PageTemplate = ({ data: { page } }) => {
  return (
    <Layout>
      <Wrapper>
        <h1>{page.title}</h1>
        <MarkdownRender {...page.description} />
      </Wrapper>
    </Layout>
  )
}

export default PageTemplate

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
`
