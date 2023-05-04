import React from "react";
import styled from "styled-components";
const Footers = styled('div')`
    width: 100%;
    height: 12rem;
    background-color: #F3F3F3;
    position: absolute;
    margin-top: 10px;
    .img-footers{
        width: 30px;
        height: auto;
        gap: 2rem;
        margin-top: -20px;
    }
    text-align: center;
`
function footer(){
    return(
        <Footers>
            <div>
                <div className="footer-text">
                    <h2>contact</h2>
                    <p>+998 99 830 ** **,XYZ Road,BSK 3 <br />Bangalore,Karnataka,IN</p>
                    <br />
                </div>
                <div className="footers-img">
                    <img  className="img-footers" src="https://o.remove.bg/downloads/883c8ba9-7a33-4811-a93f-f909957656a2/unnamed-removebg-preview.png" alt="" />
                    <img  className="img-footers" src="https://o.remove.bg/downloads/7489b242-320b-4436-97f5-c068fa6df50c/1200px-Facebook_Logo__2019_-removebg-preview.png" alt="" />
                    <img  className="img-footers" src="https://o.remove.bg/downloads/060b3317-905f-421a-be18-8cefab6501d7/Twitter_03-removebg-preview.png" alt="" />
                    <img  className="img-footers" src="https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/2e/4a/f6/2e4af682-b0eb-2dca-8bc2-e0a73322adf5/Prod-0-1x_U007emarketing-0-7-0-85-220.png/1200x630wa.png" alt="" />
                </div>
            </div>

        </Footers>
    )
}
export default footer;