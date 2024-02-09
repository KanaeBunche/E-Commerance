import React from 'react';
import './About.css';
import image1 from '../Images/Cases/1.svg'; // Import image 1
import image2 from '../Images/Cases/2.svg'; // Import image 2


function About() {
  return (
    <div className="about-container">
      <h1 className="about-heading">Wrap Your Device in Style Shielded with Quality</h1>
      <div className="line"></div>
      <div className="image-container">
        <img src={image1} alt="Image 1" className="about-image" />
        <img src={image2} alt="Image 2" className="about-image" />
        
      </div>
    </div>
  );
}

export default About;
