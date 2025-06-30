import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Please fill all fields.');
      return;
    }

    try {
      // Replace with your actual backend API endpoint
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      if (response.data) {
        // Optional: Save user/token in localStorage
        localStorage.setItem("user", JSON.stringify(response.data));

        alert("Login successful!");
        navigate("/dashboard"); // Redirect to dashboard
      }
    } catch (error) {
      alert("Login failed. Invalid credentials.");
      console.error(error);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: '100vh',
        width: '100vw',
        backgroundColor: '#f8f9fa',
      }}
    >
      <div className="card shadow p-4" style={{ width: '100%', maxWidth: '400px' }}>
        <h3 className="text-center mb-4">Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
