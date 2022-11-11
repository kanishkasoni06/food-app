import React,{useState} from "react";
import "./Request.css"
function Request(){
    let [Box,setBox]=useState(false);
    return (
        <div>
        <button id="request" style={{borderColor: Box === true ? '#1ac073' : 'black'}} onClick={()=>{setBox(Box ===false ? true :false );}}>Request a dish</button>
        {Box && <input type="text" placeholder="REQUEST A DISH" id="request-box"/>}
        </div>
    )

}



export default Request;