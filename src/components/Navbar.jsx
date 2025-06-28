import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="App-nav">
      <div className="nav-container">
        <Link to="/" className="nav-brand-stacked" onClick={closeMenu}>
          <span>MAX STEIN</span>
        </Link>
        <div className="nav-links desktop-nav">
          <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>PROJECTS</Link>
          <Link to="/articles" className={location.pathname === '/articles' ? 'active' : ''}>ARTICLES</Link>
          <Link to="/photo" className={location.pathname === '/photo' ? 'active' : ''}>PHOTO</Link>
          <a href="https://example.com/your-resume.pdf" target="_blank" rel="noopener noreferrer">RESUME</a>
        </div>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        <button className="close-mobile-nav" onClick={closeMenu} aria-label="Close menu">&times;</button>
        <Link to="/projects" onClick={closeMenu}>PROJECTS</Link>
        <Link to="/articles" onClick={closeMenu}>ARTICLES</Link>
        <Link to="/photo" onClick={closeMenu}>PHOTO</Link>
        <a href="https://example.com/your-resume.pdf" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>RESUME</a>
      </div>
    </nav>
  );
}

export default Navbar; 