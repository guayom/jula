import React from "react"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import PageTitle from "../components/page-title"
import Wrapper from "../components/Layout/Wrapper"
import Layout from "../components/Layout"

const Bold = ({ children }) => <span className="bold">{children}</span>
const Text = ({ children }) => <p className="align-center">{children}</p>

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
  },
}

export default ({
  data: {
    post: { title, body },
  },
}) => {
  return (
    <Layout>
      <Wrapper>
        <PageTitle>{title}</PageTitle>
        {documentToReactComponents(body.json, options)}
      </Wrapper>
    </Layout>
  )
}

export const blogPostQuery = graphql`
  query blogPostQuery($slug: String) {
    post: contentfulPost(slug: { eq: $slug }) {
      title
      body {
        json
      }
    }
  }
`
