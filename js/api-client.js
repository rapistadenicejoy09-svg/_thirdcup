// API Client for Third Cup Coffee Shop
// This file handles basic API interactions

class ApiClient {
  constructor() {
    this.baseUrl = '/api';
  }

  // Generic fetch method
  async request(endpoint, options = {}) {
    const url = `${this.baseUrl}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options, 
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Contact form submission
  async submitContactForm(formData) {
    return this.request('/contact.php', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  }

  // Newsletter subscription
  async subscribeNewsletter(email) {
    return this.request('/newsletter.php', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  }

  // Order submission
  async submitOrder(orderData) {
    return this.request('/orders.php', {
      method: 'POST',
      body: JSON.stringify(orderData),
    });
  }
}

// Create global instance
window.apiClient = new ApiClient();

