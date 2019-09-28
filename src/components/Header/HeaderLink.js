import React from "react";
import Link from "gatsby-link";
import {Box} from "rebass";

export default ({ to, children }) => (
  <Box mx={2}>
    <Link
      to={to}
      style={{
        color: "white",
        textDecoration: "none"
      }}
    >
      {children}
    </Link>
  </Box>
);