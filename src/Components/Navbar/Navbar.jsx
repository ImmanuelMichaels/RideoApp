import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false); // for accordion

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleAbout = () => setAboutOpen(!aboutOpen);

  return (
    <div className='Navbar'>
      <div className="nav-section">
        <div className="nav-container">
          <div className="logo">
            <img src="/logo.JPG" alt="logo" />
          </div>

          <div className="account-button">
            <button id='login-button'>Log in</button>
            <button id='signup-button'>Sign up</button>
          </div>

          <div className="hamburger" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/rider">Drive</Link></li>
          <li><Link to="/how-it-works">Rideo Eats</Link></li>

          <li className="accordion-item">
            <div className="accordion-header" onClick={toggleAbout}>
              <span>About</span>
              <span className={`arrow ${aboutOpen ? 'rotate' : ''}`}>&#9660;</span>
            </div>
            {aboutOpen && (
              <ul className="accordion-content">
                <li><Link to="/company">Company</Link></li>
                <li><Link to="/team">Our Offering</Link></li>
                <li><Link to="/how-it-works">How Rideo Works</Link></li>
                <li><Link to="/sustainability">Sustainability</Link></li>
                <li><Link to="/explore">Explore</Link></li>
                <li><Link to="/newsroom">Newsroom</Link></li>
                <li><Link to="/investor">Investor Relations</Link></li>
                <li><Link to="/autonomous">Autonomous</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/careers">Careers</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/support">Help</Link></li>
          <li className="nav-button">
            <button>Download app</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
