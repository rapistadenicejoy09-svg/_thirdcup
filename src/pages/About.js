import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="container">
      {/* About Header */}
      <section className="about-header">
        <div className="about-title">
          <h1>☕ About Third Cup</h1>
          <p>Discover what makes us your neighborhood's favorite coffee destination</p>
        </div>
        <div className="about-stats">
          <div className="stat-card">
            <div className="stat-number">6</div>
            <div className="stat-label">Years Serving</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">5000+</div>
            <div className="stat-label">Happy Customers</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">15</div>
            <div className="stat-label">Coffee Varieties</div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="about-mission">
        <div className="mission-card">
          <h2>🎯 Our Mission</h2>
          <p className="mission-statement">
            At Third Cup, we're dedicated to serving exceptional coffee while creating a warm, welcoming space
            where our community can connect, relax, and enjoy life's simple pleasures.
          </p>
          <div className="mission-values">
            <div className="value-item">
              <span className="value-icon">☕</span>
              <span className="value-text">Premium Quality Coffee</span>
            </div>
            <div className="value-item">
              <span className="value-icon">🌱</span>
              <span className="value-text">Sustainable Sourcing</span>
            </div>
            <div className="value-item">
              <span className="value-icon">🤝</span>
              <span className="value-text">Community Connection</span>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="about-features">
        <h2>✨ What We Offer</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">☕</div>
            <h3>Premium Coffee</h3>
            <p>Hand-selected beans from the world's finest coffee regions, expertly roasted and brewed to perfection.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🥐</div>
            <h3>Fresh Pastries</h3>
            <p>Delicious baked goods made fresh daily, perfect for pairing with your favorite coffee.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏠</div>
            <h3>Cozy Atmosphere</h3>
            <p>A warm, welcoming space perfect for work, study, or catching up with friends over great coffee.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🚚</div>
            <h3>Delivery Service</h3>
            <p>Enjoy our coffee from the comfort of your home with our convenient online ordering and delivery.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta">
        <div className="cta-card">
          <div className="cta-content">
            <h2>Ready to Experience Third Cup?</h2>
            <p>Join our community of coffee lovers and discover your new favorite coffee destination</p>
            <div className="cta-buttons">
              <Link to="/menu" className="btn btn-primary">
                <span>📋 View Our Menu</span>
              </Link>
              <Link to="/order" className="btn btn-secondary">
                <span>🛒 Order Online</span>
              </Link>
              <Link to="/contact" className="btn btn-outline">
                <span>📍 Visit Our Shop</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
