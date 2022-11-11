import React from "react";
import './Footer.css';
import {FaFacebookSquare} from "react-icons/fa";
import {FaInstagramSquare} from "react-icons/fa";
function Footer(){
    return (
        <div id="footer">
    <h4>FOODIES</h4>
    <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>MENU</li>
            <li>BLOG</li>
            <li>CONTACT</li>
          </ul>
          <FaFacebookSquare id="fb-icon"/> 
          <FaInstagramSquare id="ig-icon" />
          <hr id="line"/>     
    </div>
    );
}
export default Footer;

