import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Home page
import LoginPage from './pages/LoginPage'; // LoginPage component
import Wellness from './pages/Wellness'; // Wellness page
import GroceryList from './pages/GroceryList'; // GroceryList page
import Profile from './pages/Profile'; // Profile page
import Recipes from './pages/Recipes'; // Recipe page
import HomePage from './pages/HomePage'; // Import your HomePage component

function App() {
  return (
    <Router>
      <Routes>
        {/* Define the routes for your app */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/wellness" element={<Wellness />} />
        <Route path="/grocery-list" element={<GroceryList />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/recipes" element={<Recipes />} />
        
        {/* HomePage route */}
        <Route path="/home-page" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
