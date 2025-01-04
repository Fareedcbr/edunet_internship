import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>
          <p>Email:</p>
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          <p>Password:</p>
          <input type="password" name="password" />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      <p>Please log in to access your account. Don’t have an account? <Link to="/register">click here</Link> to register.</p>
    </div>
  );
}

export default Login;