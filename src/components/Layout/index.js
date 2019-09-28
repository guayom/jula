import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { ThemeProvider } from "theme-ui";
import theme from "./theme";
import "./index.css"
export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <Header />
      {children}
    <Footer />
  </ThemeProvider>
);
