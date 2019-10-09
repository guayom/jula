import React from "react";
import { Box } from "rebass";
import Navbar from "./Navbar";

const Header = ({ transparent, innerRef }) => {
  const defaultStyles = {};
  const transparentStyles = {
    position: `absolute`,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 99
  };
  return (
    <Box
      bg={transparent ? "transparent" : "daintree"}
      py={3}
      style={transparent ? transparentStyles : defaultStyles}
      ref={innerRef}
    >
      <Navbar />
    </Box>
  );
};

export default Header;
