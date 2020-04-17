import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import {
  SummaryContainer,
  // SummaryTitle,
  // SummaryPositioner,
  // SummaryOverlay,
} from "../Blog"

export default ({ title, link, cover }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <SummaryContainer>
        <Img fluid={cover.fluid} alt={title} />
      </SummaryContainer>
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
