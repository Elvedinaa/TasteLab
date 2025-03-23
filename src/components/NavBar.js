// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom'; // For routing links
import './NavBar.css'; // This assumes NavBar.css is in the same folder as NavBar.js


const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>TasteLab</h1> {/* Replace with your logo or brand name */}
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">About</Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link">Contact</Link>
        </li>
        <li>
          <Link to="/products" className="nav-link">Products</Link>
        </li>
        {/* Add more links here as needed */}
      </ul>
    </nav>
  );
};

export default NavBar;
