import React from "react"
import { Link, graphql } from "gatsby"
import SummaryItem from "./summary-item"

export default ({ title, slug, cover }) => {
  const url = `/blog/${slug}`
  return (
    <Link to={url}>
      <SummaryItem cover={cover} title={title} />
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
