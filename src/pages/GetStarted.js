import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/GetStarted.css';  // Updated path


function GetStarted() {
  return (
    <div className="get-started-container">
      <div className="overlay">
        <h2 className="get-started-title">Sign Up or Log In</h2>
        <Link to="/signup">
          <button className="cta-btn">Sign Up</button>
        </Link>
        <Link to="/login">
          <button className="cta-btn">Log In</button>
        </Link>
      </div>
    </div>
  );
}

export default GetStarted;
