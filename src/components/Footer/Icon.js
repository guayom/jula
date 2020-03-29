import React from "react"
import {
  FaFacebook,
  FaInstagram,
  FaExternalLinkAlt,
  FaLinkedin,
} from "react-icons/fa"

const Icons = {
  Facebook: FaFacebook,
  Instagram: FaInstagram,
  Default: FaExternalLinkAlt,
  Linkedin: FaLinkedin,
}

export default ({ title }) => {
  const Icon = Icons[title] || Icons.Default
  return <Icon size={20} />
}
