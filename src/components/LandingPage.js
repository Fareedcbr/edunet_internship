import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Import the CSS file for the landing page

function LandingPage({ darkMode, toggleDarkMode }) {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <h1>Welcome to CollabTool</h1>
        <p>
          Your go-to platform for seamless real-time collaboration. Work together
          on documents, share ideas, and communicate effortlessly with your team.
        </p>
        <div className="cta-buttons">
          <Link to="/login" className="btn">Login</Link>
          <Link to="/register" className="btn">Register</Link>
        </div>
        <button onClick={toggleDarkMode} className="toggle-btn">
          {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </header>
    </div>
  );
}

export default LandingPage;