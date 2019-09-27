import React from "react";

export default () => (
  <form
    name="contact"
    data-netlify-honeypot="country"
    method="POST"
    action="/thank-you"
    data-netlify={true}
  >
    <div style={{ display: `none` }}>
      <input name="country" />
      <input type="hidden" name="form-name" value="contact" />
    </div>
    <div>
      <label>Name:</label>
      <br />
      <input type="text" name="name" />
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
);