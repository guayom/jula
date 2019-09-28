import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { ThemeProvider } from "theme-ui";
import theme from "./theme";
import MobileNavbar from "../Header/MobileNavbar";

import "./index.css"
export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <Header />
    {children}
    <Footer />
    <MobileNavbar />
  </ThemeProvider>
);
