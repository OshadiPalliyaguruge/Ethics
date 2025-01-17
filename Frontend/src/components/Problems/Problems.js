import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Problems.css';
import image3 from '../../assets/3.jpg'; // Adjust path if needed

function Problems() {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    // Fetching data from the backend API
    axios.get('http://localhost:5000/problems')
      .then(response => {
        setProblems(response.data); // Storing data in state
      })
      .catch(error => {
        console.error("There was an error fetching the problems!", error); // Handling errors
      });
  }, []);

  return (
    <div className="container">
      <h1 className="text-center mb-5">Water Problems in Sri Lanka</h1>
      <div className="problem-grid">
        {/* Mapping over the problems array to display each problem */}
        {problems.map(problem => (
          <div key={problem.id} className="problem-item">
            <div className="problem-image">
              <img
                src={image3} // Assuming you have images like 1.png, 2.png, etc. in the assets folder
                alt={`Problem ${problem.id}`}
              />
            </div>
            <div className="problem-content">
              <h3 className="problem-title">{problem.title}</h3>
              <p className="problem-description">{problem.description}</p>
              <Link to={`/problems/${problem.id}`} className="btn btn-detail">View Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Problems;
