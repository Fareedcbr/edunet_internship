import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const { name, email, password } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', formData);
      console.log('Registration successful:', res.data);
      // Instead of navigating to the dashboard, navigate to the login page
      navigate('/login');
    } catch (err) {
      console.error('Registration error:', err);
      if (err.response && err.response.data) {
        console.error('Error response data:', err.response.data);
      }
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={onSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={onChange} required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={email} onChange={onChange} required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={password} onChange={onChange} required />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
      <p>If you have already registered, <Link to="/login">Login here</Link></p>
    </div>
  );
};

export default Register;
