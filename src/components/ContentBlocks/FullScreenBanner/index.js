import React from "react"
import { Flex, Text } from "rebass"
import Wrapper from "../../Layout/Wrapper"
import BackgroundImage from "gatsby-background-image"

export default ({ title, image, description }) => (
  <Flex
    sx={{
      width: "100%",
      backgroundPosition: `bottom right`,
      backgroundRepeat: `repeat-y`,
      backgroundSize: `cover`,
    }}
  >
    <BackgroundImage
      Tag="section"
      fluid={image.fluid}
      backgroundColor={`#040e18`}
      style={{
        backgroundPosition: "20% 30%",
        width: "100%",
      }}
    >
      <Flex height="100vh" alignItems="center">
        <Wrapper>
          <Text as="h2" color="white" mb={3}>
            {title}
          </Text>
          {description && (
            <Text
              color="white"
              dangerouslySetInnerHTML={{
                __html: description.childMarkdownRemark.html,
              }}
            />
          )}
        </Wrapper>
      </Flex>
    </BackgroundImage>
  </Flex>
)
