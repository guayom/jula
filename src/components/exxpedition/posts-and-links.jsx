import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PostSummary from "../Blog/summary"
import Link from "../Link/link"
import Grid from "./posts-and-links-grid"

export default () => {
  const data = useStaticQuery(graphql`
    query PostsAndLinksQuery {
      posts: allContentfulPost(filter: { node_locale: { eq: "en" } }) {
        edges {
          node {
            ...BlogPost
          }
        }
      }
      links: allContentfulLink(filter: { node_locale: { eq: "en" } }) {
        edges {
          node {
            ...Link
          }
        }
      }
    }
  `)

  const processData = (entries, type) => {
    return entries.edges.map(({ node }) => ({ type, ...node }))
  }

  const Entries = [
    ...processData(data.posts, "post"),
    ...processData(data.links, "link"),
  ].sort((a, b) => {
    return new Date(b.date) - new Date(a.date)
  })

  return (
    <Grid>
      {Entries.map((entry) => {
        if (entry.type === "post") {
          return <PostSummary {...entry} />
        }
        return <Link {...entry} />
      })}
    </Grid>
  )
}
