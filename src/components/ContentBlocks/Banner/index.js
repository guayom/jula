import React from "react"
import Img from "gatsby-image"

export default ({ title, id, image, description }) => (
  <div>
    <Img fluid={image.fluid} alt={title} />
    <h2>{title}</h2>
    <div
      dangerouslySetInnerHTML={{ __html: description.childMarkdownRemark.html }} />
  </div>
);