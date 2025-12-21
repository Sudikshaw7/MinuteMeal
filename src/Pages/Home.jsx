import React from "react";
import ItemCard from "../components/ItemCard";
import { Container, Row, Col } from "react-bootstrap";

import Asiancuisine from "../assets/Asiancuisine.png";
import Continental from "../assets/Continental.png";
import Fastfood from "../assets/Fastfood.png";
import Dessert from "../assets/Dessert.png";
import Streetfood from "../assets/Streetfood.png";

import Manondoor from "../assets/Man-on-door.svg";
import FoodDeliver from "../assets/FoodDeliver.svg";
import foodSearch from "../assets/foodSearch.svg";
import Deliveryman from "../assets/Deliveryman.svg";

function Home() {
  const foodCategories = [
    { title: "Asian Cuisine", image: Asiancuisine },
    { title: "Continental", image: Continental },
    { title: "Fast Food", image: Fastfood }
  ];
  const FoodCategories2 = [
    { title: "Dessert", image: Dessert },
    { title: "Street Food", image: Streetfood }
  ];

  return (
    <>
      <div id="carouselExampleDark" className="carousel carousel-dark slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Manondoor} className="d-block w-100 carousel-img" alt="Order Meal" />
            <div className="carousel-caption d-md-block">
              <h5>Order Your Meal</h5>
              <p>Fast delivery at your doorstep</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={FoodDeliver} className="d-block w-100 carousel-img" alt="Fresh & Hot" />
            <div className="carousel-caption d-md-block">
              <h5>Fresh & Hot</h5>
              <p>Enjoy food like never before</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={foodSearch} className="d-block w-100 carousel-img" alt="Find Favorites" />
            <div className="carousel-caption d-md-block">
              <h5>Find Your Favorites</h5>
              <p>Search and order instantly</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Deliveryman} className="d-block w-100 carousel-img" alt="Quick Service" />
            <div className="carousel-caption d-md-block">
              <h5>Quick Service</h5>
              <p>We value your time</p>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <Container className="my-5">
        <h2 className="text-center mb-4">Explore Our Categories</h2>
        <Row>
          {foodCategories.map((item, index) => (
            <Col md={4} sm={6} xs={12} key={index} className="mb-4 text-center">
              <ItemCard {...item} />
            </Col>
          ))}
        </Row>
      </Container>

      <Container className="my-5">
        <Row>
          {FoodCategories2.map((item, index) => (
            <Col md={4} sm={6} xs={12} key={index} className="mb-4 text-center">
              <ItemCard {...item} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Home;
