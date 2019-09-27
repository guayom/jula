import React from "react";

export default () => (
  <footer
    style={{
      margin: "0 auto",
      maxWidth: 960,
      padding: "0px 1.0875rem 1.45rem",
      paddingTop: 0
    }}
  >
    <div>
      <h3>Let's talk</h3>
      <form
        name="footer-contact"
        data-netlify-honeypot="country"
        method="POST"
        action="/thank-you"
        data-netlify={true}
      >
        <div style={{ display: `none` }}>
          <input name="country" />
          <input type="hidden" name="form-name" value="footer-contact" />
        </div>
        <div>
          <label>Email:</label>
          <br />
          <input type="email" name="email" />
        </div>
        <div>
          <label>Message:</label>
          <br />
          <textarea name="message" />
        </div>
        <div>
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  </footer>
);
