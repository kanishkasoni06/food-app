import React from "react";
import {IoMdArrowDropleftCircle} from "react-icons/io";
import {IoMdArrowDroprightCircle} from "react-icons/io";
import "./Carousel.css";
import  Card from "./Image.js";
const Carousel = () => {
    let box = document.querySelector(".popcontainer");
    const leftslide = () => {
      let width = box.clientWidth;
      box.scrollLeft = box.scrollLeft - width;
      console.log(width);
    };
    const rightslide = () => {
      let width = box.clientWidth;
      box.scrollLeft = box.scrollLeft + width;
      console.log(width);
    };
    return (
      <div id="slider">
        <IoMdArrowDropleftCircle id="sliderbtn" onClick={leftslide} />
        <div className="popcontainer">
          <Card id="13" img="./Images/pizza1.jpg" alt="Home made pizza" name="Home made pizza" price={250} />
          <Card id="14" img="./Images/food9.jpg" alt="Tandoori Chicken" name="Tandoori Chicken" price={250} />
          <Card id="15" img="./Images/food10.jpg" alt="Chilli Chicken" name="Chilli Chicken" price={250} />
          <Card id="16" img="./Images/pizza2.jpg" alt="Home made pizza" name="Home made pizza" price={250} />
          <Card id="17" img="./Images/pizza3.jpg" alt="Home made pizza" name="Home made pizza" price={350} />
          <Card id="18" img="./Images/pizza4.jpg" alt="Home made pizza" name="Home made pizza" price={200} />
          <Card id="19" img="./Images/pizza5.jpg" alt="Home made pizza" name="Home made pizza" price={350} />
          <Card id="20" img="./Images/pizza6.jpg" alt="Home made pizza" name="Home made pizza" price={200} />
          <Card id="21" img="./Images/pizza7.jpg" alt="Home made pizza" name="Home made pizza" price={350} />
        </div>
        <IoMdArrowDroprightCircle id="sliderbtn" onClick={rightslide} />
      </div>
    );
  };

  export default Carousel;