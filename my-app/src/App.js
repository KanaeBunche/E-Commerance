// App.js

import React, {useState} from 'react';
import './App.css';
import Navbar from './Componets/Navbar';
import About from './Componets/About';
import Featured from './Componets/Featured';
import NewsLetter from './Componets/NewsLetter';
import Products from './Componets/Products';
import Cart from './Componets/Cart';
import Pay from './Componets/Pay';




function App() {
  const [cartItems, setCartItems] = useState([]);
  
  // Check if all items in the cart have an 'id' property



  //Function to add items to the cart
  const addToCart = (newItem) => {
    setCartItems(prevCartItems => {
        console.log("Previous Cart Items:", prevCartItems);

        const existingItemIndex = prevCartItems.findIndex(item => item.id === newItem.id);
        console.log("Existing Item Index:", existingItemIndex);

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
            console.log("Updated Cart Items:", updatedCartItems);
            return updatedCartItems;
        } else {
            const newCartItems = [...prevCartItems, newItem];
            console.log("New Cart Items:", newCartItems);
            return newCartItems;
        }
        
    });
};


const handleDelete = (itemToDelete) => {
  // Use a filtering approach to create a new array without the deleted item
  const newCartItems = cartItems.filter((item) => item !== itemToDelete);
  setCartItems(newCartItems);
};




 
  return (
    <div className="App">
    <Navbar/>
      {/* <header className="header">
        <h1>Welcome to My One-Page Website</h1>
      </header> */}
      <main className="main-content">
        <section className="section about">
          <About/>
          
        </section>
        <section className="section services">
         <Featured onAddToCart={addToCart}/>
        </section>
        <section className="section portfolio">
          <NewsLetter/>
      
        </section>
        <section className="section contact">
          <Products onAddToCart={addToCart}/>
        </section>
        <section className="section contact">
          <Cart cartItems={cartItems} handleDelete={handleDelete} setCartItems={setCartItems} />
        </section>
       
      </main>
      <footer className="footer">
        <p>&copy; 2024 My One-Page Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
