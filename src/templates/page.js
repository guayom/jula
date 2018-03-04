import React from "react"
import Link from "gatsby-link"
import * as PropTypes from "prop-types"
import Img from "gatsby-image"

const propTypes = {
  data: PropTypes.object.isRequired,
}

class PageTemplate extends React.Component {
  render() {
    const page = this.props.data.contentfulPage

    return (
      <div>
        <h1>{page.title}</h1>
        <div
            dangerouslySetInnerHTML={{
              __html: page.description.childMarkdownRemark.html,
            }}
          />
      </div>
    )
  }
}

PageTemplate.propTypes = propTypes

export default PageTemplate

export const pageQuery = graphql`
  query pageQuery($id: String!) {
    contentfulPage(id: { eq: $id }) {
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