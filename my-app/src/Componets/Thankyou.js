import React from 'react';
import './ThankYou.css';
import Cartnav from './Cartnav.js';



function Thankyou() {
  return (
    <div>
    <Cartnav/>
    <div className="thankyou-container">
      <h1 className="thankyou-heading">Thank-You for your order!! </h1>
      <p className='thankblink'>25% OFF ALL CASES CODE:abscd</p>
    </div>
    </div>
  );
}

export default Thankyou;
