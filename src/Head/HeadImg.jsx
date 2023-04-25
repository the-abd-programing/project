import React from "react";
import styled from "styled-components";
const Headimg = styled('div') `
position: absolute;
left: 390px;
top:130px;
z-index: -1000;
.headimggg{
      height: 200px;
      width: 500px;
      z-index: 100;
}
.head-img-skidka{
    position:absolute;
    top: 0;
    left: -30px;
    text-align: center;
}
    #head-img-skidka2{
        height: 200px;
      width:400px; 
    }
    .head-img-text-card{
        text-align: center;
        position: absolute;
        top: 50px;
        right: 300px;
        }
        #h5k{
            color: black    ;
        }
        h1{
            color: white;
        }
`
function headimg(){
    return(
        <div className="headimg">
                <Headimg >
            <img src='https://cdn0.mariages.net/vendor/2828/3_2/960/jpg/-copie-0-dsc-5203_3_172828.jpeg' alt="" className="headimggg"/>
                        <div className="head-img-skidka">
                            <svg width="434" height="245" viewBox="0 0 434 245" fill="none" xmlns="http://www.w3.org/2000/svg" id="head-img-skidka2">
<path d="M40 20C40 8.95431 48.9543 0 60 0H256L433.5 245H60C48.9543 245 40 236.046 40 225V20Z" fill="#DA3805"/>
<path d="M0 20C0 8.95431 8.95431 0 20 0H254L367.5 245H20C8.95431 245 0 236.046 0 225V20Z" fill="#FF5C28"/>
<circle cx="376" cy="230" r="5" fill="white"/>
<circle cx="391" cy="230" r="5" fill="#D5D0D0"/>
<circle cx="406" cy="230" r="5" fill="#D4D0D0"/>
</svg>

                        </div>
                        <div className="head-img-text-card">
                            <h1 id="h5k">30% Off</h1>
                            <h1>Fitness Meal</h1>
                        </div>
        </Headimg>
                        </div>
    )}
    export default headimg;