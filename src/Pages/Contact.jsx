import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "emailjs-com";

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  message: yup.string().required(),
});

function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(schema) });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = (data) => {
    emailjs.send("service_connectwsu", "template_yvkxz35", data, "iKcVo2WJy4phCx_hI")
      .then(() => {
        setSuccess(true);
        reset();
      })
      .catch(() => setError("Failed to send"));
  };

  return (
    <div className="container mt-5 pt-5">
      <h2>Contact Us</h2>
      {success && <Alert variant="success">Sent!</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control {...register("name")} isInvalid={!!errors.name} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" {...register("email")} isInvalid={!!errors.email} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} {...register("message")} isInvalid={!!errors.message} />
        </Form.Group>
        <Button variant="success" type="submit">Send</Button>
      </Form>
    </div>
  );
}

export default Contact;