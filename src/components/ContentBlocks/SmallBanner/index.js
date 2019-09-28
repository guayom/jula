import React from "react";
import Img from "gatsby-image";
import { Box, Flex, Button } from "rebass";
import Wrapper from "../../Layout/Wrapper";

export default ({ image, body, link, callToAction }) => (
  <Wrapper>
    <Flex my={4} mx={-2}>
      <Box width={[1, 1, 1 / 4]} mx={2}>
        <Img fluid={image.fluid} />
      </Box>
      <Box width={[1, 1, 3 / 4]} mx={2}>
        <div
          dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }}
        />
        <Button href={link}>{callToAction}</Button>
      </Box>
    </Flex>
  </Wrapper>
);
