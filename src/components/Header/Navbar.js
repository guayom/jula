import React from "react"
import { Box, Flex } from "rebass"
import ReactSVG from "react-svg"
import { Link } from "gatsby"
import Nav from "./Nav"
import Wrapper from "../Layout/Wrapper"

const Navbar = () => (
  <Wrapper>
    <Flex alignItems="center">
      <Box ml={-2} width={["100px", "100px", "150px"]}>
        <h1 style={{ margin: 0 }}>
          <Link to="/">
            <ReactSVG
              src="/jula-logo.svg"
              alt="Ju-la.com"
              beforeInjection={(svg) => {
                svg.classList.add("svg-class-name")
                svg.setAttribute("style", "fill: white")
              }}
            />
          </Link>
        </h1>
      </Box>
      <Box ml="auto" mr={-2} sx={{ display: ["none", "none", "none", "flex"] }}>
        <Nav />
      </Box>
    </Flex>
  </Wrapper>
)

export default Navbar
