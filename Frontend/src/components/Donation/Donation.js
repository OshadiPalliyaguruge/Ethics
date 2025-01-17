import React, { useState } from 'react';
import './Donation.css';
import donationImage from '../../assets/donation-image.jpg';
import impactImage from '../../assets/method.jpg';
import testimonialImage from '../../assets/testimonial-image.jpg';
import targetImage from '../../assets/amount.jpeg';

function Donation() {
  const [showDonationForm, setShowDonationForm] = useState(false);

  const handleDonateClick = () => {
    setShowDonationForm(true);
  };

  return (
    <div className="donation-page">
      <h1 className="donation-heading">Donate to Solve Water Problems</h1>

      {/* Section with Donation Image */}
      <div className="donation-intro">
        <img 
          src={donationImage} 
          alt="Water Crisis" 
          className="donation-image" 
        />
        <div className="donation-description">
          <h3>Help Us Make a Difference</h3>
          <p>By donating, you contribute to providing clean water to communities in Sri Lanka facing water issues. Your donation will go towards infrastructure improvements, water purification systems, and providing access to safe drinking water.</p>
        </div>
      </div>

      {/* Donation Process with Images */}
      <h3 className="process-heading">How Your Donation Helps</h3>
      <div className="donation-steps">
        <div className="step">
          <img src={targetImage} alt="Donation Target" className="process-image" />
          <h4>Step 1: Choose Your Donation Amount</h4>
          <p>Every little bit counts in providing clean drinking water!</p>
        </div>
        <div className="step">
          <img src={impactImage} alt="Impact" className="process-image" />
          <h4>Step 2: Select Payment Method</h4>
          <p>Select a payment method that's convenient for you.</p>
        </div>
        <div className="step">
          <img src={testimonialImage} alt="Testimonial" className="process-image" />
          <h4>Step 3: See Your Impact</h4>
          <p>Track how your donation helps transform lives by providing safe drinking water.</p>
        </div>
      </div>

      {/* Donation Button */}
      <button onClick={handleDonateClick} type="submit" className="donate-button">Donate Now</button>
 

      {/* Donation Form */}
      {showDonationForm && (
        <div className="donation-form-container">
          <h3 className="form-heading">Make Your Donation</h3>
          <form className="donation-form" noValidate>
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control" required />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" required />
            </div>
            <div className="form-group">
              <label className="form-label">Donation Amount (in USD)</label>
              <input type="number" className="form-control" required />
            </div>

            {/* Payment Method Information */}
            <div className="form-group">
              <label className="form-label">Payment Method</label>
              <select className="form-control" required>
                <option value="">Select Payment Method</option>
                <option value="credit_card">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="bank_transfer">Bank Transfer</option>
              </select>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary">Donate Now</button>
          </form>
        </div>
      )}

      {/* Donation Info Section */}
      <div className="donation-info">
        <h4>How Your Donation Helps</h4>
        <ul>
          <li>Providing clean drinking water to remote villages.</li>
          <li>Installing water purification systems in affected areas.</li>
          <li>Helping communities build sustainable water resources.</li>
        </ul>
        <p>Your generous contribution can help us reach more people and provide safe drinking water to those in need. Every little bit counts!</p>
      </div>
    </div>
  );
}

export default Donation;
