import React from "react";
import './Form.css';

function Form(){
    return (
        <div id="form-box">
        <div id="content">
          <p id="formtxt">Do you have a question or want to become a seller?</p>
          <h6>
            Fill this form and our manager will contact you next 48 hours.
          </h6>
          <form id="form">
            <label>
              <input type="text" name="name" placeholder="YOUR NAME" id="form-name"/>
            </label>
            <label>
              <input type="email" name="eMail" placeholder="YOUR eMail"id="email"/>
            </label><br />
            <label>
              <input type="text" name="message" placeholder="YOUR MESSAGE" id="message"/>
            </label>
            <br />
            <input type="submit" value="Submit" id="submit" />
          </form>
          </div>
          <div id="form-img">
        <img src="./Images/form.png" alt="delivery" />
      </div>
    </div>
    );
}
export default Form;