import React from "react"
import { Box } from "rebass"

export default ({ children }) => (
  <Box
    my="20px"
    mx="auto"
    sx={{
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gridGap: "40px",
      maxWidth: "1300px",
    }}
  >
    {children}
  </Box>
)
