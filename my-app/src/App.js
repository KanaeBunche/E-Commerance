// App.js

import React from 'react';
import './App.css';
import Navbar from './Componets/Navbar';
import About from './Componets/About';
import Featured from './Componets/Featured';
import NewsLetter from './Componets/NewsLetter';
import Products from './Componets/Products';



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
          <NewsLetter/>
      
        </section>
        <section className="section contact">
          <Products/>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2024 My One-Page Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
