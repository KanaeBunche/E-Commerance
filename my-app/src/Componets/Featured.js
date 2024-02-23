import React, { useState } from 'react';
import './Featured.css';
import AddCart from '../Images/add.png';
import featuredData from '../featured.json';

function Featured({onAddToCart}) {
  const initialFeaturedCases = featuredData['featured-cases'];
  const [featuredCases, setFeaturedCases] = useState(initialFeaturedCases);

  const handleToggleFavorite = (index) => {
    const updatedCases = [...featuredCases];
    updatedCases[index].isFavorite = !updatedCases[index].isFavorite;
    // Update the state with the modified cases
    setFeaturedCases(updatedCases);
  };


  const handleAddToCart = (index) => {
    const clickedItem = featuredCases[index]; // Get the clicked item
    console.log('Added to Cart:', clickedItem); // Log the clicked item
    // Perform any other necessary operations like updating state or making API requests
    
    // If you need to update the state or perform other operations, you can do it here
    
    // If you have a function to add items to the cart, you can call it here
    onAddToCart(clickedItem);
  };
  

 

  
  

  return (
    <div>
      <h1 className='title'>Featured</h1>
      <div className="cards-container">
        {featuredCases.map((featuredCase, index) => (
          <div className="card" key={index}>
            <img src={featuredCase.image} alt='Featured' className='cases' />
            <div className="card-details">
            <p>{`$${featuredCase.price}`}</p>

              <button onClick={() => handleAddToCart(index)}>
                <img src={AddCart} alt='Add to Cart' style={{ width: '30px', height: '30px', position: 'relative' }} className='heart' />
              </button>
              <button onClick={() => handleToggleFavorite(index)}>
                <img
                  src={featuredCase.isFavorite ? featuredCase.favorite.true : featuredCase.favorite.false}
                  alt='Favorite'
                  style={{ width: '20px', height: '20px' }}
                  className='heart1'
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Featured;
