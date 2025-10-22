import React, { useState, useRef } from 'react';

const Order = () => {
  const [orderItems, setOrderItems] = useState([]);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    contact: '',
    address: ''
  });
  const formRef = useRef(null);

  const menuItems = {
    drinks: [
      { name: 'Espresso', price: 125, image: 'espresso.jpeg' },
      { name: 'Cappuccino', price: 175, image: 'cappuccino.jpeg' },
      { name: 'Latte', price: 200, image: 'latte.jpeg' },
      { name: 'Mocha', price: 225, image: 'mocha.jpeg' },
      { name: 'Americano', price: 150, image: 'americano.jpeg' },
      { name: 'Macchiato', price: 180, image: 'macchiato.jpeg' },
      { name: 'Flat White', price: 190, image: 'flatwhite.jpeg' },
      { name: 'Cold Brew', price: 210, image: 'coldbrew.jpeg' },
      { name: 'Affogato', price: 240, image: 'affogato.jpeg' },
      { name: 'Irish Coffee', price: 280, image: 'irish_coffee.jpeg' }
    ],
    pastries: [
      { name: 'Croissant', price: 120, image: 'croissant.jpeg' },
      { name: 'Banana Bread', price: 130, image: 'banana_bread.jpeg' },
      { name: 'Cinnamon Roll', price: 140, image: 'cinnamon_roll.jpeg' },
      { name: 'Baguette', price: 110, image: 'baguette.jpeg' }
    ]
  };

  const addToOrder = (item, category) => {
    const newItem = {
      id: Date.now(),
      name: item.name,
      price: item.price,
      category: category,
      quantity: 1,
      image: item.image || null
    };
    setOrderItems([...orderItems, newItem]);
  };

  const removeFromOrder = (id) => {
    setOrderItems(orderItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromOrder(id);
      return;
    }
    setOrderItems(orderItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const getTotalPrice = () => {
    return orderItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleCustomerInfoChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    if (orderItems.length === 0) {
      alert('Please add items to your order!');
      return;
    }
    alert('Order placed successfully! You will receive a confirmation soon.');
    setOrderItems([]);
    setCustomerInfo({ name: '', contact: '', address: '' });
  };

  return (
    <div className="container">
      {/* Order Header */}
      <section className="order-header">
        <div className="order-title order-title-card">
          <h1>🛒 Place Your Order</h1>
          <p>Create your perfect coffee experience with our fresh drinks and pastries</p>
        </div>
        <div className="order-summary-card">
          <h3>📋 Order Summary</h3>
          <div className="order-summary">
            {orderItems.length === 0 ? (
              <p className="empty-cart">Your cart is empty</p>
            ) : (
              <div className="order-items">
                {orderItems.map(item => (
                  <div key={item.id} className="order-item">
                    {item.image && (
                      <div className="order-thumb">
                        <img src={`${process.env.PUBLIC_URL}/images/${item.image}`} alt={item.name} />
                      </div>
                    )}
                    <div className="item-details">
                      <span className="item-name">{item.name}</span>
                      <span className="item-price">₱{item.price}</span>
                    </div>
                    <div className="quantity-controls">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="qty-btn"
                      >-</button>
                      <span className="quantity">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="qty-btn"
                      >+</button>
                    </div>
                    <button 
                      onClick={() => removeFromOrder(item.id)}
                      className="remove-btn"
                    >🗑️</button>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="total-section">
            <div className="total-price">Total: <span>₱{getTotalPrice()}</span></div>
            <button
              type="button"
              className="btn btn-secondary summary-checkout-btn"
              onClick={() => formRef.current && formRef.current.requestSubmit()}
              disabled={orderItems.length === 0}
            >
              <span>🛍️ Place Order</span>
            </button>
          </div>
        </div>
      </section>

      <div className="order-layout">
        {/* Order Form */}
        <section className="order-form-section">
          <form ref={formRef} onSubmit={handleSubmitOrder} className="order-form">
            {/* Customer Information */}
            <div className="form-section">
              <h2>👤 Customer Information</h2>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={customerInfo.name}
                    onChange={handleCustomerInfoChange}
                    required 
                    placeholder="Enter your full name" 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact">Contact Number *</label>
                  <input 
                    type="tel" 
                    id="contact" 
                    name="contact" 
                    value={customerInfo.contact}
                    onChange={handleCustomerInfoChange}
                    required 
                    placeholder="09XX-XXX-XXXX" 
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="address">Delivery Address *</label>
                <textarea 
                  id="address" 
                  name="address" 
                  rows="3" 
                  value={customerInfo.address}
                  onChange={handleCustomerInfoChange}
                  required 
                  placeholder="Enter your complete delivery address"
                />
                <small>Please provide a complete address for accurate delivery</small>
              </div>
            </div>

            {/* Drinks Section */}
            <div className="form-section">
              <h2>☕ Select Drinks</h2>
              <div className="menu-grid">
                {menuItems.drinks.map((item, index) => (
                  <div key={index} className="menu-item-card">
                    <div className="menu-item-thumb">
                      <img src={`${process.env.PUBLIC_URL}/images/${item.image}`} alt={item.name} />
                    </div>
                    <div className="item-info">
                      <h3>{item.name}</h3>
                      <p className="item-price">₱{item.price}</p>
                    </div>
                    <button 
                      type="button"
                      onClick={() => addToOrder(item, 'drink')}
                      className="btn btn-secondary add-to-order-btn"
                    >
                      Add to Order
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Pastries Section */}
            <div className="form-section">
              <h2>🥐 Select Pastries</h2>
              <div className="menu-grid">
                {menuItems.pastries.map((item, index) => (
                  <div key={index} className="menu-item-card">
                    <div className="menu-item-thumb">
                      <img src={`${process.env.PUBLIC_URL}/images/${item.image}`} alt={item.name} />
                    </div>
                    <div className="item-info">
                      <h3>{item.name}</h3>
                      <p className="item-price">₱{item.price}</p>
                    </div>
                    <button 
                      type="button"
                      onClick={() => addToOrder(item, 'pastry')}
                      className="btn btn-secondary add-to-order-btn"
                    >
                      Add to Order
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Submit Section */}
            <div className="form-section submit-section">
              <div className="order-total">
                <h3>Order Total: <span>₱{getTotalPrice()}</span></h3>
              </div>
              <p className="form-note">
                By placing this order, you agree to our terms and conditions.
                You will receive a confirmation once your order is processed.
              </p>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Order;

