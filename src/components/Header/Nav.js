import React from "react"
import HeaderLink from "./HeaderLink"

const NavLinks = [
  { key: "exxpedition", title: "eXXpedition" },
  { key: "work", title: "Work" },
  { key: "blog", title: "Blog" },
  { key: "about-me", title: "About me" },
]

export default () => (
  <>
    {NavLinks.map((link) => (
      <HeaderLink key={link.key} to={`/${link.key}/`}>
        {link.title}
      </HeaderLink>
    ))}
  </>
)
