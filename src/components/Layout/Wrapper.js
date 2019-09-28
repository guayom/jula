import React from "react";
import { Box } from "rebass";
import theme from "../Layout/theme";

export default ({ children }) => (
  <Box m="0 auto" maxWidth={theme.breakpoints[2]} p="0px 1.0875rem">
    {children}
  </Box>
);
