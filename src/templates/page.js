import React from "react"
import Link from "gatsby-link"
import * as PropTypes from "prop-types"
import Img from "gatsby-image"

const propTypes = {
  data: PropTypes.object.isRequired,
}

function Form({slug}){
  if (slug === 'contact') {
    return (
      <form name="contact" data-netlify-honeypot="country" method="POST" action="/thank-you" data-netlify={true}>
        <div style={{display: `none`}}>
          <input name="country" />
          <input type="hidden" name="form-name" value="contact" />
        </div>
        <div>
          <label>Name:</label><br/>
          <input type="text" name="name" />
        </div>
        <div>
          <label>Email:</label><br/>
          <input type="email" name="email" />
        </div>
        <div>
          <label>Message:</label><br/>
          <textarea name="message"></textarea>
        </div>
        <div>
          <button type="submit">Send</button>
        </div>
      </form>
    )
  } else {
    return null
  }
}

class PageTemplate extends React.Component {
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
        <Form slug={page.slug} />
      </div>
    )
  }
}

PageTemplate.propTypes = propTypes

export default PageTemplate

export const pageQuery = graphql`
  query pageQuery($id: String!) {
    contentfulPage(id: { eq: $id }) {
        id
        title
        slug
        description {
          childMarkdownRemark {
            html
          }
        }
    }
  }
`