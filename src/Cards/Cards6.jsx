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
    src="https://s1.1zoom.me/big0/160/344291-svetik.jpg "
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
    src="https://www.steakhome.ru/upload/img/kak-gotovit-moreprodukty2.jpg"
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
    src="https://www.gastronom.ru/binfiles/images/20160809/b9452c25.jpg"
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
    src="https://aif-s3.aif.ru/images/013/784/7c77f392ce2f07ee92fa173630ca9ada.jpg"
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
    src="https://www.man-meat.ru/upload/blog/stati/1.jpg"
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