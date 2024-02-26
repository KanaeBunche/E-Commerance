import React, { useState } from 'react';
import './LoginForm.css'
import Cartnav from './Cartnav'

function LoginForm() {
  const [activeTab, setActiveTab] = useState('login');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your login or register logic goes here
    if (activeTab === 'register') {
      // Registration logic
      console.log('Registering user:', { firstName, lastName });
    } else {
      // Login logic
      console.log('Logging in with username:', event.target.username.value);
    }
  };

  return (
    <><dv>
          <Cartnav />
      </dv><div className="login-form">

              <div className="tabs">
                  <div id="login"
                      className={activeTab === 'login' ? 'active' : ''}
                      onClick={() => handleTabChange('login')}
                  >
                      <p>Login /</p>
                  </div>
                  <div id="register"
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
                              <input type="text" id="firstName" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                          </div>
                          <div className="form-group">
                              <label className="lastName">Last Name</label>
                              <input type="text" id="lastName" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                          </div>
                      </>
                  )}
                  <div className="form-group">
                      <label className="username">Username</label>
                      <input type="text" id="username" name="username" />
                  </div>
                  <div className="form-group">
                      <label className="password">Password</label>
                      <input type="password" id="password" name="password" />
                  </div>
                  <button type="submit">{activeTab === 'login' ? 'Login' : 'Register'}</button>
              </form>
          </div></>
  );
}

export default LoginForm;
