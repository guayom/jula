import React from "react"
import { Box } from "rebass"

export default ({ children }) => {
  return (
    <Box
      sx={{
        position: "relative",
        paddingTop: "100%",
        background: "#000",
        "&:hover .overlay": {
          opacity: 0.5,
        },
      }}
    >
      {children}
    </Box>
  )
}
