import React from 'react';
import './Cart.css';
import Delete from '../Images/x.png';
import Heart from '../Images/star.png';

function Cart({ cartItems }) {
  return (
    <>
      <div>
        <h1 className="title">Shopping Cart</h1>
      </div>
      <div className="ards-container">
        {cartItems.map((item, index) => (
          <div className="ard" key={index}>
            <img src={item.image} alt="Featured" className="cases" />
            <div className="ard-details">
              <p>${item.price}</p>
              <button>
                <img
                  src={Heart}
                  alt="Star"
                  style={{ width: '20px', height: '20px' }}
                  className="heart1"
                />
              </button>

              <div className="quantity-selection">
                <label htmlFor="quantity">Quantity:</label>
                <select name="quantity" id="quantitylist">
                  {[...Array(10).keys()].map((quantity) => (
                    <option key={quantity + 1} value={quantity + 1}>
                      {quantity + 1}
                    </option>
                  ))}
                </select>
              </div>

              <button className="delete-button">
                <img
                  src={Delete}
                  alt="Delete"
                  style={{ width: '19px', height: '19px' }}
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cart;
