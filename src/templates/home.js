import React from 'react'
import Link from 'gatsby-link'
import * as PropTypes from "prop-types"

const propTypes = {
  data: PropTypes.object.isRequired,
}

class IndexPage extends React.Component {
  render() {
    const page = this.props.data.contentfulPage

    return (
      <div>
        <h1>{page.title}</h1>
        <div
            dangerouslySetInnerHTML={{
              __html: page.description.childMarkdownRemark.html,
            }}
          />
      </div>
    )
  }
}

IndexPage.propTypes = propTypes

export default IndexPage

export const homeQuery = graphql`
  query homeQuery($id: String!) {
    contentfulPage(id: { eq: $id }) {
        id
        title
        description {
          childMarkdownRemark {
            html
          }
        }
    }
  }
`