import './Navbar.css'; // Import your CSS file for styling
import React from "react";
import {Link} from'react-router-dom';


function Cartnav() {
      return (
         <nav className="navbar">
            <ul className="navbar-nav">
               <li className="nav-item"><Link to="/">Home ∣</Link></li>
               <li className='nav-item'><Link to="/cartpage">Cart</Link>
               
               </li>

            </ul>
         </nav>
      )
}
export default Cartnav;