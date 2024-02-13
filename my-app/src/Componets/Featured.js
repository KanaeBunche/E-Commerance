import React from 'react';
import './Featured.css';
import Image1 from '../Images/Cases-1/1.svg';
import Image2 from '../Images/Cases-1/2.svg';
import Image3 from '../Images/Cases-1/3.svg';
import Image4 from '../Images/Cases-1/4.svg';
import Image5 from '../Images/Cases-1/5.svg';
import Image6 from '../Images/Cases-1/6.svg';
import Image7 from '../Images/Cases-1/7.svg';
import Image8 from '../Images/Cases-1/8.svg';
import Image9 from '../Images/Cases-1/9.svg';
import Heart from '../Images/bookmark.png';
import AddCart from '../Images/add.png';

function Featured() {
  return (
    <div className="cards-container">
      <div className="card">
        <img src={Image1} alt='Featured' className='cases'></img>
        <div className="card-details">
          <p>$200</p>
          <button><img src={AddCart} alt='Featured' style={{ width: '19px', height: '19px' }} className='heart'></img></button>
          <button><img src={Heart} alt='Featured' style={{ width: '20px', height: '20px' }} className='heart1'></img></button>
        </div>
      </div>
      <div className="card">
        <img src={Image2} alt='Featured' className='cases'></img>
        <div className="card-details">
          <p>$200</p>
          <button><img src={AddCart} alt='Featured' style={{ width: '19px', height: '19px' }} className='heart'></img></button>
          <button><img src={Heart} alt='Featured' style={{ width: '20px', height: '20px' }} className='heart1'></img></button>
        </div>
      </div>
      <div className="card">
        <img src={Image3} alt='Featured' className='cases'></img>
        <div className="card-details">
          <p>$200</p>
          <button><img src={AddCart} alt='Featured' style={{ width: '19px', height: '19px' }} className='heart'></img></button>
          <button><img src={Heart} alt='Featured' style={{ width: '20px', height: '20px' }} className='heart1'></img></button>
        </div>
      </div>
      <div className="card">
        <img src={Image4} alt='Featured' className='cases'></img>
        <div className="card-details">
          <p>$200</p>
          <button><img src={AddCart} alt='Featured' style={{ width: '19px', height: '19px' }} className='heart'></img></button>
          <button><img src={Heart} alt='Featured' style={{ width: '20px', height: '20px' }} className='heart1'></img></button>
        </div>
      </div>
      <div className="card">
        <img src={Image5} alt='Featured' className='cases'></img>
        <div className="card-details">
          <p>$200</p>
          <button><img src={AddCart} alt='Featured' style={{ width: '19px', height: '19px' }} className='heart'></img></button>
          <button><img src={Heart} alt='Featured' style={{ width: '20px', height: '20px' }} className='heart1'></img></button>
        </div>
      </div>
      <div className="card">
        <img src={Image6} alt='Featured' className='cases'></img>
        <div className="card-details">
          <p>$200</p>
          <button><img src={AddCart} alt='Featured' style={{ width: '19px', height: '19px' }} className='heart'></img></button>
          <button><img src={Heart} alt='Featured' style={{ width: '20px', height: '20px' }} className='heart1'></img></button>
        </div>
      </div>
      <div className="card">
        <img src={Image7} alt='Featured' className='cases'></img>
        <div className="card-details">
          <p>$200</p>
          <button><img src={AddCart} alt='Featured' style={{ width: '19px', height: '19px' }} className='heart'></img></button>
          <button><img src={Heart} alt='Featured' style={{ width: '20px', height: '20px' }} className='heart1'></img></button>
        </div>
      </div>
      
      <div className="card">
        <img src={Image9} alt='Featured' className='cases'></img>
        <div className="card-details">
          <p>$200</p>
          <button><img src={AddCart} alt='Featured' style={{ width: '19px', height: '19px' }} className='heart'></img></button>
          <button><img src={Heart} alt='Featured' style={{ width: '20px', height: '20px' }} className='heart1'></img></button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
