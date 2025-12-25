import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ItemCard({ title, image, price, dishstyle, servings }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (price) {
      alert(`${title} added to cart! 🛒`);
    } else {
      navigate("/menu");
    }
  };

  const buttonText = price ? "Add to Cart" : "Browse More";

  return (
    <Card className="h-100 shadow-sm border-0">
      {image ? (
        <Card.Img variant="top" src={image} alt={title} style={{ height: "200px", objectFit: "cover" }} />
      ) : (
        <div className="bg-light d-flex align-items-center justify-content-center" style={{ height: "200px" }}>
          <span className="text-muted">No image</span>
        </div>
      )}
      <Card.Body className="d-flex flex-column">
        <Card.Title className="text-center fw-bold">{title}</Card.Title>
        {price && <Card.Text className="text-center text-success fw-bold fs-4">₹{price}</Card.Text>}
        {dishstyle && <Card.Text className="text-center small text-muted">Style: {dishstyle}</Card.Text>}
        {servings && <Card.Text className="text-center small text-muted">Serves: {servings}</Card.Text>}
        <Button variant={price ? "success" : "primary"} onClick={handleClick} className="mt-auto">
          {buttonText}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ItemCard;