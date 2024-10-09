import React from "react";
import { Link } from 'react-router-dom';

function Navbar({ cartCount }) {
  // Check if cartItems is undefined or null
  
  

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item"><Link to="/">Home ∣</Link></li>
        <li className="nav-item"><a href="#about">About ∣</a></li>
        <li className="nav-item"><a href="#shop">Shop ∣</a></li>
        <li className="nav-item"><Link to='/login'>Login ∣</Link></li>
        <li className='nav-item'>
          <Link to="/cartpage">
            Cart ({cartCount})
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
