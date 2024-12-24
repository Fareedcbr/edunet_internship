import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div>
      <h2>Register</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
      <p>If you have already registered, <Link to="/login">Login here</Link></p>
    </div>
  );
}

export default Register;