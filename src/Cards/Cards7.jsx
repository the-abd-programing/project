import React from "react";
import styled from "styled-components";
import { Card,CardBody,CardTitle,CardText,CardSubtitle} from "reactstrap";
import { Link } from "react-router-dom";
import { useState } from "react";


const Crd1 = styled('div')`
.cards01{
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    z-index: -1000;
    margin-left: 30px;
    margin-top: 10px;
}
h1{
    text-align: center;
}
`
const textcards = ('jj')
const Cards = () =>{
    return(

        <Crd1>
            <div className="cards01">
            <Card
            style={{
                width: '18rem'
            }}
>
  <img
    alt="Sample"
    src="https://s1.eda.ru/StaticContent/Photos/120131082601/120213174926/p_O.jpg"
    />
  <CardBody>
    <CardTitle tag="h5">
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
      >
    </CardSubtitle>
    <CardText 
    
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid possimus, corrupti voluptate aperiam dicta veritatis optio commodi mollitia iste libero eaque corporis fuga quia tenetur dolorum dolor quidem. Recusandae, repellendus?
    </CardText>
  </CardBody>
</Card>

<Card
            style={{
                width: '18rem'
            }}
>
  <img
    alt="Sample"
    src="https://ss.sport-express.ru/userfiles/materials/184/1842260/volga.jpg"
    />
  <CardBody>
    <CardTitle tag="h5">
   
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
      >
     
    </CardSubtitle>
    <CardText>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sint inventore perferendis tenetur iure temporibus totam, iusto explicabo, distinctio sed quis reprehenderit deleniti asperiores accusantium alias incidunt sapiente rem recusandae?
    </CardText>
  </CardBody>
</Card>


<Card
            style={{
                width: '18rem'
            }}
>
  <img
    alt="Sample"
    src="data:image/jpeg;base64,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"
    />
  <CardBody>
    <CardTitle tag="h5">
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
      >
    </CardSubtitle>
    <CardText>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab at ratione quae soluta eligendi voluptate vitae a consequatur, quis non accusantium suscipit doloremque facere amet illo reprehenderit fuga voluptas cupiditate.
    </CardText>
  </CardBody>
</Card>

<Card
            style={{
                width: '18rem'
            }}
>
  <img
    alt="Sample"
    src="https://ss.sport-express.ru/userfiles/materials/163/1636573/volga.jpg"
    />
  <CardBody>
    <CardTitle tag="h5">
   
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
      >
     
    </CardSubtitle>
    <CardText>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sint inventore perferendis tenetur iure temporibus totam, iusto explicabo, distinctio sed quis reprehenderit deleniti asperiores accusantium alias incidunt sapiente rem recusandae?
    </CardText>
  </CardBody>
</Card>

    </div>
    <h1>hh</h1>
    <div className="cards01">
            <Card
            style={{
                width: '18rem'
            }}
>
  <img
    alt="Sample"
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRISXOep4npTuGx2MDhF_So5yzhpw65ZVxiHw&usqp=CAU"
    />
  <CardBody>
    <CardTitle tag="h5">
   
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
      >
     
    </CardSubtitle>
    <CardText>
        
    </CardText>
  </CardBody>
</Card>

<Card
            style={{
                width: '18rem'
            }}
>
  <img
    alt="Sample"
    src="https://n1s1.elle.ru/3a/eb/42/3aeb422da1ec5d8906ac4289e79ec3e1/940x600_0xc35dbb80_12339495821493124098.jpeg"
    />
  <CardBody>
    <CardTitle tag="h5">
   
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
      >
     
    </CardSubtitle>
    <CardText>
        
    </CardText>
  </CardBody>
</Card>

<Card
            style={{
                width: '18rem'
            }}
>
  <img
    alt="Sample"
    src="https://cdn.pixabay.com/photo/2016/04/26/16/58/coffe-1354786__340.jpg"
    />
  <CardBody>
    <CardTitle tag="h5">
   
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
      >
     
    </CardSubtitle>
    <CardText>
        
    </CardText>
  </CardBody>
</Card>

<Card
            style={{
                width: '18rem'
            }}
>
  <img
    alt="Sample"
    src="https://imageproxy.wolt.com/menu/menu-images/601a76018b02d8495d0668d9/3099ed08-6f84-11eb-8262-be96ddb5d3dc_cafe_mie_l.jpeg"
    />
  <CardBody>
    <CardTitle tag="h5">
   
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
      >
     
    </CardSubtitle>
    <CardText>
        
    </CardText>
  </CardBody>
</Card>


            </div>
        </Crd1>
    )
}
export default Cards;