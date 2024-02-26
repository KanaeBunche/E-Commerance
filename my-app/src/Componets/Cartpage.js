import React from 'react';
import './Cartpg.css';
import Cart from './Cart.js';
import Cartnav from './Cartnav.js';

function Cartpg({cartItems,handleDelete, setCartItems} ){
    return (
        <div className="section cart">
<Cartnav/>

<Cart cartItems={cartItems} handleDelete={handleDelete} setCartItems={setCartItems} />
  
        </div>
    )
   
   

}
export default Cartpg;