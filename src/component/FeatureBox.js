import React from 'react';
import './FeatureBox.css';
// import mainArtImage from '../fudaMainArt01.jpeg';
import styled from 'styled-components';

const Container = styled.div`
  // height: 50px;
  // width: 10px;
  width: 300px;
  height: 50px;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: #FFFF;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Caption = styled.div`
  text-align: justify;
  color: black;
  padding-top: 10px;
  padding-left: 16px;
  padding-right: 16px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const Content = styled.p`
  text-align: justify;
  color: black;
  font-size: 10px;
`;

const FeatureBox = ({imgURL, imgSize, captionTitle, captionText }) => {
  return (
    <Container>
      <img src={imgURL} className="featureBoxImage" width={imgSize.width} height={imgSize.height} alt="logo" />
      <Caption>
        <Title>{captionTitle}</Title>
        <Content>{captionText}</Content>
      </Caption>
    </Container>

  )
}

export default FeatureBox