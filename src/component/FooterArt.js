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
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('https://lh3.googleusercontent.com/xErm8u3nzhBWw6BZR025I1lFeu3HmOG-5UDWECMcAmZ22cTHiw7eO_ldP-WieGnmLFWZ-JmWh_uGTC9cK9MQ8ehgyOIk-qtbt8itEanX6ohYBzTx4k21cyTcvuPgcro9LmvoeRhdCQ=w1200-h900-no');
  height: 100%;
  background-position: 0 70%;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  // background-color: purple;
`;

const Caption = styled.div`
  font-family: Lucida Console;
  font-size: 18px;
  font-style: italic;
  text-align: justify;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
`;

const FooterArt = props => {
  return (
    <Container>
      {/* <img src={mainArtImage} className="mainArtImg" alt="logo" /> */}
      <Caption>
        Exceed your expectation.
      </Caption>
    </Container>

  )
}

export default FooterArt