import React from "react";
import { Card, Button } from "react-bootstrap";

function ItemCard({ title, description, price, image }) {
  return (
    <Card style={{ width: "18rem" }} className="m-3 shadow">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Add to Cart - ₹{price}</Button>
      </Card.Body>
    </Card>
  );
}

export default ItemCard;
