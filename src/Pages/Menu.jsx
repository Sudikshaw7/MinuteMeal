import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import Paneermalaimasala from "../assets/Paneermalaimasala.png";
import SobaNoodleSalad from "../assets/SobaNoodleSalad.png";
import masalaDosa from "../assets/masalaDosa.png";
import spinachlasagna from "../assets/spinachlasagna.png";
import TofuChowMein from "../assets/TofuChowMein.png";

// import chickenBiryani from "../assets/chicken-biryani.svg";
// import muttonCurry from "../assets/mutton-curry.svg";
// import fishFry from "../assets/fish-fry.svg";

// import iceCream from "../assets/ice-cream.svg";
// import gulabJamun from "../assets/gulab-jamun.svg";
// import brownie from "../assets/brownie.svg";

// import coffee from "../assets/coffee.svg";
// import coldDrink from "../assets/cold-drink.svg";
// import milkshake from "../assets/milkshake.svg";

import veg from "../assets/vegicon.png";
import nonveg from "../assets/nonvegicon.png";
import dessert from "../assets/desserticon.svg";
import beverage from "../assets/beverageicon.svg";

function Menu() {
  const vegItems = [
    { title: "Paneer malai masala", price: 220, Servings: 4, dishstyle:"North Indian", image: Paneermalaimasala},
    { title: "Soba Noodle Salad", price: 150, Servings: 6,dishstyle:"Thai", image:SobaNoodleSalad},
    { title: "Tofu Chow Mein",price:200,servings:4, dishstyle:"Chinese", image:TofuChowMein}
  ];

  const nonVegItems = [
    { title: "Chicken Biryani", price: 300 },
    { title: "Mutton Curry", price: 350 },
    { title: "Fish Fry", price: 280 },
  ];

  const dessertItems = [
    { title: "Ice Cream", price: 100 },
    { title: "Gulab Jamun", price: 120 },
    { title: "Brownie", price: 150 },
  ];

  const beverageItems = [
    { title: "Coffee", price: 80},
    { title: "Cold Drink", price: 60 },
    { title: "Milkshake", price: 120},
  ];

  const renderItems = (items) => (
  <Row>
    {items.map((item, index) => (
      <Col md={4} key={index} className="mb-4 d-flex">
        <Card className="h-100 w-100 shadow-sm">
          {item.image && <Card.Img variant="top" src={item.image} />}
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>Price: ₹{item.price}</Card.Text>
            {item.dishstyle && <Card.Text>Style: {item.dishstyle}</Card.Text>}
            {item.Servings && <Card.Text>Servings: {item.Servings}</Card.Text>}
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
);


  return (
    <Container style={{ marginTop: "80px" }}>
      <h2 className="text-center mb-4">Our Menu</h2>
      <p className="text-center">Browse categories below</p>

      <Col className="mb-2 d-flex justify-content-center">
          <a href="#veg">
            <img src={veg} 
            className="img-fluid rounded shadow img-hover" 
            style={{height: "35px",marginRight:"1rem"}} />
          </a>
          <a href="#nonveg">
            <img src={nonveg} 
            className="img-fluid rounded shadow img-hover" 
            style={{height: "38px",marginRight:"1rem", marginTop:"-1px"}} />
          </a>
          <a href="#dessert">
            <img src={dessert} 
            className="img-fluid rounded shadow img-hover" 
            style={{height:"36px",marginRight:"1rem"}} />
          </a>
          <a href="#beverage">
            <img src={beverage} 
            className="img-fluid rounded shadow img-hover" 
            style={{height:"36px"}} />
          </a>
      </Col>

      <section id="veg" className="mb-5">
        <h3 className="text-success">Veg Delights</h3>
        {renderItems(vegItems)}
      </section>

      <section id="nonveg" className="mb-5">
        <h3 className="text-danger">Non-Veg Specials</h3>
        {renderItems(nonVegItems)}
      </section>

      <section id="dessert" className="mb-5">
        <h3 className="text-warning">Desserts</h3>
        {renderItems(dessertItems)}
      </section>

      <section id="beverage" className="mb-5">
        <h3 className="text-primary">Beverages</h3>
        {renderItems(beverageItems)}
      </section>
    </Container>
  );
}

export default Menu;