import React from "react"
import Img from "gatsby-image"
import { Box, Flex } from "rebass"
import Wrapper from "../../Layout/Wrapper"
import DonateButton from "../../Buttons/DonateButton"
import MarkdownRender from "../../markdown-render"

export default ({ image, body }) => (
  <Wrapper>
    <Flex
      my={[4, 4, 6]}
      mx={[0, 0, 0, -3]}
      flexWrap={["wrap", "wrap", "nowrap"]}
    >
      <Box width={[1, 1, 1 / 4]} mx={[0, 0, 0, 3]} mb={[4, 4, 0]}>
        <Img
          fluid={image.fluid}
          style={{ maxWidth: `150px`, margin: `0 auto` }}
        />
      </Box>
      <Box width={[1, 1, 3 / 4]} mx={[0, 0, 0, 3]}>
        <MarkdownRender {...body} />
        <DonateButton />
      </Box>
    </Flex>
  </Wrapper>
)
