import React, { useState, useEffect } from 'react';
import './Cart.css';
import Delete from '../Images/x.png';
import Heart from '../Images/star.png';

function Cart({ cartItems, handleDelete, setCartItems }) {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

 
  // Calculate the total price of all items in the cart
  const [total, setTotal] = useState(0);

  // Function to handle quantity change for an item
  const handleQuantityChange = (event, selectedItem) => {
    const newQuantity = parseInt(event.target.value);
    const updatedCartItems = cartItems.map((item) =>
      item === selectedItem ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCartItems);

    // Recalculate the total based on the updated cart items
    const newTotal = updatedCartItems.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
    setTotal(newTotal);
  };

  // Add a useEffect hook to recalculate total when cartItems change
  useEffect(() => {
    const newTotal = cartItems.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
    setTotal(newTotal);
  }, [cartItems]);


  // Function to handle submission of the form
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="art-container">
      <h1>Shopping Cart</h1>
       <form className="payment-form"onSubmit={handleSubmit}>
  <h2>Payment Details</h2>
      <div className="ards-container">
        {/* Map through the cart items and render each item */}
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
                <select
                  name="quantity"
                  id="quantitylist"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(e, item)}
                >
                  {[...Array(100).keys()].map((quantity) => (
                    <option key={quantity + 1} value={quantity + 1}>
                      {quantity + 1}
                    </option>
                  ))}
                </select>
              </div>
              <button onClick={() => handleDelete(item)}>
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
      {/* Form to fill out with total price */}
      
      
     
  
  <div className="left-side">
    {/* Left side of the form */}
    <div className="form-group">
      <label htmlFor="firstName">First Name:</label>
      <input type="text" id="firstName" required />
    </div>
   
    <div className="form-group">
      <label htmlFor="streetAddress">Street Address:</label>
      <input type="text" id="streetAddress" required />
    </div>
    
    <div className="form-group">
      <label htmlFor="city">City:</label>
      <input type="text" id="city" required />
    </div>
    <div className="form-group">
      <label htmlFor="cardNumber">Card Number</label>
      <input type="text" id="cardNumber" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required />
    </div>
    <div className="form-group">
      <label htmlFor="cvv">CVV</label>
      <input type="text" id="cvv" value={cvv} onChange={(e) => setCvv(e.target.value)} required />
    </div>
    
  </div>
  <div className="right-side">
    {/* Right side of the form */}
    <div className="form-group">
      <label htmlFor="lastName">Last Name:</label>
      <input type="text" id="lastName" required />
    </div>
    <div className="form-group">
      <label htmlFor="state">State:</label>
      <select id="state" required>
        <option value="">Select State</option>
        <option value="NY">New York</option>
        <option value="CA">California</option>
        {/* Add more options as needed */}
      </select>
    </div>
    <div className="form-group">
      <label htmlFor="zipCode">Zip Code:</label>
      <input type="text" id="zipCode" required />
    </div>
    
    <div className="form-group">
      <label htmlFor="expiryDate">Expiry Date</label>
      <input type="text" 
      id="expiryDate" 
      value={expiryDate} 
      onChange={(e) => setExpiryDate(e.target.value)} 
      placeholder='MM/YY'
      maxLength="7"
      minLength="7"
      required />
    </div>
   
    <div className="form-group">
      <label htmlFor="name">Cardholder Name</label>
      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
    </div>
  
      <label>Total Price:</label>
      <p>${total.toFixed(2)}</p>
  
    <button type="submit">Pay</button>
    
  </div>
  </form>
</div>

      
    
  );
}

export default Cart;
