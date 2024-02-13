import React from 'react';
import './Featured.css';
import Image1 from '../Images/Cases-5/red.svg'
import Image2 from '../Images/Cases-5/9.svg';
import Image3 from '../Images/Cases-5/10.svg'
import Image4 from '../Images/Cases-5/11.svg';
import Image5 from '../Images/Cases-5/12.svg'
import Image6 from '../Images/Cases-5/13.svg'
import Image7 from '../Images/Cases-5/14.svg'
import Image8 from '../Images/Cases-5/15.svg';
import Heart from '../Images/bookmark.png';
import AddCart from '../Images/add.png';




function Featured() {
  return (
    <div className="card">
      <img src={Image1} alt='Featured' className='cases'></img>
      <div className="card-details">
        <p>$200</p>
        <img src={AddCart} alt='Featured' style={{ width: '10px', height: '10px' }}className='heart'></img>
      <img src={Heart} alt='Featured' style={{ width: '10px', height: '10px' }}className='heart1'></img>
        
      </div>
    </div>
  );
}

export default Featured;