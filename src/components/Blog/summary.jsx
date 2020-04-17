import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { SummaryContainer } from "."

export default ({ title, slug, cover }) => {
  const url = `/blog/${slug}`
  return (
    <Link to={url}>
      <SummaryContainer>
        <Img fluid={cover.fluid} alt={title} />
      </SummaryContainer>
    </Link>
  )
}

export const query = graphql`
  fragment BlogPost on ContentfulPost {
    id
    title
    tags
    slug
    createdAt
    body {
      json
    }
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
