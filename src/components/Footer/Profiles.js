import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Flex } from "rebass"
import ProfileLink from "./ProfileLink"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      profiles: allContentfulProfile(filter: { node_locale: { eq: "en" } }) {
        edges {
          node {
            title
            link
            id
          }
        }
      }
    }
  `)
  return (
    <>
      <Flex
        mx={[0, 0, 0, -3]}
        justifyContent={["flex-start", "flex-start", "flex-end"]}
      >
        {data.profiles.edges.map(({ node: profile }) => (
          <ProfileLink key={profile.id} {...profile} />
        ))}
      </Flex>
    </>
  )
}
