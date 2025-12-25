import React, { useState } from "react";
import { Navbar, Nav, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/mm-logo.svg";
import { useAuth } from "../hooks/useAuth";

function NavigationBar() {
  const { user, logout } = useAuth();  // ← FIXED: Added parentheses ()
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/menu?search=${encodeURIComponent(searchQuery)}`);
    } else {
      navigate("/menu");
    }
  };

  return (
    <Navbar expand="lg" fixed="top" bg="light" variant="light">
      <div className="container">
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="Minute Meal Logo"
            width="115"
            height="55"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>

          <Form className="d-flex me-3" onSubmit={handleSearch}>
            <Form.Control
              type="search"
              placeholder="Search food..."
              className="me-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button variant="outline-success" type="submit">Search</Button>
          </Form>

          <Nav>
            <Nav.Link as={Link} to="/cart">🛒 Cart</Nav.Link>
            {user ? (
              <Nav.Link onClick={logout}>Logout</Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavigationBar;