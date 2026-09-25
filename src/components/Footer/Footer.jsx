import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-left">
          <h2 className="footer-logo">Yappers</h2>
          <p className="footer-desc">
            Chhatarpur's friendly community for offline walks & talks.
          </p>
        </div>

        <div className="footer-center">
          <a href="https://instagram.com/yappersclub" className="footer-social">@yappersclub</a>
          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#join">Join</a>
          </div>
        </div>

        <div className="footer-right">
          <p>&copy; 2025 Yappers Club Chhatarpur. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
