import React from "react";
import {Box} from "rebass";
import AniLink from "gatsby-plugin-transition-link/AniLink";

export default ({ to, children }) => (
  <Box mx={2}>
    <AniLink
      fade
      to={to}
      style={{
        color: "white",
        textDecoration: "none"
      }}
    >
      {children}
    </AniLink>
  </Box>
);