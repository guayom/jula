import React from "react"
import { Link } from "rebass"
import Icon from "./Icon"

export default ({ title, link }) => (
  <Link href={link} color="white" mx={1} sx={{ display: `inline-block` }}>
    <Icon title={title} />
  </Link>
)
