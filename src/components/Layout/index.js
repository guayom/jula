import React from "react"
import Header from "../Header"
import StickyHeader from "../Header/StickyHeader"
import Footer from "../Footer"
import { ThemeProvider } from "theme-ui"
import theme from "./theme"
import MobileNavbar from "../Header/MobileNavbar"
import { useInView } from "react-intersection-observer"

import "./index.css"
export default ({ children, transparent }) => {
  const [ref, inView] = useInView({
    threshold: 0,
  })

  return (
    <ThemeProvider theme={theme}>
      <Header transparent={transparent} innerRef={ref} />
      {children}
      <Footer />
      <StickyHeader isVisible={!inView} />
      <MobileNavbar />
    </ThemeProvider>
  )
}
