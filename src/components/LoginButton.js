import React from 'react';
import './LoginButton.css'; // Ensure this file exists and contains the relevant styles.

const LoginButton = () => {
  return (
    <div className="login-button-container">
      <div className="login-button">
        <img
          src="https://picsum.photos/500/500"
          alt="Placeholder"  // Removed redundant terms like 'image'
          className="left-image"
        />
        <button className="alt-auth-link">Sign Up</button>  {/* Changed <a> to <button> */}
      </div>
      <div className="login-button">
        <img
          src="https://picsum.photos/500/500"
          alt="Placeholder"  // Removed redundant terms like 'image'
          className="left-image"
        />
        <button className="alt-auth-link">Forgot Password?</button>  {/* Changed <a> to <button> */}
      </div>
    </div>
  );
};

export default LoginButton;
