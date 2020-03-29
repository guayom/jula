import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default ({ title, link, cover }) => {
  return (
    <h2>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {title}
      </a>
      <Img fluid={cover.fluid} alt={title} />
    </h2>
  )
}

export const query = graphql`
  fragment Link on ContentfulLink {
    id
    title
    tags
    link
    cover {
      fluid {
        ...GatsbyContentfulFluid
      }
    }
  }
`
