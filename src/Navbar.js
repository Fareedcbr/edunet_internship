import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Login</Link>
      {' | '}
      <Link to="/register">Register</Link>
    </nav>
  );
};

export default Navbar;