// Membership form functionality for Third Cup Coffee Shop

document.addEventListener('DOMContentLoaded', function() {
  const membershipForm = document.getElementById('membershipForm');
  
  if (membershipForm) {
    membershipForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(this);
      const memberData = Object.fromEntries(formData);
      
      // Basic validation
      if (!memberData.email || !memberData.name) {
        alert('Please fill in all required fields.');
        return;
      }
      
      // Simulate form submission
      alert('Thank you for joining our membership program! You will receive a confirmation email shortly.');
      
      // Reset form
      this.reset();
    });
  }
  
  // Handle membership benefits toggle
  const benefitsToggle = document.querySelector('.benefits-toggle');
  if (benefitsToggle) {
    benefitsToggle.addEventListener('click', function() {
      const benefitsList = document.querySelector('.benefits-list');
      if (benefitsList) {
        benefitsList.style.display = benefitsList.style.display === 'none' ? 'block' : 'none';
      }
    });
  }
});

