import React, { useState } from 'react'
import './RideCourierForm.css' // Import the CSS file

const RideCourierForm = () => {
  const [serviceType, setServiceType] = useState('ride')
  const [pickup, setPickup] = useState('')
  const [dropoff, setDropoff] = useState('')

  const services = [
    { id: 'ride', label: 'Ride', icon: '🚗' },
    { id: 'courier', label: 'Courier', icon: '📦' },
  ]

  return (
    <div className="form-container">
      <div className="service-selector">
        {services.map((service) => (
          <div
            key={service.id}
            className={`service-option ${serviceType === service.id ? 'active' : ''}`}
            onClick={() => setServiceType(service.id)}
          >
            <span className="icon">{service.icon}</span>
            <span className="label">{service.label}</span>
          </div>
        ))}
      </div>

      <h2 className="form-title">
        {serviceType === 'ride' ? 'Ride Details' : 'Courier Details'}
      </h2>

      <div className="form-group">
        <label>Pickup Location:</label>
        <input
          type="text"
          value={pickup}
          onChange={(e) => setPickup(e.target.value)}
          placeholder="Enter pickup location"
        />
      </div>

      <div className="form-group">
        <label>Drop-off Location:</label>
        <input
          type="text"
          value={dropoff}
          onChange={(e) => setDropoff(e.target.value)}
          placeholder="Enter drop-off location"
        />
      </div>
    </div>
  )
}

export default RideCourierForm
