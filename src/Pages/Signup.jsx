import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    try {
      await signup({
        name: form.name.value,
        email: form.email.value,
        password: form.password.value,
      });
      navigate("/");
    } catch {
      setError("Signup failed");
    }
  };

  return (
    <div className="container mt-5 pt-5" style={{ maxWidth: 400 }}>
      <h3>Signup</h3>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Control className="mb-3" name="name" placeholder="Name" />
        <Form.Control className="mb-3" name="email" placeholder="Email" />
        <Form.Control className="mb-3" type="password" name="password" placeholder="Password" />
        <Button type="submit">Signup</Button>
      </Form>
    </div>
  );
}

export default Signup;
