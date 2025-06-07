
import React, {useState}from 'react'
import './Hero.css';
const Hero = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    
    <div className="Hero">
        <div className="header">
            <div className="header-container">
                <h1 className="heading">Find Your Perfect Ride <br/> at the Right Price</h1>
                <p className='sub-head'>Set your price range, browse available cars and book a ride in just few clicks.
                    Comfort and convinience tailored to your budget.
                </p>
                <div className="button">
                    <button>Download App</button>
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
                            <img src="/public/courier.png" alt="courier" />
                        </div>               
                        <div className="box-buttton">
                            <button>Details</button>
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
                        <div className="box-butttons">
                            <button>Details</button>
                        </div>
                    </div>
                    <div id="box">
                        <div className="text">
                        <span>Eat</span>
                        <p>Rideo takes you whereever and whenever you want to go.</p>
                        </div>
                        <div className="image">
                            <img src="/french-fries.png" alt="courier" id='png-icon'/>
                        </div>
                        <div className="box-buttton">
                            <button>Details</button>
                        </div>
                    </div>
                    <div id="box">
                        <div className="text">
                        <span>Reserve</span>
                        <p>Reserve your ride in advance so you can relax on the day of your trip.</p>
                        </div>
                        <div className="image">
                            <img src="/public/reserve_clock.png"  alt="courier" />
                        </div>
                        <div className="box-buttton">
                            <button>Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="main-content">
            <div className="location-select">
                <h1 className="heading">Go anywhere with Rideo</h1>
                <p>Request a ride, <span>get picked up in minutes</span>.</p>
            </div>
            <div className="map">    
                <div className="location">
                    <div className="input-with-icon">
                        <svg className="i" id='dot' fill="#000000" width="10px" height="64px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>alt-circle</title> <path d="M0 16q0-3.232 1.28-6.208t3.392-5.12 5.12-3.392 6.208-1.28q3.264 0 6.24 1.28t5.088 3.392 3.392 5.12 1.28 6.208q0 3.264-1.28 6.208t-3.392 5.12-5.12 3.424-6.208 1.248-6.208-1.248-5.12-3.424-3.392-5.12-1.28-6.208zM8 16q0 3.328 2.336 5.664t5.664 2.336 5.664-2.336 2.336-5.664-2.336-5.632-5.664-2.368-5.664 2.368-2.336 5.632z"></path> </g></svg>
                        <input type="text" placeholder='Enter pickup location' />
                        <svg className="r" width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M20.8103 5.94919C21.5951 4.19841 19.8016 2.40485 18.0508 3.18969L3.64527 9.64735C1.52435 10.5981 1.43336 13.5756 3.49228 14.6541L6.508 16.2337C7.04568 16.5154 7.48464 16.9543 7.76628 17.492L9.34594 20.5077C10.4244 22.5666 13.4019 22.4757 14.3527 20.3547L20.8103 5.94919Z" fill="#000000"></path> </g></svg>
                    </div>
                        <div className="input-with-icon">
                            <svg className="r" id='pin' fill="#000000" width="20px" height="30px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>pin</title> <path d="M4 12q0-3.264 1.6-6.016t4.384-4.352 6.016-1.632 6.016 1.632 4.384 4.352 1.6 6.016q0 1.376-0.672 3.2t-1.696 3.68-2.336 3.776-2.56 3.584-2.336 2.944-1.728 2.080l-0.672 0.736q-0.256-0.256-0.672-0.768t-1.696-2.016-2.368-3.008-2.528-3.52-2.368-3.84-1.696-3.616-0.672-3.232zM8 12q0 3.328 2.336 5.664t5.664 2.336 5.664-2.336 2.336-5.664-2.336-5.632-5.664-2.368-5.664 2.368-2.336 5.632z"></path> </g></svg>
                            <input type="text" placeholder='Enter pickup location' />
                            <svg className="i" fill="#000000" width="20px" height="64px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M3,20V4A1,1,0,0,1,4,3H20a1,1,0,0,1,1,1V20a1,1,0,0,1-1,1H4A1,1,0,0,1,3,20Z"></path></g></svg>
                        </div>
                        <div className="set-button-content">
                            <button>See Prices</button>
                            <a href="#">Log in to see your recent activity</a>
                        </div>
                    </div>
                </div>
            </div>    
        <div className="features">
            <div className="drivers">
                <div className="driver-content">
                    <div className="text-content">
                        <h1 className="heading">Drive when you want, make what you need</h1>
                        <p>Make money on your schedule with deliveries or rides—or both. You can use your own car or choose a rental through rideo.</p>
                </div>
                    <div className="buttons">
                        <button>Get started</button>
                        <a href="#">Already have an account? Sign in</a>
                    </div>
                
                </div>
                <div className="image-content"></div>
            </div>
            <div className="agent">
                <div className="agent-content">
                    <div className="text-content">
                        <h1 className="heading">The Uber you know, reimagined for business</h1>
                        <p>Rideo for Business is a platform for managing global rides and meals, and local deliveries, for companies of any size.</p>
                    </div>
                
                    <div className="buttons">
                        <button>Get started</button>
                        <a href="#">Check out our solutions</a>
                    </div>
                </div>
                <div className="image-content"></div>
            </div>
            <div className="financial">
                <div className="financial-content">
                    <div className="text-content">
                        <h1 className="heading">Our annual product showcase is here</h1>
                        <p>Go—Get 2025 is live. Explore all the latest products announced to help make your everyday more flexible, more affordable, and a little easier.</p>
                </div>
                    <div className="buttons">
                        <button>Discover what's new</button>
                    </div>
                </div>
                <div className="image-content"></div>
            </div>
        </div>
        <div className="download-option">
            <div className="download-content">
                <h1 className="heading">It's easier in the apps</h1>
                <div className="d-box">
                    <div id="box">
                        <div className="download-image"></div>
                        <h3>Download the Rideo app</h3>
                    </div>
                    <div className="icon">
                        <svg width="30px" height="64px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="#000000"></path></g></svg>
                    </div>
                </div>
                <div className="d-box">
                    <div id="box">
                        <div className="download-image"></div>
                        <h3>Download the Driver app</h3>
                    </div>
                    <div className="icon">
                        <svg width="30px" height="64px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="#000000"></path></g></svg>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Hero
