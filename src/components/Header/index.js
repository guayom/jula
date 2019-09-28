import React from "react";
import { Link } from "gatsby";
import Wrapper from "../Layout/Wrapper";
import { Box, Flex } from "rebass";

const Header = () => (
  <Box bg="primary" py={3}>
    <Wrapper>
      <Flex>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: "white",
              textDecoration: "none"
            }}
          >
            Ju-La.com
          </Link>
        </h1>
        <Link
          ml="auto"
          mr={0}
          to="/exxpedition/"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          Exxpedition
        </Link>{" "}
        -
        <Link
          to="/about-me/"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          About Me
        </Link>{" "}
        -
        <Link
          to="/contact/"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          Contact
        </Link>
      </Flex>
    </Wrapper>
  </Box>
);

export default Header;
