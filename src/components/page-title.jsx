import React from "react"
import { Box } from "rebass"

export default ({ children }) => {
  return (
    <Box mt={4}>
      <h1>{children}</h1>
    </Box>
  )
}
