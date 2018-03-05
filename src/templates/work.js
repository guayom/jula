import React from 'react'
import Link from 'gatsby-link'
import * as PropTypes from "prop-types"

const propTypes = {
  data: PropTypes.object.isRequired,
}

class WorkPage extends React.Component {
  render() {
    const page = this.props.data.contentfulPage
    const projectCategories = this.props.data.allContentfulProjectCategory.edges
    const projects = this.props.data.allContentfulProject.edges
    const contextOd = this.props.pathContext

    return (
      <div>
        <h1>{page.title}</h1>
        <div
            dangerouslySetInnerHTML={{
              __html: page.description.childMarkdownRemark.html,
            }}
          />
        <ul>
            {projectCategories.map(projectCategory => (
                <li key={projectCategory.node.id}>
                    <h3>{projectCategory.node.title}</h3>
                    <div
                        dangerouslySetInnerHTML={{
                        __html: projectCategory.node.description.childMarkdownRemark.html,
                        }}
                    />
                    <br/>
                    <h4>Projects:</h4>
                    <ul>
                        {projects.filter(p => p.node.projectCategory.id === projectCategory.node.id).slice(0, 3).map(project => (
                            <li>
                                <Link to={`/work/${project.node.slug}/`}>{project.node.title}</Link>
                            </li>
                        ))}
                    </ul>
                    <Link to={`/${projectCategory.node.slug}/`}>View all projects</Link>
                    <br/>
                    <br/>
                    <hr/>
                </li>
            ))}
        </ul>
      </div>
    )
  }
}

WorkPage.propTypes = propTypes

export default WorkPage

export const workQuery = graphql`
  query workQuery($id: String!) {
    contentfulPage(id: { eq: $id }) {
        id
        title
        description {
          childMarkdownRemark {
            html
          }
        }
    }
    allContentfulProjectCategory(filter: {node_locale: {eq: "en"}}){
        edges{
            node{
                id
                title
                slug
                description{
                    childMarkdownRemark{
                    html
                    }
                }
            }
        }
    }
    allContentfulProject(filter: {node_locale: {eq: "en"}}){
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