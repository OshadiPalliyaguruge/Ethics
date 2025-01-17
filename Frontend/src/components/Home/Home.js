import React from 'react';
import donationImage from '../../assets/Make_a_Donation.png'; // Ensure the path is correct
import awarenessImage from '../../assets/Raise_Awareness.png'; // Ensure the path is correct
import impactImage from '../../assets/See_the_Impact.png'; // Ensure the path is correct

function Home() {
  return (
    <div className="container">
      {/* Hero Section */}
      <div className="jumbotron text-center bg-light p-5" style={{ borderRadius: '10px' }}>
        <h1 className="display-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          Welcome to the Water Donation System
        </h1>
        <p className="lead" style={{ fontFamily: "'Roboto', sans-serif", fontSize: '1.2rem' }}>
          Committed to solving water-related issues in Sri Lanka through community donations.
        </p>
        <video controls className="w-75" style={{ borderRadius: '10px' }}>
          <source src="promotion.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

            {/* About Section */}
            <section className="my-5">
        <h2 className="text-center text-primary" style={{ fontFamily: "'Roboto Slab', serif" }}>About the Water Donation System</h2>
        <p className="text-justify" style={{ fontFamily: "'Roboto', sans-serif", fontSize: '1rem' }}>
          The Water Donation System addresses urgent water issues in Sri Lanka by connecting donors with affected communities. 
          Our mission is to provide access to clean and sustainable water sources, helping to combat droughts and contamination. The Water Donation System addresses urgent water issues in Sri Lanka by connecting donors with affected communities. 
          Our mission is to provide access to clean and sustainable water sources, helping to combat droughts and contamination. The Water Donation System addresses urgent water issues in Sri Lanka by connecting donors with affected communities. 
          Our mission is to provide access to clean and sustainable water sources, helping to combat droughts and contamination. The Water Donation System addresses urgent water issues in Sri Lanka by connecting donors with affected communities. 
          Our mission is to provide access to clean and sustainable water sources, helping to combat droughts and contamination.
        </p>
      </section>

      {/* How You Can Help Section */}
      <section className="my-5">
        <h2 className="text-center text-primary" style={{ fontFamily: "'Roboto Slab', serif" }}>How You Can Help</h2>
        <div className="row">
          {[
            {
              title: 'Make a Donation',
              text: 'Support communities by providing clean water and sustainable solutions.',
              img: donationImage, // Directly use the imported image
              btnText: 'Donate Now',
              btnClass: 'btn-primary',
              link: '/donation',
            },
            {
              title: 'Raise Awareness',
              text: 'Spread the word and encourage others to contribute to the cause.',
              img: awarenessImage, // Directly use the imported image
              btnText: 'Learn More',
              btnClass: 'btn-success',
              link: '/problems',
            },
            {
              title: 'See the Impact',
              text: 'Track how your donations are transforming lives in the affected areas.',
              img: impactImage, // Directly use the imported image
              btnText: 'Track Impact',
              btnClass: 'btn-danger',
              link: '/problems',
            },
          ].map((help, index) => (
            <div className="col-md-4" key={index}>
              <div className="card" style={{ width: '18rem', borderRadius: '10px' }}>
                <img src={help.img} className="card-img-top" alt={help.title} />
                <div className="card-body">
                  <h5 className="card-title" style={{ color: help.btnClass === 'btn-primary' ? '#007bff' : help.btnClass === 'btn-success' ? '#28a745' : '#dc3545' }}>
                    {help.title}
                  </h5>
                  <p className="card-text">{help.text}</p>
                  <a href={help.link} className={`btn ${help.btnClass}`}>{help.btnText}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="my-5">
        <h2 className="text-center text-primary" style={{ fontFamily: "'Roboto Slab', serif" }}>What Our Supporters Say</h2>
        <div className="row">
          {[
            {
              text: 'This platform is making a huge difference in our community. We now have access to clean water thanks to generous donors.',
              author: 'John Doe, Community Leader',
            },
            {
              text: 'I donated and saw firsthand the impact it had on the ground. This is a great initiative!',
              author: 'Jane Smith, Supporter',
            },
            {
              text: 'I encourage everyone to get involved. Every little bit counts towards improving the lives of many.',
              author: 'Raj Singh, Donor',
            },
          ].map((testimonial, index) => (
            <div className="col-md-4" key={index}>
              <div className="card" style={{ borderRadius: '10px' }}>
                <div className="card-body">
                  <p className="card-text" style={{ fontStyle: 'italic' }}>{testimonial.text}</p>
                  <footer className="blockquote-footer">{testimonial.author}</footer>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center my-5">
        <h4 style={{ fontFamily: "'Roboto Slab', serif" }}>Join Us in Making a Change!</h4>
        <p>Every donation counts. Together, we can improve lives.</p>
        <a href="/donation" className="btn btn-primary btn-lg">Donate Now</a>
      </section>
    </div>
  );
}

export default Home;
