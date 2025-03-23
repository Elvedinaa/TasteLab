import React, { useState } from 'react';
import NavBar from '../components/NavBar'; // Correct path for NavBar component
import '../styles/HomePage.css'; // Correct path for your CSS file

function HomePage() {
  // Define the userData state and setUserData function for updating
  const [userData, setUserData] = useState({
    username: 'John Doe',
    weight: 55,
    progress: 50,
    healthGoal: 'Weight Loss',
  });

  // Function to update the user's weight
  const handleUpdateWeight = (e) => {
    setUserData(prevData => ({
      ...prevData,
      weight: e.target.value, // Update weight
    }));
  };

  // Function to update the user's progress
  const handleUpdateProgress = (e) => {
    setUserData(prevData => ({
      ...prevData,
      progress: e.target.value, // Update progress
    }));
  };

  // State for active tab navigation
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <div className="homepage-container">
      <NavBar /> {/* Only visible on the HomePage */}

      {/* Tab Navigation */}
      <div className="tabs">
        <button
          className={`tab-btn ${activeTab === 'Home' ? 'active' : ''}`}
          onClick={() => setActiveTab('Home')}
        >
          Home
        </button>
        <button
          className={`tab-btn ${activeTab === 'Recipes' ? 'active' : ''}`}
          onClick={() => setActiveTab('Recipes')}
        >
          Recipes
        </button>
        <button
          className={`tab-btn ${activeTab === 'Wellness' ? 'active' : ''}`}
          onClick={() => setActiveTab('Wellness')}
        >
          Wellness
        </button>
        <button
          className={`tab-btn ${activeTab === 'GroceryList' ? 'active' : ''}`}
          onClick={() => setActiveTab('GroceryList')}
        >
          Grocery List & Planner
        </button>
        <button
          className={`tab-btn ${activeTab === 'Profile' ? 'active' : ''}`}
          onClick={() => setActiveTab('Profile')}
        >
          Profile & Settings
        </button>
      </div>

      {/* Content Display Based on Active Tab */}
      <div className="tab-content">
        {activeTab === 'Home' && (
          <div className="homepage-content">
            <h1>Welcome back, {userData.username}!</h1>
            <p>Health Goal: {userData.healthGoal}</p>
            <p>Current Weight: {userData.weight} kg</p>
            <p>Progress: {userData.progress}%</p>
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${userData.progress}%` }}
              ></div>
            </div>

            {/* Update User Info */}
            <div>
              <label htmlFor="weight">Update Your Weight:</label>
              <input
                type="number"
                id="weight"
                value={userData.weight}
                onChange={handleUpdateWeight}
              />
            </div>

            <div>
              <label htmlFor="progress">Update Your Progress:</label>
              <input
                type="number"
                id="progress"
                value={userData.progress}
                onChange={handleUpdateProgress}
              />
            </div>
          </div>
        )}
        {activeTab === 'Recipes' && <div>Recipes Tab Content</div>}
        {activeTab === 'Wellness' && <div>Wellness Tab Content</div>}
        {activeTab === 'GroceryList' && <div>Grocery List & Planner Tab Content</div>}
        {activeTab === 'Profile' && <div>Profile & Settings Tab Content</div>}
      </div>
    </div>
  );
}

export default HomePage;
