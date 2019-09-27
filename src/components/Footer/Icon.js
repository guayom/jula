import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Icons = {
  Facebook: FaFacebook,
  Instagram: FaInstagram
};

export default ({ title }) => {
  const Icon = Icons[title];
  return <Icon />;
};
