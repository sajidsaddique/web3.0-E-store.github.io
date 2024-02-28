import React from 'react';
import './About.css'; // Import the CSS file for styles

export const About = () => {
  return (
    <div className="container">
      <div className="about-content">
        <h2>About Our E-Store</h2>
        <p>Welcome to our E-Store! We are dedicated to providing high-quality products and excellent service to our customers.</p>
      </div>
      
      <div className="about-content">
        <h3>Our Mission</h3>
        <p>At our E-Store, our mission is to...</p>
        {/* Add details about your mission */}
      </div>
      
      <div className="about-content">
        <h3>Our Team</h3>
        <p>We have a passionate team of individuals working hard to ensure your satisfaction. Meet our team...</p>
        {/* Add details about your team */}
      </div>
      
      <div className="about-content">
        <h3>Our Values</h3>
        <p>We believe in...</p>
        {/* Add details about your core values */}
      </div>
      
      <div className="about-content">
        <h3>Contact Us</h3>
        <p>If you have any questions or inquiries, feel free to contact us at support@estore.com.</p>
        {/* Add contact information */}
      </div>
    </div>
  );
};
