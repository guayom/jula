import React from "react";
import Img from "gatsby-image";

export default ({ images }) => (
  <div>
    {images.map(image => (
      <Img key={image.id} fluid={image.fluid} />
    ))}
  </div>
);
