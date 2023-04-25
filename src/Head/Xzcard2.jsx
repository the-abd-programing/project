import React from "react";
import styled from "styled-components";
const Xzcards2 = styled('div')`
    height: 100px;
width: auto;
display: flex;
border-radius: 10px;
position: absolute;
right: 0px;
top: 380px;
&:hover{
    background-color: white;
    position: absolute;
right: 50px;
top: 380px;
box-shadow: 5px 1px 10px 10px grey;
}
.deliver-card2{
  display: flex;
  }
  .cardxzimgx2{
    margin: 10px 10px 10px 10px;
  }
    .card-xz-delevior2{
      display: flex;
      gap: 1rem;
    }
    #deliver-img-2{
      height: 100px;
      width: 155px;
    }
    .cardxzseleckt2,.cardxzimgx2{
        display: flex;
    }
`

function xzcard2(){
    
    
    const select = [1,2,3,4,5,6]
    
    return(
        <div className="deliver-card2">
            <Xzcards2>
        <img src="https://www.recipetineats.com/wp-content/uploads/2022/08/Stack-of-cheeseburgers.jpg" alt="" id="deliver-img-2"/>        
        <h5>Burger Mozza XL  &39 <br /> Extra cheese <br />
        <div className="card-xz-delevior2">
            <div className="cardxzimgx2">

        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.2386 12.5L24.3459 5.39276C25.218 4.5206 25.218 3.10653 24.3459 2.23366L22.7663 0.654119C21.8942 -0.21804 20.4801 -0.21804 19.6072 0.654119L12.5 7.76136L5.39276 0.654119C4.5206 -0.21804 3.10653 -0.21804 2.23366 0.654119L0.654119 2.23366C-0.21804 3.10582 -0.21804 4.51989 0.654119 5.39276L7.76136 12.5L0.654119 19.6072C-0.21804 20.4794 -0.21804 21.8935 0.654119 22.7663L2.23366 24.3459C3.10582 25.218 4.5206 25.218 5.39276 24.3459L12.5 17.2386L19.6072 24.3459C20.4794 25.218 21.8942 25.218 22.7663 24.3459L24.3459 22.7663C25.218 21.8942 25.218 20.4801 24.3459 19.6072L17.2386 12.5Z" fill="#797575"/>
</svg> 
            </div>
<select name="" id="cardxzseleckt2">
{select.map(d =>
    <option value="">1</option>
    )}
    </select>
    </div>
    </h5>
    </Xzcards2>
<div className="head-subtotal">
    <div className="head-text-subtotal">
        <p className="pa">Sub Total  <p className="ps" > &162</p></p> 
        <p className="fee">Delivery Fee <p className="pd">  &9</p></p>
    </div>
    <div className="head-button">
        <p className="pl">Total  <p className="pf"> &171</p></p>

        <button className="button-head-xz">Check Out</button>
    </div>
</div>
    </div>
    )}
export default xzcard2;