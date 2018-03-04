import React from "react"
import Link from "gatsby-link"
import * as PropTypes from "prop-types"
import Img from "gatsby-image"

const propTypes = {
  data: PropTypes.object.isRequired,
}

class categoryTemplate extends React.Component {
  render() {
    const page = this.props.data.contentfulProjectCategory

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

categoryTemplate.propTypes = propTypes

export default categoryTemplate

export const categoryQuery = graphql`
  query categoryQuery($id: String!) {
    contentfulProjectCategory(id: { eq: $id }) {
        id
        title
        slug
        description{
          childMarkdownRemark {
            html
          }
        }
    }
  }
`