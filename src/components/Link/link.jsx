import React from "react"
import { graphql } from "gatsby"
import { SummaryItem } from "../Blog"

export default ({ title, link, cover }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <SummaryItem cover={cover} title={title} />
    </a>
  )
}

export const query = graphql`
  fragment Link on ContentfulLink {
    id
    title
    tags
    link
    createdAt
    cover {
      fluid {
        ...GatsbyContentfulFluid
      }
    }
  }
`
