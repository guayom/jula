import React from "react"
import { Text } from "rebass"
import styled from "@emotion/styled"

const TitleContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.5s ease;
  padding: 2em 0;
  z-index: 2;

  @media (min-width: ${(p) => p.theme.breakpoints[1]}) {
    transform: translateY(200px);
  }
`

export default ({ children }) => {
  return (
    <TitleContainer className="title">
      <Text
        color="white"
        fontWeight="bold"
        px="5"
        pb="4"
        fontSize="1em"
        as="h2"
        m={0}
        p={0}
      >
        {children}
      </Text>
    </TitleContainer>
  )
}
