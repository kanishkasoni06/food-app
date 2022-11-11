import React from "react";
import "./Card.css";
// import { GoDiffAdded } from "react-icons/go";
import { AiFillStar } from "react-icons/ai";
import { BiRupee } from "react-icons/bi";
// import { AiFillMinusSquare } from "react-icons/ai";
import Elementcount from "./Elementcnt.js";
// import Card from "../Components/Image"
// const Menu = () =>{

//   Card.map((props) =>{
//        return(
//         <>
//         <div className="Card">
// <p hidden="true">{props.id}</p>
// <img
//   src={props.img}
//   alt={props.alt}
//   position="absolute"
//   width="277px"
//   height="250px"
//   left="0px"
//   top=" 0px"

// />
// <div id="card-in">
//   <p id="name">{props.name}</p>
//   <BiRupee id="rupee" />
//   <p id="price">{props.price}</p>
// </div>
// <div id="innercard">
//   <AiFillStar id="star" />
//   <p id="rating">4.7</p>
//   <p id="time">(50-79 mins)</p>
//   {/* <AiFillMinusSquare id="add" />
//   <GoDiffAdded id="add" /> */}
//   <Elementcount />
// </div>
// </div>
      
//     </>
//        )
      
//          })
// }
// export default Menu;
      
const Card = (props) => {
    return (
      <div className="Card">
      <p hidden="true">{props.id}</p>
        <img
          src={props.img}
          alt={props.alt}
          position="absolute"
          width="277px"
          height="250px"
          left="0px"
          top=" 0px"

        />
        <div id="card-in">
          <p id="name">{props.name}</p>
          <BiRupee id="rupee" />
          <p id="price">{props.price}</p>
        </div>
        <div id="innercard">
          <AiFillStar id="star" />
          <p id="rating">4.7</p>
          <p id="time">(50-79 mins)</p>
          {/* <AiFillMinusSquare id="add" />
          <GoDiffAdded id="add" /> */}
          <Elementcount />
        </div>
      </div>
    );
  };

  export default Card;