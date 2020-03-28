import React from "react"
import Img from "gatsby-image"
import { Box, Flex, Text } from "rebass"
import Wrapper from "../../Layout/Wrapper"
import MarkdownRender from "../../markdown-render"

export default ({ title, image, description }) => (
  <Flex
    alignItems="center"
    height={["300px", "300px", "600px"]}
    sx={{ position: `relative`, overflow: "hidden" }}
  >
    <Box
      width="100%"
      height="100%"
      sx={{ position: `absolute`, top: 0, left: 0, zIndex: -1 }}
    >
      <Img
        fluid={image.fluid}
        alt={title}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />
    </Box>
    <Wrapper>
      {title !== "eXXpedition" && (
        <Text as="h2" color="white" mb={3}>
          {title}
        </Text>
      )}
      {description && <MarkdownRender {...description} />}
    </Wrapper>
  </Flex>
)
