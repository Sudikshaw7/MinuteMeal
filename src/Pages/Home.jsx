import React from "react";
import ItemCard from "../components/ItemCard";
import { Container, Row } from "react-bootstrap";

function Home() {
  const items = [
    { title: "Pizza", description: "Cheesy delight", price: 250, image: "https://via.placeholder.com/300x200?text=Pizza" },
    { title: "Burger", description: "Juicy and tasty", price: 150, image: "https://via.placeholder.com/300x200?text=Burger" },
    { title: "Pasta", description: "Italian classic", price: 200, image: "https://via.placeholder.com/300x200?text=Pasta" },
    { title: "Ice Cream", description: "Sweet treat", price: 100, image: "https://via.placeholder.com/300x200?text=Ice+Cream" },
    { title: "Sandwich", description: "Quick bite", price: 120, image: "https://via.placeholder.com/300x200?text=Sandwich" },
    { title: "Coffee", description: "Hot and fresh", price: 80, image: "https://via.placeholder.com/300x200?text=Coffee" },
  ];

  return (
    <Container style={{ marginTop: "80px" }}>
      <div className="text-center my-4">
        <h1>Welcome to Our Food Store</h1>
        <p>Delicious food, fast delivery, and great prices!</p>
      </div>
      <Row>
        {items.map((item, index) => (
          <ItemCard key={index} {...item} />
        ))}
      </Row>
    </Container>
  );
}

export default Home;
