import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="home-hero">
        <div className="hero-background">
          <div
            className="hero-image"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${process.env.PUBLIC_URL}/images/coffee-hero.jpg)`
            }}
          ></div>
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <h1>Welcome to <span className="brand-highlight">Third Cup</span></h1>
            <p className="hero-subtitle">Where every cup tells a story of quality, sustainability, and community</p>
            <p className="hero-description">Experience the finest ethically sourced coffee, expertly roasted and brewed to perfection in the heart of Bean City.</p>
            <div className="hero-buttons">
              <Link to="/menu" className="btn btn-primary hero-btn">
                <span>📋 Explore Our Menu</span>
              </Link>
              <Link to="/order" className="btn btn-secondary hero-btn">
                <span>🛒 Order Online</span>
              </Link>
            </div>
          </div>
          <div className="hero-features">
            <div className="feature-badge">
              <span className="badge-icon">🌱</span>
              <span className="badge-text">Ethically Sourced</span>
            </div>
            <div className="feature-badge">
              <span className="badge-icon">☕</span>
              <span className="badge-text">Fresh Roasted Daily</span>
            </div>
            <div className="feature-badge">
              <span className="badge-icon">🏆</span>
              <span className="badge-text">Award Winning</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        {/* Features Section */}
        <section className="home-features">
          <div className="features-header">
            <h2>Why Choose Third Cup?</h2>
            <p>Discover what makes us Bean City's favorite coffee destination</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">☕</div>
              <h3>Premium Quality</h3>
              <p>Hand-selected beans from the world's finest coffee regions, roasted to perfection by our expert team.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌍</div>
              <h3>Sustainable Sourcing</h3>
              <p>We work directly with farmers to ensure fair trade practices and environmental sustainability.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Expert Craftsmanship</h3>
              <p>Our skilled baristas create beautiful latte art and perfect flavor profiles in every cup.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏠</div>
              <h3>Cozy Atmosphere</h3>
              <p>A warm, welcoming space perfect for work, study, or catching up with friends over great coffee.</p>
            </div>
          </div>
        </section>

        {/* Popular Items Section */}
        <section className="home-popular">
          <div className="popular-header">
            <h2>Customer Favorites</h2>
            <p>Try our most loved drinks and pastries</p>
          </div>
          <div className="popular-grid">
            <div className="popular-item">
              <div className="item-image">
                <img src={`${process.env.PUBLIC_URL}/images/latte.jpeg`} alt="Signature Latte" />
              </div>
              <div className="item-info">
                <h3>Signature Latte</h3>
                <p>Our house blend with perfectly steamed milk and beautiful latte art</p>
                <div className="item-price">₱200</div>
              </div>
            </div>
            <div className="popular-item">
              <div className="item-image">
                <img src={`${process.env.PUBLIC_URL}/images/croissant.jpeg`} alt="Fresh Croissant" />
              </div>
              <div className="item-info">
                <h3>Fresh Croissant</h3>
                <p>Buttery, flaky French pastry baked fresh every morning</p>
                <div className="item-price">₱120</div>
              </div>
            </div>
            <div className="popular-item">
              <div className="item-image">
                <img src={`${process.env.PUBLIC_URL}/images/coldbrew.jpeg`} alt="Cold Brew" />
              </div>
              <div className="item-info">
                <h3>Cold Brew</h3>
                <p>Smooth, refreshing coffee brewed slowly over 12 hours</p>
                <div className="item-price">₱210</div>
              </div>
            </div>
          </div>
          <div className="popular-cta">
            <Link to="/menu" className="btn btn-outline">
              <span>📋 View Full Menu</span>
            </Link>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="home-testimonials">
          <div className="testimonials-header">
            <h2>What Our Customers Say</h2>
            <p>Real reviews from our coffee-loving community</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
              <p>"The best coffee in Bean City! The atmosphere is perfect for working, and the baristas really know their craft."</p>
              <div className="testimonial-author">
                <div className="author-avatar">👩‍💼</div>
                <div className="author-info">
                  <div className="author-name">Sarah Johnson</div>
                  <div className="author-title">Regular Customer</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
              <p>"Love the sustainable approach and the quality is outstanding. My morning latte is always perfect!"</p>
              <div className="testimonial-author">
                <div className="author-avatar">👨‍💻</div>
                <div className="author-info">
                  <div className="author-name">Mike Chen</div>
                  <div className="author-title">Coffee Enthusiast</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
              <p>"Third Cup has become my second home. Great coffee, friendly staff, and the perfect place to meet friends."</p>
              <div className="testimonial-author">
                <div className="author-avatar">👩‍🎨</div>
                <div className="author-info">
                  <div className="author-name">Emma Rodriguez</div>
                  <div className="author-title">Local Artist</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="home-cta">
          <div className="cta-card">
            <div className="cta-content">
              <h2>Ready for Your Perfect Cup?</h2>
              <p>Join thousands of satisfied customers who start their day with Third Cup</p>
              <div className="cta-stats">
                <div className="cta-stat">
                  <span className="stat-number">5000+</span>
                  <span className="stat-label">Happy Customers</span>
                </div>
                <div className="cta-stat">
                  <span className="stat-number">15</span>
                  <span className="stat-label">Coffee Varieties</span>
                </div>
                <div className="cta-stat">
                  <span className="stat-number">6</span>
                  <span className="stat-label">Years of Excellence</span>
                </div>
              </div>
              <div className="cta-buttons">
                <Link to="/order" className="btn btn-primary">
                  <span>🛒 Order Now</span>
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  <span>📍 Visit Our Shop</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
