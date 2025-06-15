
import React, {useState, useEffect}from 'react'
import './Hero.css';
const Hero = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [mode, setMode] = useState('ride');
    const [rideDate, setRideDate] = useState('');
    const [rideTime, setRideTime] = useState('');

    useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setRideDate(today);
  }, []);

  const timeOptions = [
    { value: '', label: 'Select Time' },
    { value: 'now', label: 'Now' },
    { value: '06:00', label: '6:00 AM' },
    { value: '06:30', label: '6:30 AM' },
    { value: '07:00', label: '7:00 AM' },
    { value: '07:30', label: '7:30 AM' },
    { value: '08:00', label: '8:00 AM' },
    { value: '08:30', label: '8:30 AM' },
    { value: '09:00', label: '9:00 AM' },
    { value: '09:30', label: '9:30 AM' },
    { value: '10:00', label: '10:00 AM' },
    { value: '10:30', label: '10:30 AM' },
    { value: '11:00', label: '11:00 AM' },
    { value: '11:30', label: '11:30 AM' },
    { value: '12:00', label: '12:00 PM' },
    { value: '12:30', label: '12:30 PM' },
    { value: '13:00', label: '1:00 PM' },
    { value: '13:30', label: '1:30 PM' },
    { value: '14:00', label: '2:00 PM' },
    { value: '14:30', label: '2:30 PM' },
    { value: '15:00', label: '3:00 PM' },
    { value: '15:30', label: '3:30 PM' },
    { value: '16:00', label: '4:00 PM' },
    { value: '16:30', label: '4:30 PM' },
    { value: '17:00', label: '5:00 PM' },
    { value: '17:30', label: '5:30 PM' },
    { value: '18:00', label: '6:00 PM' },
    { value: '18:30', label: '6:30 PM' },
    { value: '19:00', label: '7:00 PM' },
    { value: '19:30', label: '7:30 PM' },
    { value: '20:00', label: '8:00 PM' },
    { value: '20:30', label: '8:30 PM' },
    { value: '21:00', label: '9:00 PM' },
    { value: '21:30', label: '9:30 PM' },
    { value: '22:00', label: '10:00 PM' },
    { value: '22:30', label: '10:30 PM' },
    { value: '23:00', label: '11:00 PM' },
    { value: '23:30', label: '11:30 PM' }
  ];

  const today = new Date().toISOString().split('T')[0];

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

        </div>
            {/* Hero Image */}
            <div className="hero-image"></div>
            <div className="banner"></div> 

        {/* suggestions */}
        <div className="suggested-container" id='second-container'>
            <div className="suggested-content" id="second-content">
                <h2 className="heading" id='heading'>Suggestions</h2>
              <div className="suggested-details">
                <ul className='list'>
                    <li className="list-item">
                      <a href="" className="item-link">
                        <div className="item">
                          <h3 className="item-head">Courier</h3>
                            <p className="item-sub">Rideo makes same day item delivery easier than ever.</p>
                            <div className="item-btn">
                              <button>Details</button>
                            </div>
                          </div>
                       </a>
                          <div className="item-image">
                            <img src="/courier.png" alt="courier" />
                          </div>
                    </li>
                    <li className="list-item">
                      <a href="" className="item-link">
                        <div className="item">
                          <h3 className="item-head">Courier</h3>
                            <p className="item-sub">Rideo takes you whereever you want to go.</p>
                              <div className="item-btn">
                                <button>Details</button>
                              </div>
                            </div>
                      </a>
                            <div className="item-image">
                                <img src="/ride.png" alt="courier" />
                            </div>
                    </li>
                    <li className="list-item">
                      <a href="" className="item-link">
                        <div className="item">
                            <h3 className="item-head">Eat</h3>
                            <p className="item-sub">Rideo takes you whereever and whenever you want to go.</p>
                          <div className="item-btn">
                            <button>Details</button>
                          </div>
                        </div>
                      </a>
                        <div className="item-image">
                          <img src="/french-fries.png" alt="courier" id='fries' />
                        </div>
                    </li>
                </ul>
              </div>
            </div>
        </div>

        {/* trip booking */}

        <div className="location-container" id='section-container'>
          <div className="location-flex" id='section-flex'>
            <div className="location-boxes">
              {/* Heading Changes Based on Mode */}
              <div className="location-content">
                <h1 className="heading">
                  {mode === "ride" ? "Go anywhere with Rideo" : "Deliver a packages"}
                </h1>
                <p>
                  {mode === "ride"
                    ? "Request a ride, get picked up in minutes."
                    : "Request a delivery, get it picked up in minutes."}
                </p>
              </div>

              {/* Mode Switch Buttons */}
              <div className="mode-switch">
                <button
                  className={mode === "ride" ? "active" : ""}
                  onClick={() => setMode("ride")}
                >
                  <img src="/car.png" alt="" id='small-icon'/>
                </button>
                <button
                  className={mode === "courier" ? "active" : ""}
                  onClick={() => setMode("courier")}
                >
                  <img src="/box.png" alt="" id='small-icon' />
                </button>
              </div>

              {/* Conditional Form Rendering */}
              <div className="map">
                <div className="location">
                  <div className="input-with-icon">
                    <svg className="i" fill="#000000" width="10px" height="64px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <title>alt-circle</title>
                        <path d="M0 16q0-3.232 1.28-6.208t3.392-5.12 5.12-3.392 6.208-1.28q3.264 0 6.24 1.28t5.088 3.392 3.392 5.12 1.28 6.208q0 3.264-1.28 6.208t-3.392 5.12-5.12 3.424-6.208 1.248-6.208-1.248-5.12-3.424-3.392-5.12-1.28-6.208zM8 16q0 3.328 2.336 5.664t5.664 2.336 5.664-2.336 2.336-5.664-2.336-5.632-5.664-2.368-5.664 2.368-2.336 5.632z"></path>
                      </g>
                    </svg>
                    <input
                      type="text"
                      placeholder={
                        mode === "ride" ? "Enter pickup location" : "Enter package pickup address"
                      }
                    />
                    <svg className="r" width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <path fillRule="evenodd" clipRule="evenodd" d="M20.8103 5.94919C21.5951 4.19841 19.8016 2.40485 18.0508 3.18969L3.64527 9.64735C1.52435 10.5981 1.43336 13.5756 3.49228 14.6541L6.508 16.2337C7.04568 16.5154 7.48464 16.9543 7.76628 17.492L9.34594 20.5077C10.4244 22.5666 13.4019 22.4757 14.3527 20.3547L20.8103 5.94919Z" fill="#000000"></path>
                      </g>
                    </svg>
                  </div>
              

                <div className="input-with-icon">
                  <svg className="r" fill="#000000" width="20px" height="30px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <title>pin</title>
                      <path d="M4 12q0-3.264 1.6-6.016t4.384-4.352 6.016-1.632 6.016 1.632 4.384 4.352 1.6 6.016q0 1.376-0.672 3.2t-1.696 3.68-2.336 3.776-2.56 3.584-2.336 2.944-1.728 2.080l-0.672 0.736q-0.256-0.256-0.672-0.768t-1.696-2.016-2.368-3.008-2.528-3.52-2.368-3.84-1.696-3.616-0.672-3.232zM8 12q0 3.328 2.336 5.664t5.664 2.336 5.664-2.336 2.336-5.664-2.336-5.632-5.664-2.368-5.664 2.368-2.336 5.632z"></path>
                    </g>
                  </svg>
                  <input
                    type="text"
                    placeholder={
                      mode === "ride" ? "Enter destination" : "Enter delivery destination"
                    }
                  />
                  <svg className="i" fill="#000000" width="20px" height="64px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M3,20V4A1,1,0,0,1,4,3H20a1,1,0,0,1,1,1V20a1,1,0,0,1-1,1H4A1,1,0,0,1,3,20Z"></path>
                    </g>
                  </svg>
                </div>
                {/* Extra input only for courier */}
                {mode === "courier" && (
                  <div className="input-with-icon">
                    <input type="text" placeholder="What are you sending?" />
                  </div>
                )}

                {/* Scheduling inputs for ride mode only */}
                {mode === "ride" && (
                  <div className="scheduling-inputs">
                    <div className="input-with-icon">
                      <svg className="i" fill="#000000" width="16px" height="16px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                          <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.89-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                        </g>
                      </svg>
                      <input
                        type="date"
                        value={rideDate}
                        min={today}
                        onChange={(e) => setRideDate(e.target.value)}
                      />
                    </div>
                    <div className="input-with-icon">
                      <svg className="i" fill="#000000" width="16px" height="16px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                        </g>
                      </svg>
                      <select
                        value={rideTime}
                        onChange={(e) => setRideTime(e.target.value)}
                      >
                        {timeOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}

                <div className="set-button-content">
                  <button>{mode === "ride" ? "See Ride Prices" : "See Courier Prices"}</button>
                  <a href="#">Log in to see your recent activity</a>
                </div>
              </div>
            </div>
            </div>
            {/* Map */}
            <div className="map-image">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d126861.03356646968!2d3.5509084499999997!3d6.469979449999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1749485609598!5m2!1sen!2sng"  
                style={{width: "576px", height: "576px", border: 0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="history-container" id='section-container'>
          <div className="location-flex" id='section-flex'>
            <div className="history-boxes">
              <div className="history-content">
                <h1 className="heading" id='heading'>Log in to see your recent activity</h1>
              </div>
              <div className="history-list">
                <ul>
                  <li>View past trips, tailored Suggestions, support resources, and more.</li>
                </ul>
              </div>
              <div className="set-button-content">
                <button>Log in to your account</button>
                <a href="#">Don't have an Rideo account? Sign up</a>
              </div>
            </div>
            <div className="history-image">
            </div>
          </div>
        </div>

        <div className="resevered-container">
            <div className="reserved-content">
                <h2 className="heading" id='heading'>Plan for later</h2>
              <div className="reserved-details">
                <div className="reserved-list">
                  <div className="reserve-logged">
                    <h2 className="list-heading">Get your ride right with Rideo Reserve</h2>
                    <div className="booking-details">
                      <label htmlFor="text">Choose date and time</label>
                      <div className="scheduling-inputs">
                      <div className="input-with-icon">
                        <svg className="i" fill="#000000" width="16px" height="16px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                          <g id="SVGRepo_iconCarrier">
                            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.89-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                          </g>
                        </svg>
                        <input
                          type="date"
                          value={rideDate}
                          min={today}
                          onChange={(e) => setRideDate(e.target.value)}
                        />
                      </div>
                      <div className="input-with-icon">
                        <svg className="i" fill="#000000" width="16px" height="16px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                          <g id="SVGRepo_iconCarrier">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                          </g>
                        </svg>
                        <select
                          value={rideTime}
                          onChange={(e) => setRideTime(e.target.value)}
                        >
                          {timeOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                      <div className="set-button-content">
                        <button>Next</button>
                      </div>
                    </div>
                    <div className="reserve-logged-sub">
                    
                    </div>
                  </div>
                </div>
                <div className="benefit">
                  <h2>Benefits</h2>
                  <ul className='benefit-list'>
                    <li>
                      <div className="benefit-box">
                        <svg className="i" fill="#000000" width="16px" height="16px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                          <g id="SVGRepo_iconCarrier">
                            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.89-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                          </g>
                        </svg>
                        <p>Choose your exact pickup time up to 90 days in advance.</p>
                      </div>
                    </li>
                    <li>
                      <div className="benefit-box">
                        <svg className="i" fill="#000000" width="16px" height="16px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                          <g id="SVGRepo_iconCarrier">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                          </g>
                        </svg>
                        <p>Extra wait time included to meet your ride.</p>
                      </div>
                    </li>
                    <li>
                      <div className="benefit-box">
                        <svg className="i" fill="#000000" width="16px" height="16px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                          <g id="SVGRepo_iconCarrier">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                          </g>
                        </svg>
                        <p>Cancel at no charge up to 60 minutes in advance.</p>
                      </div>
                    </li>
                  </ul>
                  <a href="#">See terms</a>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
