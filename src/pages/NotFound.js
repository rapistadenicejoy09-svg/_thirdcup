import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container">
      <section className="not-found">
        <div className="not-found-content">
          <div className="error-code">404</div>
          <h1>Oops! Page Not Found</h1>
          <p>Sorry, the page you're looking for doesn't exist or has been moved.</p>
          <div className="not-found-actions">
            <Link to="/" className="btn btn-primary">
              <span>🏠 Go Home</span>
            </Link>
            <Link to="/menu" className="btn btn-secondary">
              <span>☕ Browse Menu</span>
            </Link>
          </div>
        </div>
        <div className="not-found-illustration">
          <div className="coffee-cup">☕</div>
          <div className="steam">💨</div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;

