// App.js

import React from 'react';
import './App.css';
import Navbar from './Componets/Navbar';
import About from './Componets/About';
import Featured from './Componets/Featured';

function App() {
  return (
    <div className="App">
    <Navbar/>
      {/* <header className="header">
        <h1>Welcome to My One-Page Website</h1>
      </header> */}
      <main className="main-content">
        <section className="section about">
          <About/>
          
        </section>
        <section className="section services">
         <Featured/>
        </section>
        <section className="section portfolio">
          <h2>Portfolio</h2>
          {/* Add your portfolio items here */}
        </section>
        <section className="section contact">
          <h2>Contact Us</h2>
          <p>Feel free to reach out to us at example@example.com</p>
          <p>Feel free to reach out to us at example@example.com</p>
          <p>Feel free to reach out to us at example@example.com</p>
          <p>Feel free to reach out to us at example@example.com</p>
          <p>Feel free to reach out to us at example@example.com</p>
          <p>Feel free to reach out to us at example@example.com</p>
          <p>Feel free to reach out to us at example@example.com</p>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2024 My One-Page Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
