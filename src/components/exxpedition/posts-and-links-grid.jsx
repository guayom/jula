import React from "react"
import { Box } from "rebass"

export default ({ children }) => (
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
    }}
  >
    {children}
  </Box>
)
