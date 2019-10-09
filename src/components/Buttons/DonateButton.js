import React from "react";
import { Button } from "rebass";
import { useStaticQuery, graphql } from "gatsby";

export default () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulProfile(
        contentful_id: { eq: "5eW6oAtIm1pAkeV9FmGECg" }
        node_locale: { eq: "en" }
      ) {
        link
        title
        callToAction
      }
    }
  `);
  return (
    <Button
      as="a"
      target="_blank"
      rel="noopener noreferrer"
      href={data.contentfulProfile.link}
      bg="turquoiseBlue"
    >
      {data.contentfulProfile.callToAction}
    </Button>
  );
};
