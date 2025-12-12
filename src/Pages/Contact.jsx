import React from "react";
import { Form, Button } from "react-bootstrap";

function Contact() {
  return (
    <div className="container mt-5">
      <h2>Contact Us</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Your Name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Your Email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="success" type="submit">Send</Button>
      </Form>
    </div>
  );
}

export default Contact;
