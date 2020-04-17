import React from "react"
import Img from "gatsby-image"
import { Box } from "rebass"
import SummaryContainer from "./summary-container"
import SummaryTitle from "./summary-title"

export default ({ title, cover }) => {
  return (
    <SummaryContainer className="item">
      <Box
        sx={{ position: "relative", overflow: "hidden", pointerEvents: "none" }}
      >
        <Box sx={{ zIndex: -1 }}>
          <Img fluid={cover.fluid} alt={title} />
        </Box>

        <SummaryTitle>{title}</SummaryTitle>
      </Box>
    </SummaryContainer>
  )
}
