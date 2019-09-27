import React from "react";
import Img from "gatsby-image";

export default ({ image, body, link, callToAction }) => (
  <div>
    <Img fluid={image.fluid} />
    <div
      dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }}
    />
    <a href={link}>{callToAction}</a>
  </div>
);
