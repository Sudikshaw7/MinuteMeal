import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { icons, categories } from "../data/MenuData";
import api from "../services/api";
import { BeatLoader } from "react-spinners";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import ItemCard from "../components/ItemCard";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  
  // FIX 1: Properly parse query string
  const parsed = queryString.parse(location.search);
  const search = parsed.search || parsed.q || "";

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
        console.error("Error fetching menu:", err);
        setMenuItems([]); // Set empty array on error
      }
      setLoading(false);
    };
    fetchMenu();
  }, [search]);

  const renderItems = (catItems) => {
    // FIX 2: Add safety check
    if (!catItems || catItems.length === 0) return null;
    
    return (
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
  };

 if (loading) {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "60vh" }}
    >
      <div className="spinner-border text-success" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
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

      {/* FIX 3: Add safety checks for categories and icons */}
      {categories && categories.length > 0 && (
        <Row className="justify-content-center mb-5 g-4">
          {categories.map((cat) => {
            const iconSrc = icons?.[cat.id];
            if (!iconSrc) {
              console.warn(`Icon not found for category: ${cat.id}`);
              return null;
            }
            
            return (
              <Col xs="auto" key={cat.id}>
                <a href={`#${cat.id}`} className="text-decoration-none">
                  <img
                    src={iconSrc}
                    alt={cat.title}
                    style={{ height: "50px" }}
                    className="rounded shadow"
                  />
                </a>
              </Col>
            );
          })}
        </Row>
      )}

      {/* Render menu sections */}
      {categories && categories.map((cat) => {
        const catItems = menuItems.filter((item) => item.category === cat.id);
        if (catItems.length === 0) return null;
        return (
          <section id={cat.id} key={cat.id} className="mb-5">
            <h3 className={`fw-bold ${cat.color} mb-4`}>{cat.title}</h3>
            {renderItems(catItems)}
          </section>
        );
      })}

      {/* Show message if no items */}
      {menuItems.length === 0 && (
        <div className="text-center text-muted mt-5">
          <p>No menu items found.</p>
        </div>
      )}
    </Container>
  );
};

export default Menu;