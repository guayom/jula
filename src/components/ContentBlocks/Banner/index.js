import React from "react";
import Img from "gatsby-image";
import { Box, Flex, Text } from "rebass";
import Wrapper from "../../Layout/Wrapper";

export default ({ title, image, description }) => (
  <Flex
    alignItems="center"
    height={["300px", "300px", "400px"]}
    sx={{ position: `relative`, overflow: "hidden" }}
  >
    <Box
      width="100%"
      height="100%"
      sx={{ position: `absolute`, top: 0, left: 0, zIndex: -1 }}
    >
      <Img fluid={image.fluid} alt={title} />
    </Box>
    <Wrapper>
      <Text as="h2" color="white" mb={3}>
        {title}
      </Text>
      {description && (
        <div
          dangerouslySetInnerHTML={{
            __html: description.childMarkdownRemark.html
          }}
        />
      )}
    </Wrapper>
  </Flex>
);
