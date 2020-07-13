import React from 'react';
import './ProductCard.scss';
// import mainArtImage from '../fudaMainArt01.jpeg';
import styled from 'styled-components';
// import {Link} from 'react-router-dom';
import {
  useRouteMatch
} from "react-router-dom";
// import StyledLink from './StyledLink';

const Container = styled.div`
  // height: 50px;
  // width: 10px;
  width: 332px;
  // height: 50px;
  padding-top: 10px;
  padding-bottom: 30px;
  // padding-left: 16px;
  // padding-right: 16px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #FFFF;
  // background-color: #f2f2f2;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media (max-width: 768px)  {
    // width: 100%;
    // padding-left: 4px;
    // padding-right: 4px;
  }

  @media (max-width: 425px)  {
    // width: 100%;
    // padding-left: 2px;
    // padding-right: 0px;
  }
`;

const Caption = styled.div`
  text-align: justify;
  color: black;
  padding-top: 24px;
  padding-left: 16px;
  padding-right: 16px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding-bottom: 18px;
`;

// const Content = styled.p`
//   text-align: justify;
//   color: black;
//   font-size: 10px;
// `;

const BoxButton = styled.div`
  padding: 10px;
  text-align: center;
  text-shadow: 2px 2px 5px grey;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  color: #FFFF;
  background-color: #C6930A;
  width: minmax(160px,auto);
  border-radius: 4px;
  // font-size: 24px;

  &:hover {
    background-color: #B28104;
    letter-spacing: 1px;
    transition: all 0.4s ease 0s;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.39);
  }
`;

const ProductCard = ({imgURL, imgSize, title, buttonText,  }) => {
  const image = require(`../assets/products/${imgURL}`);

  return (
    <Container>
      <Title>{title}</Title>
      <img src={image} className="ProductCardImage" width={imgSize.width} alt="logo" />
      <Caption>
        <BoxButton >{buttonText}</BoxButton>
      </Caption>
    </Container>

  )
}

export default ProductCard;