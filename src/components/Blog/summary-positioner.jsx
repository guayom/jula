import React from "react"
import { Flex } from "rebass"

export default ({ children, zIndex = 1 }) => {
  return (
    <Flex
      sx={{
        position: "absolute",
        zIndex,
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        alignItems: "flex-end",
        "& > .gatsby-image-wrapper": {
          width: "100%",
          height: "100%",
        },
      }}
    >
      {children}
    </Flex>
  )
}
