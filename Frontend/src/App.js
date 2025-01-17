import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Problems from './components/Problems/Problems';
import ProblemDetail from './components/ProblemDetail/ProblemDetail';
import Donation from './components/Donation/Donation';
import AboutUs from './components/AboutUs/AboutUs'
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/problems" element={<Problems />} />
        <Route path="/problems/:id" element={<ProblemDetail />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/aboutus" element={<AboutUs />} />

      </Routes>
    </div>
  );
}

export default App;
