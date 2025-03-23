import React, { useState } from 'react';
import '../styles/LoginPage.css'; // Ensure this file exists and contains the relevant styles.
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true); // Track whether we're showing the login or signup form
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Use useNavigate for redirection

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (username && password) {
      // Example: If login is successful, redirect to homepage
      // Replace this with actual login or signup logic
      if (isLogin) {
        // Perform login logic
        console.log('Logging in:', username);
        navigate('/homepage'); // Redirect to homepage on successful login
      } else {
        // Perform signup logic
        console.log('Signing up:', username);
        navigate('/homepage'); // Redirect to homepage on successful signup
      }
    } else {
      setError('Please enter both username and password');
    }
  };

  return (
    <div className="login-page-container">
      <div className="login-left">
        <div className="auth-nav">
          <button
            className={`auth-nav-button ${isLogin ? 'active' : ''}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`auth-nav-button ${!isLogin ? 'active' : ''}`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        <div className="login-form">
          <h2>{isLogin ? 'Welcome Back!' : 'Create an Account'}</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label htmlFor="username">Username</label>
              <input 
                type="text" 
                id="username" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username" 
              />
            </div>
            <div className="input-container">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password" 
              />
            </div>
            {error && <p className="error">{error}</p>}
            {isLogin ? (
              <button type="submit" className="login-button">Login</button>
            ) : (
              <button type="submit" className="login-button">Sign Up</button>
            )}
          </form>

          {/* Login / Signup with Google and Facebook */}
          <div className="social-login">
            <button className="social-button google">Login with Google</button>
            <button className="social-button facebook">Login with Facebook</button>
          </div>
        </div>
      </div>

      <div className="login-right">
        <img src="https://picsum.photos/500/500" alt="Placeholder" /> {/* Replace with your actual image later */}
      </div>
    </div>
  );
};

export default LoginPage;
