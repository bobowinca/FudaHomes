import React from 'react';
// import './MyHeader.css';
// import mainArtImage from '../fudaMainArt01.jpeg';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  // background-image: url('https://lh3.googleusercontent.com/IVolVP0FH_Btqb2R1vKCe5Ajhz1_w9eihSke58v3AnPXGFEpom6DTghoXGCtfm_Nqdxogg8EgA=w1080-h608-p-no-v0');
  // background-size: cover
  // background-position: center
  // width: 100wh
  // height: 100vh
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('https://lh3.googleusercontent.com/Hj-dgWkISAeNwzLL7zzVJufSoA9gIx4dGVSgv0qnFm-RJMvqTHjEj4RIYUOmxAhjAr1TV_DoO5jza_VBX4xFqsu5vjwmfPL9zB8bFR8zhL1ema0y8rUSyTFQ_GmTdF45mMaqJR9MEw=w2296-h1530-no');
  height: 100%;
  background-position: 0 60%;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  // background-color: purple;
`;

const Caption = styled.div`
  font-family: Lucida Console;
  font-style: italic;
  text-align: justify;
  position: absolute;
  top: 40%;
  left: 30%;
  transform: translate(-50%, -50%);
  color: white;

  @media (max-width: 1024px)  {
    transform: translate(-40%, -50%);
  }
`;

const MyHeader = props => {
  return (
    <Container>
      {/* <img src={mainArtImage} className="mainArtImg" alt="logo" /> */}
      <Caption>
        <h1>Dedicated to deliver the highest quality<br /> and best value for your loved home</h1>
      </Caption>
    </Container>

  )
}

export default MyHeader