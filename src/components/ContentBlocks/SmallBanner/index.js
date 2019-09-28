import React from "react";
import Img from "gatsby-image";
import { Box, Flex, Button } from "rebass";
import Wrapper from "../../Layout/Wrapper";

export default ({ image, body, link, callToAction }) => (
  <Wrapper>
    <Flex my={6} mx={-3} flexWrap={["wrap", "wrap", "nowrap"]}>
      <Box width={[1, 1, 1 / 4]} mx={3} mb={[3, 3, 0]}>
        <Img fluid={image.fluid} />
      </Box>
      <Box width={[1, 1, 3 / 4]} mx={3}>
        <div
          dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }}
        />
        <Button as="a" target="_blank" rel="noopener noreferrer" href={link}>
          {callToAction}
        </Button>
      </Box>
    </Flex>
  </Wrapper>
);
