import React from "react"
import { Text } from "rebass"

export default ({ children }) => {
  return (
    <Text
      color="white"
      fontWeight="bold"
      px="4"
      fontSize="3em"
      as="h2"
      sx={{ position: "absolute" }}
    >
      {children}
    </Text>
  )
}
