import React from "react"
import Link from "gatsby-link"
import * as PropTypes from "prop-types"
import Img from "gatsby-image"

const propTypes = {
  data: PropTypes.object.isRequired,
}

class ProjectTemplate extends React.Component {
  render() {
    const project = this.props.data.contentfulProject

    return (
      <div>
        <h1>{project.title}</h1>
      </div>
    )
  }
}

ProjectTemplate.propTypes = propTypes

export default ProjectTemplate

export const projectQuery = graphql`
  query projectQuery($id: String!) {
    contentfulProject(id: { eq: $id }) {
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