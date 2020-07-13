import React from 'react';
import styled from 'styled-components';

const google = require(`../assets/products/google.png`);
const siri = require(`../assets/products/siri.jpeg`);
const alexa = require(`../assets/products/alexa.png`);
const dueros = require(`../assets/products/dueros.jpeg`);

const systems = [
  {name: 'google', img: google},
  {name: 'siri', img: siri},
  {name: 'alexa', img: alexa},
  {name: 'dueros', img: dueros}
];

const Container = styled.div`
  // width : 80%;
  padding-top: 30px;
  padding-bottom: 30px;
  // text-align: center;
  width: 100%;
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
  width: 186px;
  height: auto;
  // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const SystemTabs = props => (
  systems.map((row) => (
    <StyledImg key={row.name} src={row.img} alt="Virtual Assistance" />
  ))
);

const SupportedSystem = props => {
  const { modal } = props;
  return (
    <Container>
      <SystemTabs />
    </Container>
  )
}

export default SupportedSystem;