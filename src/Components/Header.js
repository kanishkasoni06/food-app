import React from "react";
import './Header.css';
import { BsSearch } from "react-icons/bs";
// import {HiOutlineShoppingBag} from "react-icons/hi";
import Cart from "./Cart.js";

function Header(){
    return (
    <div id="header">
        <div id="nav">
          <h4>FOODIES</h4>
          <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>MENU</li>
            <li>BLOG</li>
            <li>CONTACT</li>
          </ul>
          <BsSearch id="search-icon" />
          <Cart id="Cart-icon" />
        </div>
        <div id="downhead">
          <div id="text">
            <p>AUTHENTIC HOME FOOD IN INDIA</p>
            <h5>
              Foodies is a courier service in which authentic home cook food is
              delivered to a customer.
            </h5>
            <label id="srch">
              <input type="text" placeholder="search food you love" id="srchtxt"/>
              <input type="submit" value="SEARCH" id="srchbtn"/>
            </label>
          </div>
          <img src="./Images/cuate.jpg" alt="kitchen img" id="kitchen" />
        </div>
        </div>
    );
}
export default Header;




