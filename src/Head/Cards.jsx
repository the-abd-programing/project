import React from "react";
import { Alert } from "reactstrap";
import korzina from "./Korzina";
import styled from "styled-components";
import { Link } from "react-router-dom";
import p from "./Poisk";

const Cards = styled('div')`
    margin-top: 300px;
    margin-left: 10px; 
     
 .cards-img-f,.jj{
    height: auto;
    width:200px;
 }
 #but,.nn{
    border-radius: 50%;
    border:none;
    height: 20px;
    width: 20px;
 }
 .nn:hover{
    background-color: #fafadd;
 }
 h6{
    color: grey;
 }
 display: flex;
 flex-wrap: wrap;
 gap: 2rem;
 #but{
    background-color: none;
 }
`   
function cards(){
    const HelloClick = () =>{
        
    };
    

    const arr = [1,1,2,4,1,4,2,1,1,1,1,1,1,1,1,1,1,1,1]

    return(

        <Cards>
            {arr.map((d) =>
            <div className="cards">
                <div className="cards-img-f">
                <button id="but" onClick={HelloClick}><img className="nn" src="https://o.remove.bg/downloads/56b7dd9b-1cfc-46cf-bb35-afa50c47510c/160px-Five-pointed_star.svg-removebg-preview.png" alt="" /></button>
                    <img className="jj" src="https://www.cnet.com/a/img/resize/69256d2623afcbaa911f08edc45fb2d3f6a8e172/hub/2023/02/03/afedd3ee-671d-4189-bf39-4f312248fb27/gettyimages-1042132904.jpg?auto=webp&fit=crop&height=675&width=1200" alt="" />
                
                </div>
                
                <div className="cards-text-t">
                    <p>Panera Soup &39</p>
                    <h6>Fast-Food  </h6> 
                </div>
            </div>

            
            )}
        </Cards>
    )
}
export default cards;
