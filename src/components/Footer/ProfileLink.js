import React from "react";
import Icon from "./Icon";
import { Link } from "rebass";

export default ({ title, link }) => (
  <Link href={link} color="white" width="30px" height="30px" mx={1} sx={{display: `inline-block`}}>
    <Icon title={title} />
  </Link>
);
