import React from "react";
import "./Menu.css";
import  Card from "./Card.js";
import Carousel from "./Carousel.js";
import Request from "./request";

function Menu() {
  return (
    <div id="menu">
      <div id="home kitchen">
        <h4 id="menuhead">HOME KITCHEN</h4>
        <div id="row1">
          <Card id="1" img="./Images/pizza1.jpg" alt="Home made pizza" name="Home made pizza" price={190} />
          <Card id="2" img="./Images/pizza2.jpg" alt="Home made pizza" name="Home made pizza" price={220} />
          <Card id="3" img="./Images/pizza3.jpg" alt="Home made pizza" name="Home made pizza" price={300} />
          <Card id="4" img="./Images/pizza4.jpg" alt="Home made pizza" name="Home made pizza" price={250} />
        </div>
        <div id="row2">
          <Card id="5" img="./Images/pizza5.jpg" alt="Home made pizza" name="Home made pizza" price={200} />
          <Card id="6" img="./Images/pizza6.jpg" alt="Home made pizza" name="Home made pizza" price={250} />
          <Card id="7" img="./Images/pizza7.jpg" alt="Home made pizza" name="Home made pizza" price={300} />
          <Card id="8" img="./Images/pizza8.jpg" alt="Home made pizza" name="Home made pizza" price={250} />
        </div>
        <div id="row3">
          <Card id="9" img="./Images/pizza1.jpg" alt="Home made pizza" name="Home made pizza" price={350} />
          <Card id="10" img="./Images/pizza2.jpg" alt="Home made pizza" name="Home made pizza" price={250} />
          <Card id="11" img="./Images/pizza3.jpg" alt="Home made pizza" name="Home made pizza" price={350} />
          <Card id="12" img="./Images/pizza4.jpg" alt="Home made pizza" name="Home made pizza" price={200} />
        </div>
      </div>
      <div id="popular items">
        <h4 id="popitems">POPULAR ITEMS</h4>
        <Carousel />
        <Request />

      </div>
    </div>
  );
}

export default Menu;
