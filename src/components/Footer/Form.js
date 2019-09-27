import React, { useState } from "react";
import * as yup from "yup";
import useFormal from "@kevinwolf/formal";

const schema = yup.object().shape({
  message: yup.string().required(),
  email: yup
    .string()
    .email()
    .required()
});

const initialValues = {
  email: "",
  message: "",
};

export default () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const formal = useFormal(initialValues, {
    schema,
    onSubmit: values => {
      return new Promise(resolve => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", ...values })
        })
          .then(() => {
            setIsSubmitted(true);
            setIsSubmitting(false);
            resolve();
          })
          .catch(error => alert(error));
      });
    }
  });

  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitting(true);
    formal.submit();
  };

  if (isSubmitted && !isSubmitting) {
    return <div>Thank you! I'll be in contact shortly</div>;
  } else if (!isSubmitted && isSubmitting) {
    return <div>Submitting...</div>;
  } else {
    return (
      <form
        name="contact"
        method="POST"
        action="/thank-you"
        data-netlify={true}
        onSubmit={handleSubmit}
      >
        <div>
          <label>Email:</label>
          <br />
          <input
            type="email"
            name="email"
            value={formal.values.email}
            onChange={e => formal.change("email", e.target.value)}
          />
          {formal.errors.email && <div>{formal.errors.email}</div>}
        </div>
        <div>
          <label>Message:</label>
          <br />
          <textarea
            name="message"
            value={formal.values.message}
            onChange={e => formal.change("message", e.target.value)}
          />
          {formal.errors.message && <div>{formal.errors.message}</div>}
        </div>
        <div>
          <button type="submit">Send</button>
        </div>
      </form>
    );
  }
};
