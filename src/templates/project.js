import React from "react"
import Link from "gatsby-link"
import * as PropTypes from "prop-types"
import Img from "gatsby-image"

const propTypes = {
  data: PropTypes.object.isRequired,
}

function Section({title, content}){
    if (content != null) {
        return (
            <div>
                <h2>{title}</h2>
                <div
                    dangerouslySetInnerHTML={{
                    __html: content,
                    }}
                />
            </div>
        )
    } else {
        return (null)
    }   
}

function Images({images}) {
  if (!images) {
    return <h1>No Images</h1>
  }
  return (
    <div style={{display: `flex`}}>
      {images.map(image =>(
        <div style={{flex:`1 0`}}>
          <Img key={image.id} sizes={image.sizes} />
        </div>
      ))}
    </div>
  )
}

class ProjectTemplate extends React.Component {
  render() {
    const project = this.props.data.contentfulProject
    const description = this.props.data.contentfulProject.description === null ? null : this.props.data.contentfulProject.description.childMarkdownRemark.html
    const objective = this.props.data.contentfulProject.objective === null ? null : this.props.data.contentfulProject.objective.childMarkdownRemark.html
    const solution = this.props.data.contentfulProject.solution === null ? null : this.props.data.contentfulProject.solution.childMarkdownRemark.html
    const credits = this.props.data.contentfulProject.credits === null ? null : this.props.data.contentfulProject.credits.childMarkdownRemark.html
    const client = this.props.data.contentfulProject.client ? this.props.data.contentfulProject.client :  null 
    const year = this.props.data.contentfulProject.year ? this.props.data.contentfulProject.year :  null 
    // The third value is intended to be used as a type, to render a div with html inside or an html element
    const sections = [
        [description, "Description", "html"], 
        [objective, "Objective", "html"],
        [solution, "Solution", "html"],
        [credits, "Credits", "html"],
        [client, "Client", "p"],
        [year, "Year", "p"],
    ] 
    return (
      <div>
        <h1>{project.title}</h1>
        {sections.map(c => (
            <Section title={c[1]} content={c[0]} />
        ))}
        <Images images={project.images}/>
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
        objective {
            childMarkdownRemark {
              html
            }
          }
        solution {
            childMarkdownRemark {
              html
            }
          }
        credits {
            childMarkdownRemark {
              html
            }
          }
        client
        year
        projectCategory{
            title
            slug
        }
        images{
          id
          sizes{
            srcSet
            base64
            aspectRatio
            src
            sizes
          }
        }
        description {
          childMarkdownRemark {
            html
          }
        }
    }
  }
`