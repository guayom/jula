import React from "react";
import Wrapper from "../Layout/Wrapper";
import { Box, Flex } from "rebass";
import HeaderLink from "./HeaderLink";
import Nav from "./Nav";

const Header = () => (
  <Box bg="daintree" py={3}>
    <Wrapper>
      <Flex alignItems="center">
        <Box ml={-2}>
          <h1 style={{ margin: 0 }}>
            <HeaderLink to="/">Ju-La.com</HeaderLink>
          </h1>
        </Box>
        <Box
          ml="auto"
          mr={-2}
          sx={{ display: ["none", "none", "none", "flex"] }}
        >
          <Nav />
        </Box>
      </Flex>
    </Wrapper>
  </Box>
);

export default Header;
