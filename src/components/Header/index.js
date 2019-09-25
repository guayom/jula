import React from "react";
import { Link } from "gatsby";

const Header = () => (
  <div
    style={{
      background: "rebeccapurple",
      marginBottom: "1.45rem"
    }}
  >
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "1.45rem 1.0875rem"
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          Ju-La.com
        </Link>
      </h1>
      <Link
        to="/about-me/"
        style={{
          color: "white",
          textDecoration: "none"
        }}
      >
        About Me
      </Link>{" "}
      -
      <Link
        to="/contact/"
        style={{
          color: "white",
          textDecoration: "none"
        }}
      >
        Contact
      </Link>
    </div>
  </div>
);

export default Header;
