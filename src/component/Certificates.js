import React from 'react';
import styled from 'styled-components';

const intertek = require(`../assets/products/intertek.jpeg`);
const fc = require(`../assets/products/fc.jpeg`);
const ul = require(`../assets/products/ul.jpeg`);
const ic = require(`../assets/products/ic.jpeg`);

const certs = [
  intertek,
  fc,
  ul,
  ic
];

const Container = styled.div`
  // width : 80%;
  padding-top: 30px;
  padding-bottom: 30px;
  // text-align: center;
  width: 86%;
  display: flex;
  // flex: 1;
  flex-direction: row;
  // justify-content: center;
  flex-wrap: wrap;
  justify-content: space-evenly;
  // font-size: 24px;
`;

const StyledImg = styled.img`
  display: block;
  object-fit: contain;
  // max-width:186px;
  // max-height:95px;
  width: 64px;
  height: auto;
  // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const CertificateTabs = props => (
  certs.map((row) => (
    <StyledImg src={row} alt="Virtual Assistance" />
  ))
);

const SupportedSystem = props => {
  return (
    <Container>
      <CertificateTabs />
    </Container>
  )
}

export default SupportedSystem;