import React from "react"
import { Box, Flex, Text } from "rebass"
import Form from "./Form"
import Profiles from "./Profiles"
import Wrapper from "../Layout/Wrapper"

export default () => {
  return (
    <Box bg="daintree" as="footer" py={4} mb={[4, 4, 4, 0]}>
      <Wrapper>
        <Flex flexWrap="wrap">
          <Box width={[1, 1, 1 / 2]}>
            <Text as="h3" color="white">
              Let's talk
            </Text>
            <Form />
          </Box>
          <Box width={[1, 1, 1 / 2]}>
            <Profiles />
          </Box>
        </Flex>
      </Wrapper>
    </Box>
  )
}
