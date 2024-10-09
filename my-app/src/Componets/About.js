import React from 'react';
import './About.css';
import Image1 from '../Images/Cases-1/Cases-2/2.svg'
import Arrow from '../Images/arrow.png';






function About() {
  return (
    <div className="about-container">
      <h1 className="about-heading">Wrap Your Device in Style Shielded with Quality</h1>
      <p className='blink' >25% OFF ALL CASES CODE:abscd</p>
     
      <div className="image-container">
       <img src={Image1} alt="Cases" className="case-images" />
       <img src={Image1} alt="Cases" className="case-images" />
       <img src={Image1} alt="Cases" className="case-images" />
       <img src={Image1} alt="Cases" className="case-images" />
      </div>
     <img src={Arrow} alt="Cases" className="arrow-images" />
    </div>
  );
}

export default About;
