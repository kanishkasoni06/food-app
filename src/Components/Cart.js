import React , {useState} from "react";
import "./Cart.css";
import {HiOutlineShoppingBag} from "react-icons/hi";
import Elementcnt from "./Elementcnt.js";

function Cart(){
    let [CartBox,setCartBox]=useState(false);
    
    return (
        <div>
        <HiOutlineShoppingBag id="bag" onClick={()=>{setCartBox(CartBox ===false ? true :false );}}><Elementcnt />     </HiOutlineShoppingBag>
        {CartBox && <textarea placeholder="Cart is Empty" id="Cart-box" />}
        </div>
    )

}
export default Cart;



// import React, { useState, useEffect } from "react";
// import Card from './Card.js';

// const Cart = ({ cart, setCart, handleChange }) => {
//   const [price, setPrice] = useState(0);

//   const handleRemove = (id) => {
//     const arr = cart.filter((Card) => Card.id !== id);
//     setCart(arr);
//     handlePrice();
//   };

//   const handlePrice = () => {
//     let ans = 0;
//     cart.map((Card) => (ans += Card.amount * Card.price));
//     setPrice(ans);
//   };

//   useEffect(() => {
//     handlePrice();
//   });

//   console.log(setCart);

//   return (
//     <article>
//       {cart.map((Card) => (
//         <div className="cart_box" key={Card.id}>
//           <div>
//             <button onClick={() => handleChange(Card, 1)}>+</button>
//             <button>{Card.amount}</button>
//             <button onClick={() => handleChange(Card, -1)}>-</button>
//           </div>
//           <div>
//             <span>{Card.price}</span>
//             <button onClick={() => handleRemove(Card.id)}>Remove</button>
//           </div>
//         </div>
//       ))}
//       <div className="total">
//         <span>Total Price of your Cart</span>
//         <span>R - {price}</span>
//       </div>
//     </article>
//   );
// };

// export default Cart;