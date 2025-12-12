import React from "react";
import { Form, Button } from "react-bootstrap";

function Login() {
  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">Login</Button>
      </Form>
    </div>
  );
}

export default Login;
