import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { icons, categories } from "../data/MenuData";
import api from "../services/api";
import BeatLoader from "react-spinners/BeatLoader";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import ItemCard from "../components/ItemCard";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const { search } = queryString.parse(location.search);

  useEffect(() => {
    const fetchMenu = async () => {
      setLoading(true);
      try {
        const res = await api.get("/menu");
        let items = res.data;
        if (search) {
          items = items.filter((item) =>
            item.title.toLowerCase().includes(search.toLowerCase())
          );
        }
        setMenuItems(items);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };
    fetchMenu();
  }, [search]);

  const renderItems = (catItems) => (
    <Row>
      {catItems.map((item) => (
        <Col md={4} sm={6} xs={12} key={item.id} className="mb-4">
          <ItemCard
            title={item.title}
            image={item.image}
            price={item.price}
            dishstyle={item.dishstyle}
            servings={item.servings}
          />
        </Col>
      ))}
    </Row>
  );

  if (loading) {
    return (
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: "60vh" }}
      >
        <BeatLoader color="#198754" />
      </Container>
    );
  }

  return (
    <Container style={{ marginTop: "80px" }}>
      <h2 className="text-center mb-4 fw-bold">Our Menu</h2>
      <p className="text-center text-muted mb-5">
        {search
          ? `Results for "${search}"`
          : "Explore our delicious categories"}
      </p>

      <Row className="justify-content-center mb-5 g-4">
        {categories.map((cat) => (
          <Col xs="auto" key={cat.id}>
            <a href={`#${cat.id}`} className="text-decoration-none">
              <img
                src={icons[cat.id]}
                alt={cat.title}
                style={{ height: "50px" }}
                className="rounded shadow"
              />
            </a>
          </Col>
        ))}
      </Row>

      {categories.map((cat) => {
        const catItems = menuItems.filter((item) => item.category === cat.id);
        if (catItems.length === 0) return null;
        return (
          <section id={cat.id} key={cat.id} className="mb-5">
            <h3 className={`fw-bold ${cat.color} mb-4`}>{cat.title}</h3>
            {renderItems(catItems)}
          </section>
        );
      })}
    </Container>
  );
};

export default Menu;
