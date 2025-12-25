import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-dark text-light pt-4 pb-2 mt-5">
      <div className="container">
        <div className="row text-center text-md-start">
          <div className="col-md-4 mb-3">
            <h5>Minute Meal</h5>
            <p>Delicious food delivered fast to your doorstep.</p>
            <p>📍 Vasai, MH, India</p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Contact Us</h5>
            <p>📧 support@minutemeal.com</p>
            <p>☎️ +91-9876543210</p>
            <p>🕒 Mon–Sun, 10 AM – 11 PM</p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/menu" className="text-light text-decoration-none">Menu</a></li>
              <li><a href="/cart" className="text-light text-decoration-none">Cart</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
              <li><a href="/login" className="text-light text-decoration-none">Login</a></li>
            </ul>
          </div>
        </div>
        <hr className="border-light" />
        <div className="text-center mt-3">
          <small>© {year} Minute Meal. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;