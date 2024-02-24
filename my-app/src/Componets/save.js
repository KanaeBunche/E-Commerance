// import React from 'react';
// import './Cart.css';
// import Delete from '../Images/x.png';
// import Heart from '../Images/star.png';

// function Cart({ cartItems, handleDelete, handleQuantityChange }) {
//   // Calculate the total price of all items in the cart
//   const total = cartItems.reduce((acc, curr) => acc + curr.price, 0);

  

//   return (
//     <>
//       <div>
//         <h1 className="title">Shopping Cart</h1>
//       </div>
//       <div className="ards-container">
//         {cartItems.map((item, index) => (
//           <div className="ard" key={index}>
//             <img src={item.image} alt="Featured" className="cases" />
//             <div className="ard-details">
//               <p>${item.price}</p>
//               <button>
//                 <img
//                   src={Heart}
//                   alt="Star"
//                   style={{ width: '20px', height: '20px' }}
//                   className="heart1"
//                 />
//               </button>
//               <div className="quantity-selection">
//                 <label htmlFor="quantity">Quantity:</label>
//                 <select 
//                 name="quantity" 
//                 id="quantitylist"
//                 value={item.quantity}
//                 onChange={(e) => handleQuantityChange(e)}
//                 >
//                   {[...Array(10).keys()].map((quantity) => (
//                     <option key={quantity + 1} value={quantity + 1}>
//                       {quantity + 1}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <button onClick={() => handleDelete(item)}>
//                 <img
//                   src={Delete}
//                 alt="Delete"
//                 style={{ width: '19px', height: '19px' }}
//                 />
//             </button>
//             </div>
//           </div>
//         ))}
//         {/* Display the total */}
//         <div className="total">
//           <p>Total: ${total.toFixed(2)}</p>
//           <button> Pay</button>
//         </div>

//       </div>
//     </>
//   );
// }

// export default Cart;
