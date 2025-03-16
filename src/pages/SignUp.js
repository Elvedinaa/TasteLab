import React, { useState } from 'react';
import '../styles/SignUp.css';  // Updated path


function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Account Created!');
  };

  return (
    <div className="signup-container">
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="email-input"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="email-input"
          />
        </div>
        <button type="submit" className="cta-btn">Sign Up</button>
      </form>

      <div className="social-login">
        <button className="social-btn google-btn">Sign Up with Google</button>
        <button className="social-btn facebook-btn">Sign Up with Facebook</button>
      </div>
    </div>
  );
}

export default SignUp;
