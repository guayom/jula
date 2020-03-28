import React from "react"
import * as PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Wrapper from "../components/Layout/Wrapper"
import PageTitle from "../components/page-title"

const propTypes = {
  data: PropTypes.object.isRequired,
}

const WorkPage = ({ data }) => {
  const { page } = data
  return (
    <Layout>
      <Wrapper>
        <PageTitle>{page.title}</PageTitle>
        <div
          dangerouslySetInnerHTML={{
            __html: page.description.childMarkdownRemark.html,
          }}
        />
      </Wrapper>
    </Layout>
  )
}

WorkPage.propTypes = propTypes

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
