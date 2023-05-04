import React from "react";
import styled from "styled-components";
import { Card,CardBody,CardTitle,CardText,CardSubtitle} from "reactstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
const Menu = styled('div')`
    h1{
        text-align: center;
    }
`
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


function menu(){
    return(
        <Menu>
            <h1>Burgers</h1>
                 <Crd1>
            <div className="cards01">
            <Card
            style={{
                width: '18rem'
            }}
>
  <img
    alt="Sample"
    src="https://www.realsimple.com/thmb/z3cQCYXTyDQS9ddsqqlTVE8fnpc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/real-simple-mushroom-black-bean-burgers-recipe-0c365277d4294e6db2daa3353d6ff605.jpg"
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
    src="https://www.docteurclic.com/galerie-photos/image_3328_400.jpg"
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
            </div>
        </Crd1>
        <h1>Pizza</h1>
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
        <h1>sandwich</h1>
        <Crd1>
            <div className="cards01">
            <Card
            style={{
                width: '18rem'
            }}
>
  <img
    alt="Sample"
    src="https://insanelygoodrecipes.com/wp-content/uploads/2021/03/Homemade-Grilled-Cheese-Sandwich-with-Tomatoes.png"
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
    src="https://static.toiimg.com/photo/83740315.cms"
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
        <h1>
meat</h1>
        <Crd1>
            <div className="cards01">
            <Card
            style={{
                width: '18rem'
            }}
>
  <img
    alt="Sample"
    src="https://vkusno-i-prosto.ru/wp-content/uploads/2011/06/Depositphotos_73049901_s-2019.jpg"
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
    src="https://food.pibig.info/uploads/posts/2023-03/1678492817_food-pibig-info-p-blyuda-iz-myasa-govyadini-oboi-71.jpg"
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
        <h1>
seafood</h1>
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
        <h1>
breakfast</h1>
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
    <h1>
beverages</h1>
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
        </Menu>
    )
}
export default menu;