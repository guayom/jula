import React from "react"
import { Box, Flex } from "rebass"
import Nav from "./Nav"
import Wrapper from "../Layout/Wrapper"

export default () => (
  <Box
    bg="daintree"
    py={3}
    sx={{
      position: "fixed",
      bottom: 0,
      left: 0,
      display: ["flex", "flex", "flex", "none"],
    }}
    width="100%"
  >
    <Wrapper>
      <Flex flexDirection="row">
        <Nav />
      </Flex>
    </Wrapper>
  </Box>
)
