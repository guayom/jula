import React from "react";
import Img from "gatsby-image";
import { Box, Flex } from "rebass";
import Wrapper from "../../Layout/Wrapper";
import DonateButton from "../../Buttons/DonateButton"

export default ({ image, body, link, callToAction, linkToProfile }) => (
  <Wrapper>
    <Flex my={6} mx={-3} flexWrap={["wrap", "wrap", "nowrap"]}>
      <Box width={[1, 1, 1 / 4]} mx={3} mb={[3, 3, 0]}>
        <Img fluid={image.fluid} />
      </Box>
      <Box width={[1, 1, 3 / 4]} mx={3}>
        <div
          dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }}
        />
        <DonateButton />
      </Box>
    </Flex>
  </Wrapper>
);
