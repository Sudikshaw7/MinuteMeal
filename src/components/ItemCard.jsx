import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"

function ItemCard({ title, description, viewmore, image }) {
const navigate = useNavigate();
const handleViewMore = () => {
  navigate(`/Menu/${id}`);
};
  return (
    <Card className="m-3 shadow">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" onClick={handleViewMore}>Browse More{viewmore}</Button>
      </Card.Body>
    </Card>
  );
}

export default ItemCard;
