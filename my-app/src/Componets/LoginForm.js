import React, { useState } from 'react';
import './LoginForm.css'
import Cartnav from './Cartnav'

function LoginForm() {
  const [activeTab, setActiveTab] = useState('login');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };




  function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    const formData = {
      username: username,
      password: password,
      firstName: firstName,
      lastName: lastName
    };

    fetch('http://127.0.0.1:5555/newuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          console.log('User registered successfully!');
          // Handle successful registration here
        } else {
          console.error('Registration failed.');
          // Handle registration failure here
        }
      })
      .catch((error) => {
        console.error('Error registering user:', error);
        // Handle error here
      });
  }
  function handleSubmitLogin() {
    const formData = {
      username: username,
      password: password,
    };

    fetch('http://127.0.0.1:5555/userlogin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then((response) => {
        if (response.ok) {
          console.log('User Logged In!');
          // Handle successful registration here
        } else {
          console.error('Login Failed.');
          // Handle registration failure here
        }
      })
      .catch((error) => {
        console.error('Error logging in  user:', error);
        // Handle error here
      });
  }

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
              <form onSubmit={activeTab === 'login' ? handleSubmitLogin : handleSubmit}>
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
