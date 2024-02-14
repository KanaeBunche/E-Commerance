import React from 'react';
import './Products.css';
import Image from '../Images/Cases-1/1.svg'
import Heart from '../Images/bookmark.png';
import AddCart from '../Images/add.png';


function Products() {
    return (
   
      <div className="cards-container">
  
        <div className="card">
  
          <img src={Image} alt='Featured' className='cases'></img>
          <div className="card-details">
            <p>$200</p>
            <button><img src={AddCart} alt='Featured' style={{ width: '19px', height: '19px' }} className='heart'></img></button>
            <button><img src={Heart} alt='Featured' style={{ width: '20px', height: '20px' }} className='heart1'></img></button>
          </div>
        </div>
        </div>
        )
      }
export default Products;