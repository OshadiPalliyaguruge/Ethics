import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProblemDetail() {
  const { id } = useParams(); // Get problem ID from URL parameters
  const [problem, setProblem] = useState(null);

  useEffect(() => {
    // Fetching problem details from backend API
    axios.get(`http://localhost:5000/problems/${id}`)
      .then(response => {
        setProblem(response.data); // Store the fetched problem in state
      })
      .catch(error => {
        console.error("There was an error fetching the problem details!", error); // Handling errors
      });
  }, [id]); // Re-fetch problem details whenever the ID changes

  if (!problem) {
    return <div className="container">Loading...</div>;
  }

  return (
    <div className="container">
      <h1>{problem.title}</h1>
      <p>{problem.description}</p>
      <div>
        <h2>Location</h2>
        <iframe
          title="Problem Location"
          src={`https://maps.google.com/maps?q=${problem.latitude},${problem.longitude}&hl=es;z=14&output=embed`}
          width="100%"
          height="450"
        ></iframe>
      </div>
    </div>
  );
}

export default ProblemDetail;
