import React from "react"
import { Box, Text } from "rebass"

export default ({ children }) => {
  return (
    <Box px="5" pb="6">
      <Box
        bg="white"
        sx={{ display: "inline-block", borderRadius: "5px" }}
        px={4}
        py={2}
        color="black"
      >
        <Text fontSize={3}>{children}</Text>
      </Box>
    </Box>
  )
}
