import React from "react"
import { Flex } from "rebass"

export default ({ children, zIndex = 1 }) => {
  return <Flex>{children}</Flex>
}
