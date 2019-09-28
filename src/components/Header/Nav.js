import React from "react";
import HeaderLink from "./HeaderLink";

const NavLinks = [
  { key: "exxpedition", title: "Exxpedition" },
  { key: "about-me", title: "About me" }
];

export default () => (
  <React.Fragment>
    {NavLinks.map(link => (
      <HeaderLink key={link.key} to={`/${link.key}/`}>
        {link.title}
      </HeaderLink>
    ))}
  </React.Fragment>
);