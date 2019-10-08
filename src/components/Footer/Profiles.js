import React from "react";
import ProfileLink from "./ProfileLink";
import { useStaticQuery, graphql } from "gatsby";
import { Flex } from "rebass";

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
  `);
  return (
    <React.Fragment>
      <Flex
        mx={-2}
        justifyContent={["flex-start", "flex-start", "flex-end"]}
      >
        {data.profiles.edges.map(({ node: profile }) => (
          <ProfileLink key={profile.id} {...profile} />
        ))}
      </Flex>
    </React.Fragment>
  );
};
