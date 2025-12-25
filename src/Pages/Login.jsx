import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const onSubmit = async (data) => {
    try {
      await login(data.email, data.password);
      navigate("/");
    } catch {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="container mt-5 pt-5">
      <h2 className="text-center">Login</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" {...register("email")} isInvalid={!!errors.email} />
          <Form.Control.Feedback type="invalid">{errors.email?.message}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" {...register("password")} isInvalid={!!errors.password} />
          <Form.Control.Feedback type="invalid">{errors.password?.message}</Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">Login</Button>
      </Form>
    </div>
  );
}

export default Login;