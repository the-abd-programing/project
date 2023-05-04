import React from "react";
import styled from "styled-components";
const Deliver = styled('div')`
height: 120vh;
width: 353px;
background-color: #F3F3F3;
position: absolute;
right: 0;
top: 0;
.deliver-img{
  display: flex;
  gap: 4rem;
}
.deliver-loc{
  display: flex;
  gap: 1rem;
  color: grey;
}
#sel{
  border: none;
}
`
function xz(){
  const click = () =>{
    return(
      alert('2 secret')
    )
  }
    return(
        <Deliver>                
                <div className="deliver-text">
                    <h1>My Order</h1>
                    <br />
                    <p>Delivery address</p>
                    <br />
                    <div className="deliver-img">
                    <h3>1342 Morris Street</h3> 
                    <button id="sel" onClick={click}>
                    <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.4455 23.3634L0.643917 5.76317C-0.214639 4.91433 -0.214639 3.53814 0.643917 2.68939L2.72019 0.636611C3.57728 -0.210782 4.96638 -0.212413 5.82548 0.632987L20 14.5815L34.1745 0.632987C35.0336 -0.212413 36.4227 -0.210782 37.2798 0.636611L39.3561 2.68939C40.2146 3.53823 40.2146 4.91442 39.3561 5.76317L21.5546 23.3634C20.696 24.2122 19.3041 24.2122 18.4455 23.3634Z" fill="black"/>
</svg>
                    </button>
                    </div>
                    <br />
                    <div className="deliver-loc">

<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.1094 0C5.41992 0 0 5.41992 0 12.1094C0 18.7988 5.41992 24.2188 12.1094 24.2188C18.7988 24.2188 24.2188 18.7988 24.2188 12.1094C24.2188 5.41992 18.7988 0 12.1094 0ZM14.8975 17.0947L10.5908 13.9648C10.4395 13.8525 10.3516 13.6768 10.3516 13.4912V5.27344C10.3516 4.95117 10.6152 4.6875 10.9375 4.6875H13.2812C13.6035 4.6875 13.8672 4.95117 13.8672 5.27344V11.9971L16.9678 14.2529C17.2314 14.4434 17.2852 14.8096 17.0947 15.0732L15.7178 16.9678C15.5273 17.2266 15.1611 17.2852 14.8975 17.0947Z" fill="#797575"/>
</svg>
<p>40mins</p>
                    <svg width="19" height="25" viewBox="0 0 19 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.41152 24.4956C1.31689 14.2105 0 13.1549 0 9.375C0 4.19731 4.19731 0 9.375 0C14.5527 0 18.75 4.19731 18.75 9.375C18.75 13.1549 17.4331 14.2105 10.3385 24.4956C9.8729 25.1682 8.87705 25.1681 8.41152 24.4956ZM9.375 13.2812C11.5324 13.2812 13.2812 11.5324 13.2812 9.375C13.2812 7.21763 11.5324 5.46875 9.375 5.46875C7.21763 5.46875 5.46875 7.21763 5.46875 9.375C5.46875 11.5324 7.21763 13.2812 9.375 13.2812Z" fill="#797575"/>
</svg>
<p>5km</p>
                    </div>

                </div>
        </Deliver>
)}
export default xz;