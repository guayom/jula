import React from "react"
import { Text } from "rebass"

export default ({ children }) => {
  return (
    <Text color="white" fontWeight="bold" px="5" pb="4" fontSize="4em" as="h2">
      {children}
    </Text>
  )
}
