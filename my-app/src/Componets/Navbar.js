import './Navbar.css'; // Import your CSS file for styling
import React from "react";
import Image1 from '../Images/cart.png'; // Import image 1


function Navbar() {
      return (
         <nav className="navbar">
            <ul className="navbar-nav">
               <li className="nav-item"><a href="#home">Home ∣</a></li>
               <li className="nav-item"><a href="#about">About ∣</a></li>
               <li className="nav-item"><a href="#shop">Shop ∣</a></li>
               <li className="nav-item"><a href="#help">Help</a></li>
               <li className='nav-item'>
               <img src={Image1} alt="Cart Icon" className="cart-icon"/>
               </li>

            </ul>
         </nav>
      )
}
export default Navbar;