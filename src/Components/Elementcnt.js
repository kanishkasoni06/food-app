import React, { useState,useEffect } from "react";
import { GoDiffAdded } from "react-icons/go";
import { AiFillMinusSquare } from "react-icons/ai";
import "./Elementcnt.css";
function Count() {
  const [Number,setNumber]=useState(0);
  const increase =()=>{
    setNumber(Number+1);
  }
  const decrease=()=>{
    setNumber(Number-1);
  }
  return (
    <div id="element">
      <AiFillMinusSquare
        id="remove"
        onClick={decrease}
      />
      {/* {state.count} */}
      {Number}
      <GoDiffAdded
        id="add"
        onClick={increase}
      />
    </div>
  );
}
export default Count;



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
