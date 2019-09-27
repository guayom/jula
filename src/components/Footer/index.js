import React from "react";
import Form from "./Form";
import Profiles from "./Profiles"

export default () => {
  
  return (
    <footer
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "0px 1.0875rem 1.45rem",
        paddingTop: 0
      }}
    >
      <div>
        <h3>Let's talk</h3>
        <Form />
      </div>
      <div>
        <Profiles />
      </div>
    </footer>
  );};
