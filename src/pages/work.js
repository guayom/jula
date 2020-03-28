import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Wrapper from "../components/Layout/Wrapper"
import PageTitle from "../components/page-title"
import MarkdownRender from "../components/markdown-render"

const WorkPage = ({ data: { page } }) => {
  return (
    <Layout>
      <Wrapper>
        <PageTitle>{page.title}</PageTitle>
        <MarkdownRender {...page.description} />
      </Wrapper>
    </Layout>
  )
}

export default WorkPage

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
`
