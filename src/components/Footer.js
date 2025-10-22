import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            ☕ Third Cup
          </Link>
          <p className="footer-description">
            Your perfect cup awaits at Third Cup Coffee Shop.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <div className="footer-links">
            <Link to="/menu">📋 Our Menu</Link>
            <Link to="/about">ℹ️ About Us</Link>
            <Link to="/order">🛒 Order Online</Link>
            <Link to="/contact">📍 Contact Us</Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="footer-copyright">
            &copy; 2024 Third Cup Coffee Shop. All rights reserved.
          </div>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
