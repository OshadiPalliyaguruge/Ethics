import React from 'react';
import './AboutUs.css'; // Custom styling
import missionVisionImage from '../../assets/mission-image.jpg'; // Replace with your own image path
import impactImage from '../../assets/impact-image.jpg'; // Replace with your own image path
import teamImage from '../../assets/team-image.jpg'; // Replace with your own image path

function AboutUs() {
  return (
    <div className="about-us-page">
      <h1 className="about-us-heading">About Us</h1>

      {/* Mission and Vision Section */}
      <div className="about-us-mission-vision">
        <img src={missionVisionImage} alt="Mission and Vision" className="mission-vision-image" />
        <div className="mission-vision-description">
          <div className="mission-description">
            <h3>Our Mission</h3>
            <p>
              We are a non-profit organization committed to solving water problems in Sri Lanka. 
              Our mission is to provide clean, accessible water to communities across the country, 
              ensuring sustainable water resources, safe drinking water, and healthier lives.
            </p>
          </div>
          <div className="vision-description">
            <h3>Our Vision</h3>
            <p>
              Our vision is a world where every person has access to clean and safe drinking water, 
              leading to improved health, education, and prosperity for communities globally.
            </p>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="about-us-impact">
        <h3>Our Impact</h3>
        <div className="impact-content">
          <img src={impactImage} alt="Impact" className="impact-image" />
          <div className="impact-description">
            <p>
              With the support of our generous donors, we have made significant strides in providing clean water to remote villages. 
              From installing water purification systems to building wells, your contributions directly help communities access safe drinking water.
            </p>
            <ul>
              <li>Over 50 villages have access to clean water.</li>
              <li>Installation of 30+ water purification systems in rural areas.</li>
              <li>Impacting the lives of over 20,000 people in need.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="about-us-team">
        <h3>Our Team</h3>
        <div className="team-content">
          <img src={teamImage} alt="Our Team" className="team-image" />
          <div className="team-description">
            <p>
              Our dedicated team consists of passionate individuals who are committed to bringing about positive change. From engineers 
              and field workers to administrative staff, each person plays a crucial role in ensuring the success of our mission.
            </p>
            <p>Meet the people behind the change:</p>
            <ul>
              <li><strong>John Doe</strong> - Founder & CEO</li>
              <li><strong>Jane Smith</strong> - Program Manager</li>
              <li><strong>Robert Brown</strong> - Field Engineer</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="about-us-contact">
        <h3>Contact Us</h3>
        <p>If you'd like to learn more or get involved, don't hesitate to reach out to us:</p>
        <ul>
          <li>Email: support@waterforall.org</li>
          <li>Phone: +94 123 456 789</li>
          <li>Address: 123 Water Lane, Colombo, Sri Lanka</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutUs;
