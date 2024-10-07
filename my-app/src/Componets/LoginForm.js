import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';
import Cartnav from './Cartnav';

function LoginForm() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('login');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Navigate to the home page after form submission
    navigate('/');
  };

  return (
    <>
      <div>
        <Cartnav />
      </div>
      <div className="login-form">
        <div className="tabs">
          <div
            id="login"
            className={activeTab === 'login' ? 'active' : ''}
            onClick={() => handleTabChange('login')}
          >
            <p>Login /</p>
          </div>
          <div
            id="register"
            className={activeTab === 'register' ? 'active' : ''}
            onClick={() => handleTabChange('register')}
          >
            <p>Register</p>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          {activeTab === 'register' && (
            <>
              <div className="form-group">
                <label className="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </>
          )}
          <div className="form-group">
            <label className="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">{activeTab === 'login' ? 'Login' : 'Register'}</button>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
