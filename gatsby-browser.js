require("typeface-montserrat")

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (typeof window.IntersectionObserver === `undefined`) {
    // TODO stop ignoring this file from eslint just for this line
    import(`intersection-observer`)
    console.log(`# IntersectionObserver is polyfilled!`)
  }
}
