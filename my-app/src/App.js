// App.js

import React, {useState} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Componets/Navbar';
import About from './Componets/About';
import Featured from './Componets/Featured';
import NewsLetter from './Componets/NewsLetter';
import Products from './Componets/Products';
import Cartpage from './Componets/Cartpage';
import LoginForm from './Componets/LoginForm';
// import Profile from './Componets/Profile';





function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  // Check if all items in the cart have an 'id' property



  //Function to add items to the cart
  
  
  const addToCart = (newItem) => {
    console.log("Item added to cart:", newItem);
    setCartItems(prevCartItems => {
      const existingItemIndex = prevCartItems.findIndex(item => item.id === newItem.id);
  
      if (existingItemIndex !== -1) {
        const updatedCartItems = prevCartItems.map((item, index) => {
          if (index === existingItemIndex) {
            return {
              ...item,
              quantity: item.quantity + newItem.quantity
            };
          }
          return item;
        });
        return updatedCartItems;
      } else {
        return [...prevCartItems, newItem];
      }
    });
    setShowMessage(true); // Show the message
    setTimeout(() => {
      setShowMessage(false); // Hide the message after 3 seconds
    }, 3000);
  };
  

const handleDelete = (itemToDelete) => {
  // Use a filtering approach to create a new array without the deleted item
  const newCartItems = cartItems.filter((item) => item !== itemToDelete);
  setCartItems(newCartItems);
};
return (
  <div className="App">
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<MainContent setCartItems={setCartItems} addToCart={addToCart} cartCount={cartCount}/>} />
        <Route path="/cartpage" element={<Cartpage cartItems={cartItems} handleDelete={handleDelete} setCartItems={setCartItems} />} />
        <Route path="/login" element={<LoginForm/>}/>
        </Routes>
      <div className={`message ${showMessage ? 'show' : ''}`}>Item added to cart !</div>
    </BrowserRouter>
  </div>
);
}

function MainContent({setCartItems, addToCart ,cartCount}) {

return (
  <>
   <Navbar cartCount={cartCount} />
    <main className="main-content" >
      <section className="section about" id='home'>
        <About />
      </section>
      <section className="section services" id='shop'>
      <Products onAddToCart={addToCart}  />
      </section>
      <section className="section portfolio" id="about">
        <NewsLetter />
      </section>
      <section className="section product" id="shop">
      <Products onAddToCart={addToCart} />
      </section>
      {/* <section className="section product" id="shop">
      <Profile />
      </section> */}
    </main>
    <footer className="footer">
      <p>&copy; 2024 My One-Page Website. All rights reserved.</p>
    </footer>
  </>
);
}

export default App;

