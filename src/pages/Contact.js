import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [activeSection, setActiveSection] = useState('contact-info');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="container">
      {/* Contact Header */}
      <section className="contact-header">
        <div className="contact-hero">
          <h1>📞 Get In Touch</h1>
          <p>We'd love to hear from you! Whether it's a question, feedback, or general inquiry, we're here to help.</p>
        </div>
        <div className="contact-highlights">
          <div className="highlight-card">
            <div className="highlight-icon">⚡</div>
            <h3>Quick Response</h3>
            <p>We respond to all inquiries within 24 hours</p>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">☕</div>
            <h3>Coffee Experts</h3>
            <p>Our team knows everything about great coffee</p>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">🤝</div>
            <h3>Friendly Service</h3>
            <p>We're committed to excellent customer service</p>
          </div>
        </div>
      </section>

      <div className="contact-layout">
        {/* Contact Sidebar Navigation */}
        <aside className="contact-sidebar">
          <div className="sidebar-header">
            <h3>Contact Options</h3>
            <p>Choose your preferred way to reach us</p>
          </div>

          <nav className="sidebar-nav">
            <button 
              className={`sidebar-link ${activeSection === 'contact-info' ? 'active' : ''}`}
              onClick={() => setActiveSection('contact-info')}
            >
              <div className="link-icon">📞</div>
              <div className="link-content">
                <div className="link-title">Call Us</div>
                <div className="link-desc">Speak directly with our team</div>
              </div>
            </button>

            <button 
              className={`sidebar-link ${activeSection === 'contact-form' ? 'active' : ''}`}
              onClick={() => setActiveSection('contact-form')}
            >
              <div className="link-icon">📝</div>
              <div className="link-content">
                <div className="link-title">Send Message</div>
                <div className="link-desc">Fill out our contact form</div>
              </div>
            </button>

            <button 
              className={`sidebar-link ${activeSection === 'social-media' ? 'active' : ''}`}
              onClick={() => setActiveSection('social-media')}
            >
              <div className="link-icon">💬</div>
              <div className="link-content">
                <div className="link-title">Social Media</div>
                <div className="link-desc">Follow us online</div>
              </div>
            </button>

            <button 
              className={`sidebar-link ${activeSection === 'support-faq' ? 'active' : ''}`}
              onClick={() => setActiveSection('support-faq')}
            >
              <div className="link-icon">❓</div>
              <div className="link-content">
                <div className="link-title">FAQ & Support</div>
                <div className="link-desc">Quick answers & help</div>
              </div>
            </button>
          </nav>
        </aside>

        {/* Contact Content */}
        <div className="contact-content">
          {/* Contact Information */}
          {activeSection === 'contact-info' && (
            <section className="contact-info-section">
              <div className="contact-info-grid">
                <div className="info-card contact-essentials">
                  <h3>📞 Get In Touch</h3>
                  <div className="contact-methods-compact">
                    <div className="contact-method-compact">
                      <span className="method-icon">📞</span>
                      <div className="method-info">
                        <strong><a href="tel:+1234567890">(123) 456-7890</a></strong>
                        <small>Available during business hours</small>
                      </div>
                    </div>
                    <div className="contact-method-compact">
                      <span className="method-icon">✉️</span>
                      <div className="method-info">
                        <strong><a href="mailto:hello@thirdcup.com">hello@thirdcup.com</a></strong>
                        <small>We respond within 24 hours</small>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="info-card location-hours">
                  <h3>📍 Visit Us</h3>
                  <div className="location-compact">
                    <p><strong>123 Coffee Street, Bean City</strong></p>
                    <p className="location-desc">Heart of downtown, 2 blocks from main plaza</p>
                  </div>
                  <div className="hours-compact">
                    <p><strong>🕒 Hours:</strong> Mon-Fri 6AM-10PM, Weekends 7AM-11PM</p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Contact Form */}
          {activeSection === 'contact-form' && (
            <section className="contact-form-section">
              <div className="form-card">
                <h2>💬 Send Us a Message</h2>
                <p>Fill out the form below and we'll get back to you as soon as possible.</p>

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(123) 456-7890 (Optional)"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject">Subject *</label>
                      <select 
                        id="subject" 
                        name="subject" 
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Choose a subject</option>
                        <option value="general-inquiry">💬 General Inquiry</option>
                        <option value="feedback">⭐ Feedback</option>
                        <option value="complaint">⚠️ Complaint</option>
                        <option value="suggestion">💡 Suggestion</option>
                        <option value="catering">🎉 Catering Inquiry</option>
                        <option value="partnership">🤝 Partnership</option>
                        <option value="other">📝 Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Your Message *</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="6" 
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button type="submit" className="btn btn-primary submit-btn">
                    <span>📤 Send Message</span>
                  </button>
                </form>
              </div>
            </section>
          )}

          {/* Social Media Section */}
          {activeSection === 'social-media' && (
            <section className="social-media-section">
              <div className="info-card">
                <h2>💬 Follow Us on Social Media</h2>
                <p>Stay connected and get the latest updates, special offers, and coffee tips!</p>
                <div className="social-links">
                  <a href="#" className="social-link facebook">
                    <span className="social-icon">📘</span>
                    <div className="social-info">
                      <div className="social-name">Facebook</div>
                      <div className="social-handle">@ThirdCupCoffee</div>
                    </div>
                  </a>
                  <a href="#" className="social-link instagram">
                    <span className="social-icon">📷</span>
                    <div className="social-info">
                      <div className="social-name">Instagram</div>
                      <div className="social-handle">@thirdcupcoffee</div>
                    </div>
                  </a>
                  <a href="#" className="social-link twitter">
                    <span className="social-icon">🐦</span>
                    <div className="social-info">
                      <div className="social-name">Twitter</div>
                      <div className="social-handle">@ThirdCupCoffee</div>
                    </div>
                  </a>
                </div>
              </div>
            </section>
          )}

          {/* FAQ Section */}
          {activeSection === 'support-faq' && (
            <section className="support-faq-section">
              <div className="info-card">
                <h2>❓ Frequently Asked Questions</h2>
                <div className="faq-list">
                  <div className="faq-item">
                    <h4>What are your operating hours?</h4>
                    <p>We're open Monday to Sunday, 7:00 AM to 9:00 PM. We're here to serve you fresh coffee throughout the day!</p>
                  </div>
                  <div className="faq-item">
                    <h4>Do you offer delivery services?</h4>
                    <p>Yes! We offer delivery through our online ordering system. Free delivery for orders over ₱500, or ₱50 delivery fee for smaller orders.</p>
                  </div>
                  <div className="faq-item">
                    <h4>Can I customize my coffee order?</h4>
                    <p>Absolutely! We can adjust sweetness, milk type, temperature, and add extra shots. Just let us know your preferences when ordering.</p>
                  </div>
                  <div className="faq-item">
                    <h4>Do you have a loyalty program?</h4>
                    <p>Yes! Join our membership program to earn points, get discounts, and enjoy exclusive perks.</p>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
