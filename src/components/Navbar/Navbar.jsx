import React, { useState } from 'react';
import './Navbar.css';
import Button from '../Button/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="#home">
            <span className="logo-text">Yappers</span>
          </a>
        </div>

        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#meetups" onClick={() => setIsOpen(false)}>Meetups</a>
          <a href="#moments" onClick={() => setIsOpen(false)}>Moments</a>
          <a href="#join" onClick={() => setIsOpen(false)}>Join</a>
        </div>

        <div className="navbar-action">
          <Button variant="white">Join Club &rarr;</Button>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
