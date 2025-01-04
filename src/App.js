import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Register from './components/Register';
import Login from './components/Login';
import './styles/App.css'; // Ensure this path is correct

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    console.log('Dark mode toggled:', !isDarkMode); // Debugging line
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
      console.log('Dark mode applied'); // Debugging line
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
      console.log('Dark mode removed'); // Debugging line
    }
  }, [isDarkMode]);

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : ''}`}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage darkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);