import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen); 

  return (
    <div className='Navbar'>
      <div className="nav-section">
        <div className="nav-container">
          <div className="logo">
            <img src="/logo.JPG" alt="logo" />
          </div>

          {/* Hamburger Icon */}
          <div className="hamburger" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>

          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li><Link to="/">Home</Link></li> <span>|</span>
            <li><Link to="/rider">Become a rider</Link></li><span>|</span>
            <li><Link to="/how-it-works">How it works</Link></li><span>|</span>
            <li><Link to="/pricing">Pricing Range</Link></li><span>|</span>
            <li><Link to="/support">Support</Link></li>
          </ul>

          <div className="button nav-button">
            <button>Download app</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
