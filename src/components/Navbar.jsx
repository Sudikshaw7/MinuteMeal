import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

function NavigationBar() {
  return (
    <Navbar expand="lg" fixed="top">
      <Navbar.Brand href="/">🍔Minute Meal</Navbar.Brand>
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
          <Nav.Link href="/cart">🛒 Cart</Nav.Link>
          <Nav.Link href="/login">Login/Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
