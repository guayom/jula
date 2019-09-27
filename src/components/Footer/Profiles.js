import React from "react";
import ProfileLink from "./ProfileLink";
import { useStaticQuery, graphql } from "gatsby";
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
      {data.profiles.edges.map(({ node: profile }) => (
        <ProfileLink key={profile.id} {...profile} />
      ))}
    </React.Fragment>
  );
};
