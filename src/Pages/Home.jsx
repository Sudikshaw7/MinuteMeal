import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ItemCard from "../components/ItemCard";

function Home() {
  const foodCategories = [
    { title: "Asian Cuisine", image: "https://media.istockphoto.com/id/545286388/photo/chinese-food-blank-background.jpg?s=612x612&w=0&k=20&c=pqOIy07YKO5PlU5VxjscwTGRrrZ8PluKMUjSOz-II60=" },
    { title: "Continental", image: "https://www.shutterstock.com/image-photo/lunch-hour-meal-table-continental-600nw-2285977667.jpg" },
    { title: "Fast Food", image: "https://media.istockphoto.com/id/908663850/photo/various-fast-food-products.jpg?s=612x612&w=0&k=20&c=8uGF9iSmuMPHTghrIu1FR6m1a1Y6qPrvLZQYuTDcoaY=" },
  ];

  const FoodCategories2 = [
    { title: "Dessert", image: "https://img.freepik.com/free-photo/top-view-cake-slices-with-fruits-cookies-choco-bars-dark-surface_140725-90761.jpg" },
    { title: "Street Food", image: "https://www.tasteofhome.com/wp-content/uploads/2019/08/group-bombay-chat-food-includes-golgappapanipuri-shutterstock_1422412163.jpg?fit=1024,640" },
  ];

  return (
    <>
      <div className="carousel carousel-dark slide" id="carouselExampleDark">
        <div className="carousel-indicators">
          {[0, 1, 2, 3].map(i => (
            <button key={i} type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={i} className={i === 0 ? "active" : ""} aria-current={i === 0} />
          ))}
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://media.gettyimages.com/id/1197087507/photo/bicycle-delivery.jpg?s=612x612&w=gi&k=20&c=1yZXx8gD-0WokWrH7vwIF5nn7JqfIM0yX8Z3sksTKR8=" className="d-block w-100" alt="Delivery" style={{ height: "500px", objectFit: "cover" }} />
          </div>
          <div className="carousel-item">
            <img src="https://media.istockphoto.com/id/1262278932/photo/ready-healthy-food-catering-menu-in-lunch-boxes-fish-and-vegetable-packages-as-daily-meal.jpg?s=612x612&w=0&k=20&c=fFwFuA8kexOTzBdYnE3EJ1z_r9vd9a9onNPGZXcOtEM=" className="d-block w-100" alt="Fresh" style={{ height: "500px", objectFit: "cover" }} />
          </div>
          <div className="carousel-item">
            <img src="https://macrofactorapp.com/wp-content/uploads/2025/04/image10.png" className="d-block w-100" alt="Search" style={{ height: "500px", objectFit: "cover" }} />
          </div>
          <div className="carousel-item">
            <img src="https://media.istockphoto.com/id/1287186696/photo/food-delivery-app-order-with-phone-online-mobile-service-for-take-away-burger-and-pizza.jpg?s=612x612&w=0&k=20&c=s0g33OOVOT9nZiFat2wvo7HhRvmM5kx0CJBp1OSfbRE=" className="d-block w-100" alt="Quick" style={{ height: "500px", objectFit: "cover" }} />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>

      <Container className="my-5">
        <h2 className="text-center mb-5 fw-bold">Explore Our Categories</h2>
        <Row className="g-4">
          {foodCategories.map((cat, i) => (
            <Col md={4} sm={6} xs={12} key={i}>
              <ItemCard title={cat.title} image={cat.image} />
            </Col>
          ))}
        </Row>
        <Row className="g-4 mt-3">
          {FoodCategories2.map((cat, i) => (
            <Col md={6} sm={6} xs={12} key={i}>
              <ItemCard title={cat.title} image={cat.image} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Home;