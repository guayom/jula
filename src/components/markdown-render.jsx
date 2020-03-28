import React from "react"

export default ({ childMarkdownRemark: { html } }) => {
  /* eslint-disable react/no-danger */
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
