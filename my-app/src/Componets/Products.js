import React, { useState } from 'react';
import './Products.css';
import AddCart from '../Images/add.png';
import phoneData from '../product.json';

function Products() {
  const initialPhoneCases = phoneData['phone-cases'];
  const [phoneCases, setPhoneCases] = useState(initialPhoneCases);
  

  const handleToggleFavorite = (index) => {
    const updatedCases = [...phoneCases];
    updatedCases[index].isFavorite = !updatedCases[index].isFavorite;
    // Update the state with the modified cases
    setPhoneCases(updatedCases);
  };

  return (
    <div className="cards-container">
      {phoneCases.map((phoneCase, index) => (
        <div className="card" key={index}>
          <img src={phoneCase.image} alt='Featured' className='cases' />
          <div className="card-details">
          <p>{`$${phoneCase.price}`}</p>

            <button>
              <img src={AddCart} alt='Add to Cart' style={{ width: '30px', height: '30px', position: 'relative' }} className='heart' />
            </button>
            <button onClick={() => handleToggleFavorite(index)}>
              <img 
                src={phoneCase.isFavorite ? phoneCase.favorite.true : phoneCase.favorite.false} 
                alt='Favorite' 
                style={{ width: '20px', height: '20px' }} 
                className='heart1'
              />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
