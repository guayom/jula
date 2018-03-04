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
    const projects = this.props.data.allContentfulProject.edges

    return (
      <div>
        <h1>{page.title}</h1>
        <div
            dangerouslySetInnerHTML={{
              __html: page.description.childMarkdownRemark.html,
            }}
          />
        <h2>Projects</h2>
        <ul>
          {projects.map(project => (
            <li key={project.node.id}>
              <Link to={`/work/${project.node.slug}`}>{project.node.title}</Link>
            </li>
          ))}
        </ul>
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
      description {
        id
        childMarkdownRemark {
          id
          html
        }
      }
    }
    allContentfulProject(filter: {projectCategory: {id: {eq: $id}}}){
      edges{
        node{
          id
          title
          slug
          projectCategory {
            id
          }
        }
      }
    }
  }
`