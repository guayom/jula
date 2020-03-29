import React from "react"
import { Flex } from "rebass"

export default ({ children }) => {
  return (
    <Flex
      sx={{
        "& > .gatsby-image-wrapper": {
          width: "100%",
          height: "100%",
        },
        "&:hover": {
          opacity: 0.8,
        },
      }}
    >
      {children}
    </Flex>
  )
}
