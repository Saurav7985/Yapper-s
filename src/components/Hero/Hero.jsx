import React from 'react';
import './Hero.css';
import Button from '../Button/Button';
import heroImage from '../../assets/images/hero-community.jpg';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        
        <div className="hero-content">
          <div className="hero-badge">YOUTH SOCIAL CLUB</div>
          
          <h1 className="hero-title">
            Meet. Walk.<br />
            <span className="hero-title-highlight">Talk. Connect.</span>
          </h1>
          
          <p className="hero-description">
            Chhatarpur's friendly community bringing young minds together for scenic weekend walks, lawn games, cafe talks, and genuine offline conversations.
          </p>
          
          <div className="hero-buttons">
            <Button variant="primary">Join This Weekend &rarr;</Button>
            <Button variant="secondary">See Upcoming Walks &darr;</Button>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-value">500+</span>
              <span className="stat-label">Local Friends</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">35+</span>
              <span className="stat-label">Meetups Hosted</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">100%</span>
              <span className="stat-label">Good Vibes</span>
            </div>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-image-card">
            {/* Placeholder image representation */}
            <img 
              src= "https://plus.unsplash.com/premium_photo-1784158021298-cfd7dbea8dba?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Community gathering" 
              className="hero-img"
            />
            
            <div className="hero-floating-card">
              <h3 className="floating-card-title">Sunday Walk &amp; Talk Crew</h3>
              <p className="floating-card-location">Panma Road, Chhatarpur</p>
              <div className="floating-card-badge">OPEN INVITE</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
