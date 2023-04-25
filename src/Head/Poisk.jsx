import styled from "styled-components";
import React from "react";

const Poisk = styled('taxt')`
    text-align: center;
    box-shadow: 100px;
    z-index: -300;
    input{
  height: 30px;
  width: 40%;
  background-color: #F3F3F3;
  text-align: center;
  margin-top: 10px;
  box-shadow: 4px 3px 5px 3px grey;

  border: none;
}
.v-input{
  position: absolute;
  right: 446px;
  top: 78px;
}
.poiskimg-input{
  position: absolute;
  left: 390px;
  top: 75px;
}
.poiskimg-input:hover{
  cursor: pointer;
}
.v-input:hover{
  cursor: pointer;
}
`

function p(){
    return(
        <Poisk>
            <div className="input-text">
            <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="poiskimg-input">
<path d="M24.6582 21.6162L19.79 16.748C19.5703 16.5283 19.2725 16.4062 18.96 16.4062H18.1641C19.5117 14.6826 20.3125 12.5146 20.3125 10.1562C20.3125 4.5459 15.7666 0 10.1562 0C4.5459 0 0 4.5459 0 10.1562C0 15.7666 4.5459 20.3125 10.1562 20.3125C12.5146 20.3125 14.6826 19.5117 16.4062 18.1641V18.96C16.4062 19.2725 16.5283 19.5703 16.748 19.79L21.6162 24.6582C22.0752 25.1172 22.8174 25.1172 23.2715 24.6582L24.6533 23.2764C25.1123 22.8174 25.1123 22.0752 24.6582 21.6162ZM10.1562 16.4062C6.7041 16.4062 3.90625 13.6133 3.90625 10.1562C3.90625 6.7041 6.69922 3.90625 10.1562 3.90625C13.6084 3.90625 16.4062 6.69922 16.4062 10.1562C16.4062 13.6084 13.6133 16.4062 10.1562 16.4062Z" fill="#797575"/>
</svg>
            <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="v-input">
<select name="pir3b3rfpib" id="poisk-selekt">
    <option value="street">street</option>
</select>
<path d="M0.78125 3.51562H21.0938C21.5252 3.51562 21.875 3.16587 21.875 2.73438V0.78125C21.875 0.349756 21.5252 0 21.0938 0H0.78125C0.349756 0 0 0.349756 0 0.78125V2.73438C0 3.16587 0.349756 3.51562 0.78125 3.51562ZM0.78125 11.3281H21.0938C21.5252 11.3281 21.875 10.9784 21.875 10.5469V8.59375C21.875 8.16226 21.5252 7.8125 21.0938 7.8125H0.78125C0.349756 7.8125 0 8.16226 0 8.59375V10.5469C0 10.9784 0.349756 11.3281 0.78125 11.3281ZM0.78125 19.1406H21.0938C21.5252 19.1406 21.875 18.7909 21.875 18.3594V16.4062C21.875 15.9748 21.5252 15.625 21.0938 15.625H0.78125C0.349756 15.625 0 15.9748 0 16.4062V18.3594C0 18.7909 0.349756 19.1406 0.78125 19.1406Z" fill="#797575"/>
</svg>
        <input type="text" placeholder="What would you like to eat?"/>
            </div>
            

    </Poisk>
        )
 }
 export default p;