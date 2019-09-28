import React from "react";
import Form from "./Form";
import Profiles from "./Profiles"
import Wrapper from "../Layout/Wrapper";

export default () => {
  
  return (
    <footer>
      <Wrapper>
        <div>
          <h3>Let's talk</h3>
          <Form />
        </div>
        <div>
          <Profiles />
        </div>
      </Wrapper>
    </footer>
  );};
