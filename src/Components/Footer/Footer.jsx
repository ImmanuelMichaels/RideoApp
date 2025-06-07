import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    
    <div className="footer-container">
        <h3>Rideo</h3>
        <a href="#">Visit Help Center</a>

        <div className="footer-content">
            <div className="footer-links">
                <h3>Company</h3>
                <a href="#">About Us</a>
                <a href="#">Our offerings</a>
                <a href="#">Newsroom</a>
                <a href="#">Investor</a>
                <a href="#">Blog</a>
            </div>
            <div className="footer-links">
                <h3>Products</h3>
                <a href="#">Ride</a>
                <a href="#">Drive</a>
                <a href="#">Eat</a>
                <a href="#">Rideo freight</a>
                <a href="#">Gift card</a>
            </div>
            <div className="footer-links">
                <h3>Global citizenship</h3>
                <a href="#">Safety</a>
                <a href="#">Sustainability</a>
            </div>
            <div className="footer-links">
                <h3>Travel</h3>
                <a href="#">Reserve</a>
                <a href="#">Airports</a>
                <a href="#">Cities</a>
            </div>
        </div>
    </div>
  )
}

export default Footer
