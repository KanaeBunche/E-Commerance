import './Navbar.css'; // Import your CSS file for styling
import React from "react";


function Navbar() {
      return (
         <nav className="navbar">
            <ul className="navbar-nav">
               <li className="nav-item"><a href="#home">Home</a></li>
               <li className="nav-item"><a href="#about">About</a></li>
               <li className="nav-item"><a href="#shop">Shop</a></li>
               <li className="nav-item"><a href="#help">Help</a></li>
               <li className='nav-item'> <button className="cart-button">
                  <img src="./Images/add-to-cart.png" alt="Cart Icon" className="cart-icon" />
               </button>  </li>

            </ul>
         </nav>
      )
}
export default Navbar;