
import React, {useState}from 'react'
import './Hero.css';
const Hero = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    
    <div className="Hero">
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

            {/* Hero Image */}
            <div className="hero-image"></div>
            <div className="banner"></div> 
        </div>

        {/* Main Container */}
        <div className="main-container">
            <div className="suggestions">
                <div className="suggestion-header">
                    <h3 className="heading">Suggestions</h3>
                </div>
                <div className="suggestion-content">
                    <div id="box">
                        <div className="text">
                        <span>Courier</span>
                        <p>Rideo makes same day item delivery easier than ever.</p>
                        </div>
                        <div className="image">
                            <img src="/Courier.png" alt="courier" />
                        </div>                
                    </div>
                    <div id="box">
                        <div className="text">
                        <span>Ride</span>
                        <p>Rideo takes you whereever and whenever you want to go.</p>
                        </div>
                        <div className="image">
                            <img src="/ride.png" alt="courier" />
                        </div>
                    </div>
                    <div id="box">
                        <div className="text">
                        <span>Eat</span>
                        <p>Rideo takes you whereever and whenever you want to go.</p>
                        </div>
                        <div className="image">
                            <img src="/reserve_clock.png" alt="courier" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-content">
                <div className="location-select">
                    <h1 className="heading">Go anywhere with Rideo</h1>
                </div>
                <div className="map">

                </div>
            </div>
            <div className="drivers">
                <div className="driver-content">
                    <h1 className="heading">Drive when you want, make what you need</h1>
                    <p>Make money on your schedule with deliveries or rides—or both. You can use your own car or choose a rental through rideo.</p>
                
                <div className="buttons">
                    <button>Get started</button>
                    <a href="#">Already have an account? Sign in</a>
                </div>
                </div>
            </div>
            <div className="agent">
                <div className="agent-content">
                    <h1 className="heading">The Uber you know, reimagined for business</h1>
                    <p>Rideo for Business is a platform for managing global rides and meals, and local deliveries, for companies of any size.</p>
                
                <div className="buttons">
                    <button>Get started</button>
                    <a href="#">Check out our solutions</a>
                </div>
                </div>
            </div>
            <div className="product-showcase">
                <div className="product-content">
                    <h1 className="heading">Our annual product showcase is here</h1>
                    <p>Go—Get 2025 is live. Explore all the latest products announced to help make your everyday more flexible, more affordable, and a little easier.</p>
                
                <div className="buttons">
                    <button>Get started</button>
                </div>
                </div>
            </div>
        </div>
        <div className="download-option"></div>
    </div>
  )
}

export default Hero
