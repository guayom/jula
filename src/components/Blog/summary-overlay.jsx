import React from "react"
import { Box } from "rebass"

export default () => {
  return (
    <Box
      className="overlay"
      bg="black"
      sx={{
        width: "100%",
        height: "100%",
        opacity: 0,
        transition: "opacity .3s ease",
      }}
    />
  )
}
