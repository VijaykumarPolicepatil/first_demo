import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // username and password 
    if (username.trim() === '' || password.trim() === '') {
      alert('Please enter both username and password');
      return;
    }
    // Call handleLogin function from parent component
    handleLogin(username);
    // Optional: Clear the form fields after login
    setUsername('');
    setPassword('');
  };

  return (
    <div className="container" style={{ backgroundColor: 'aqua', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="card p-5">
        <h2 className="mb-4">TextUtil Menu Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
