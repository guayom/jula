import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import {
  SummaryContainer,
  SummaryTitle,
  SummaryPositioner,
  SummaryOverlay,
  SummaryButton,
} from "."

export default ({ title, slug, cover }) => {
  const url = `/blog/${slug}`
  return (
    <Link to={url}>
      <SummaryContainer>
        <SummaryPositioner zIndex={0}>
          {cover.file.contentType === "video/mp4" ? (
            <>VIDEOOOOOO</>
          ) : (
            <Img fluid={cover.fluid} alt={title} />
          )}
        </SummaryPositioner>
        <SummaryPositioner zIndex={1}>
          <SummaryOverlay />
        </SummaryPositioner>
        <SummaryPositioner zIndex={2}>
          <SummaryTitle>{title}</SummaryTitle>
          <SummaryButton>Read blogpost</SummaryButton>
        </SummaryPositioner>
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
