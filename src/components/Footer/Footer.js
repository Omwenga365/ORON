import React from 'react';
import './Footer.css'; // Assuming you have a Footer.css for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>VISION: Produce transformed and educated children, adolescents, and teenagers living with hope and opportunity for a better future in a world where residents of Ongata Rongai live without poverty and have access to decent living standards.</p>
          <p>MISSION: To work with children, adolescents, and teenagers from disadvantaged backgrounds to eradicate poverty through education, mentorship, and counseling with the goal of making a positive difference in their lives and contributing to the community’s sustainable development and well-being.</p>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Programs</a></li>
            <li><a href="#">Get Involved</a></li>
            <li><a href="#">News & Events</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section contact-form">
          <h2>Contact Us</h2>
          <form action="#">
            <input type="email" name="email" className="text-input contact-input" placeholder="Your email address..." />
            <textarea rows="4" name="message" className="text-input contact-input" placeholder="Your message..."></textarea>
            <button type="submit" className="btn btn-big">
              <i className="fas fa-envelope"></i>
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; O.R.O.N {new Date().getFullYear()}. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
