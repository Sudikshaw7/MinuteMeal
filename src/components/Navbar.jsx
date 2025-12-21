import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import logo from "../assets/mm-logo.svg";

function NavigationBar() {
  return (
    <Navbar expand="lg" fixed="top" bg="light">
      <Navbar.Brand href="/">
        <img
          src={logo}
          alt="Minute Meal Logo"
          width="115"
          height="55"
          className="d-inline-block align-top me-2"
        />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/menu">Menu</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>

        <Form className="d-flex me-3">
          <FormControl type="search" placeholder="Search" className="me-2" />
          <Button variant="outline-success">Search</Button>
        </Form>

        <Nav>
          <Nav.Link href="/cart">🛒</Nav.Link>
          <Nav.Link href="/login">Login/Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
