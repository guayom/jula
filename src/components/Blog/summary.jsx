import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

export default ({ title, slug, cover }) => {
  const url = `/blog/${slug}`
  return (
    <h2>
      <Link to={url}>{title}</Link>
      {cover.file.contentType === "video/mp4" ? (
        <>VIDEOOOOOO</>
      ) : (
        <Img fluid={cover.fluid} alt={title} />
      )}
    </h2>
  )
}

export const query = graphql`
  fragment BlogPost on ContentfulPost {
    id
    title
    tags
    slug
    cover {
      file {
        contentType
      }
      fluid {
        ...GatsbyContentfulFluid
      }
    }
  }
`
