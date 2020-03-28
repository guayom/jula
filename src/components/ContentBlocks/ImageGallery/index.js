import React from "react"
import Img from "gatsby-image"
import { Box } from "rebass"

export default ({ images }) => (
  <div>
    {images.map((image) => (
      <Box key={image.id} mb={2}>
        <Img fluid={image.fluid} />
      </Box>
    ))}
  </div>
)
