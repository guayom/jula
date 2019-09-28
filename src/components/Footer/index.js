import React from "react";
import Form from "./Form";
import Profiles from "./Profiles";
import Wrapper from "../Layout/Wrapper";
import { Box, Flex, Text } from "rebass";

export default () => {
  return (
    <Box bg="primary" as="footer" py={4} mb={[4, 4, 4, 0]}>
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
  );
};
