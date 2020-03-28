import React, { useState } from "react"
import * as yup from "yup"
import useFormal from "@kevinwolf/formal"
import { Box, Button, Text } from "rebass"

const schema = yup.object().shape({
  message: yup.string().required(),
  email: yup.string().email().required(),
})

const initialValues = {
  email: "",
  message: "",
}

export default () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
      )
      .join("&")
  }

  const formal = useFormal(initialValues, {
    schema,
    onSubmit: (values) => {
      return new Promise((resolve) => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", ...values }),
        })
          .then(() => {
            setIsSubmitted(true)
            setIsSubmitting(false)
            resolve()
          })
          // TODO handle this error
          .catch((error) => error)
      })
    },
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    formal.submit()
  }

  if (isSubmitted && !isSubmitting) {
    return <div>Thank you! I will be in contact shortly</div>
  }
  if (!isSubmitted && isSubmitting) {
    return <div>Submitting...</div>
  }
  return (
    <form
      name="contact"
      method="POST"
      action="/thank-you"
      data-netlify
      onSubmit={handleSubmit}
    >
      <div>
        <Text as="label" color="white">
          Email:
        </Text>
        <Box
          as="input"
          type="email"
          name="email"
          value={formal.values.email}
          onChange={(e) => formal.change("email", e.target.value)}
          width={1}
          sx={{ border: "none" }}
          mb={3}
        />
        {formal.errors.email && <div>{formal.errors.email}</div>}
      </div>
      <div>
        <Text as="label" color="white">
          Message:
        </Text>
        <Box
          as="textarea"
          name="message"
          value={formal.values.message}
          onChange={(e) => formal.change("message", e.target.value)}
          sx={{ border: "none" }}
          width={1}
        />
        {formal.errors.message && <div>{formal.errors.message}</div>}
      </div>
      <div>
        <Button type="submit" bg="turquoise">
          Send
        </Button>
      </div>
    </form>
  )
}
