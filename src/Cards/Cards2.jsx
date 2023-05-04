import React from "react";
import styled from "styled-components";
import { Card,CardBody,CardTitle,CardText,CardSubtitle} from "reactstrap";
import { Link } from "react-router-dom";

const Crd1 = styled('div')`
.cards01{
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    z-index: -1000;
    margin-left: 30px;
    margin-top: 10px;
}
`

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
    src="https://co.littlecaesars.com/static/1581698757-col-pepperoni.png"
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
    src="https://hips.hearstapps.com/hmg-prod/images/190409-pizza-burger-horizontal-2-1555624827.png?crop=0.668xw:1.00xh;0.167xw,0&resize=1200:*"
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
        </Crd1>
    )
}
export default Cards;