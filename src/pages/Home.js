import React from 'react';
import { Link } from 'react-router-dom'; // For navigation when the user clicks Get Started
import '../styles/Home.css';  // Import the CSS file for styling

function Home() {
  return (
    <div className="home-container">
      {/* Title Section */}
      <div className="title-container">
        <h1 className="welcome-title">Welcome to <span className="tastelab-title">TasteLab</span></h1>
      </div>

      {/* Call to Action Button */}
      <Link to="/get-started">   {/* Link to the Get Started route */}
        <button className="cta-btn">Get Started</button>
      </Link>
    </div>
  );
}

export default Home;
