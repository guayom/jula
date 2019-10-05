import React from "react";
import Wrapper from "../Layout/Wrapper";
import { Box, Flex } from "rebass";
import Nav from "./Nav";
import ReactSVG from "react-svg";
import Link from "gatsby-link";

const Header = () => (
  <Box bg="daintree" py={3}>
    <Wrapper>
      <Flex alignItems="center">
        <Box ml={-2} width={["100px","100px","150px"]}>
          <h1 style={{ margin: 0 }}>
            <Link to="/">
              <ReactSVG
                src="jula-logo.svg"
                alt="Ju-la.com"
                beforeInjection={svg => {
                  svg.classList.add("svg-class-name");
                  svg.setAttribute("style", "fill: white");
                }}
              />
            </Link>
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
