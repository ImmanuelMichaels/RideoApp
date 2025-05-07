import React from 'react'
import './Hero.css';
const Hero = () => {
  return (
    <div className="Hero">
        <div className="nav-section">
            <div className="nav-container">
                <div className="logo">
                    <img src="/logo.JPG" alt="logo" />
                </div>

                <ul className='nav-links'>
                    <li>Home </li> <span>|</span>
                    <li>Become a rider </li><span>|</span>
                    <li>How it works </li><span>|</span>
                    <li>Pricing Range</li><span>|</span>
                    <li>Support</li>
                </ul>

                <div className="button">
                    <button>Download app</button>
                </div>
            </div>
        </div>
        <div className="header">
            <div className="header-container">
                <h1 className="heading">Find Your Perfect Ride at the Right Price</h1>
                <p className='sub-head'>Set your price range, browse available cars and book a ride in just few clicks.
                    Comfort and convinience tailored to your budget.
                </p>
                <div className="button">
                    <button>Download app</button>
                </div>
            </div>
            <div className="hero-image">
            </div>
        </div>
    </div>
  )
}

export default Hero
