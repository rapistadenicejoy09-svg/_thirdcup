import React, { useState } from 'react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('coffee');

  const menuItems = {
    coffee: [
      { name: 'Espresso', price: 125, description: 'Rich and bold espresso shot.', image: 'espresso.jpeg' },
      { name: 'Cappuccino', price: 175, description: 'Espresso with steamed milk and foam.', image: 'cappuccino.jpeg' },
      { name: 'Latte', price: 200, description: 'Smooth espresso with lots of steamed milk.', image: 'latte.jpeg' },
      { name: 'Mocha', price: 225, description: 'Espresso with chocolate and steamed milk.', image: 'mocha.jpeg' },
      { name: 'Americano', price: 150, description: 'Espresso diluted with hot water.', image: 'americano.jpeg' },
      { name: 'Macchiato', price: 180, description: 'Espresso marked with a dollop of foam.', image: 'macchiato.jpeg' },
      { name: 'Flat White', price: 190, description: 'Velvety steamed milk poured over espresso.', image: 'flatwhite.jpeg' },
      { name: 'Cold Brew', price: 210, description: 'Smooth cold coffee brewed over 12 hours.', image: 'coldbrew.jpeg' },
      { name: 'Affogato', price: 240, description: 'Espresso poured over vanilla ice cream.', image: 'affogato.jpeg' },
      { name: 'Irish Coffee', price: 280, description: 'Hot coffee with whiskey and cream.', image: 'irish_coffee.jpeg' }
    ],
    pastries: [
      { name: 'Croissant', price: 120, description: 'Buttery, flaky French pastry.', image: 'croissant.jpeg' },
      { name: 'Banana Bread', price: 130, description: 'Moist and sweet banana loaf.', image: 'banana_bread.jpeg' },
      { name: 'Cinnamon Roll', price: 140, description: 'Soft roll with cinnamon glaze.', image: 'cinnamon_roll.jpeg' },
      { name: 'Baguette', price: 110, description: 'Classic French crusty bread.', image: 'baguette.jpeg' }
    ]
  };

  const handleAddToOrder = (item) => {
    // This would typically add the item to a cart or order state
    alert(`Added ${item.name} to your order! Navigate to the Order page to complete your purchase.`);
  };

  return (
    <div className="container">
      <section className="menu">
        {/* Menu Navigation */}
        <div className="menu-nav-container">
          <h2>Our Menu</h2>
          <nav className="menu-nav">
            <button 
              className={`menu-nav-btn ${activeCategory === 'coffee' ? 'active' : ''}`}
              onClick={() => setActiveCategory('coffee')}
            >
              ☕ Coffee
            </button>
            <button 
              className={`menu-nav-btn ${activeCategory === 'pastries' ? 'active' : ''}`}
              onClick={() => setActiveCategory('pastries')}
            >
              🥖 Breads & Pastries
            </button>
          </nav>
        </div>

        {/* Menu Section */}
        <div className="menu-category">
          <h3 className="category-title">
            {activeCategory === 'coffee' ? '☕ Coffee Selection' : '🥖 Breads & Pastries'}
          </h3>
          <p className="menu-instruction">Click any item to add it to your order!</p>
          <div className="menu-items">
            {menuItems[activeCategory].map((item, index) => (
              <article 
                key={index}
                className="menu-item"
                onClick={() => handleAddToOrder(item)}
              >
                <div className="item-image">
                  <img src={`${process.env.PUBLIC_URL}/images/${item.image}`} alt={item.name} />
                </div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p className="price">₱{item.price}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
