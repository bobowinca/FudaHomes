import React from 'react';
import './MyHeader.scss';
import fudalogo from '../fudalogoHori.png';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams
} from "react-router-dom";
import Modal from './Modal';
import SupportedSystem from './SupportedSystem';

const Container = styled.div`
  // width: 100px;
  // height:200px;
  /* flex: 1; */
  // grid-row: 1;
  flex-direction: column;
  padding-top: 30px;
`;

const StyledHr = styled.hr`
  // margin: auto;
  width: 40%;
`;

const TextBox = styled.div`
  padding-left: 20px;
`;

const StyledUl = styled.ul`
  padding-right: 20px;
`;

const FooterImage = styled.div`
  height: 200px;
  background-position: 0 40%;
  background-image: url(${props=>props.imgUrl});
  background-size: cover;
  margin-top: 30px;
  margin-bottom: 10px;
`;

const StyledIFrame = styled.iframe`
    width: 420px;
    height: 320px;

    // @media (max-width: 768px)  {
    //   left: 10%;
    //   right: 10%;
    // }

    @media (max-width: 425px)  {
      width: 292px;
      height: 250px;
    }
`;

const BulletPoints = ({bullets}) => {
  if(bullets && bullets.length) {
    const listItems = bullets.map((row, index) => <li key={`bullet${index}`}>{row}</li>);
    return (
      <StyledUl>
        {/* <li>Coffee</li>
        <li>Tea</li>
        <li>Coca Cola</li> */}
        {listItems}
      </StyledUl>
    )
  }

  return null;
};

const ProductDetails = props => {
  const { id } = useParams();
  const location = useLocation();

  const product = location.state && location.state.product;
  const productImg = require(`../assets/products/${product.image}`);
  const { description } = product;
  const bullets = description.split("\\n");
  // console.log(bullets);

  return (
    // <Modal>
      <Container>
        {/* <img src={fudalogo} className="header-logo" alt="logo" /> */}
        <TextBox>
          <h2>{decodeURIComponent(id)}</h2>
          {/* <div>{`product: ${JSON.stringify(product)}`}</div>           */}
        </TextBox>
        <img src={productImg} className="ProductCardImage" width="100%" alt="logo" />
        <TextBox>
          <h4>TECHNICAL PARAMETER</h4>
          {/* <div>{product.description}</div> */}
          <BulletPoints bullets={bullets} />
          <StyledIFrame /*width="420" height="320"*/ src="https://www.youtube.com/embed/UBsbXqI8VzU">
          </StyledIFrame>
        </TextBox>
        {/* <img src={productImg} className="ProductCardImage" width="100%" height="100px" alt="logo" /> */}
        <FooterImage imgUrl={productImg} />
        <SupportedSystem modal={true} />
      </Container>
    // </Modal>
  )
}

export default ProductDetails