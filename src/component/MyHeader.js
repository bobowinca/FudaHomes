import React from 'react';
import './MyHeader.scss';
import fudalogo from '../fudalogoHori.png';
import styled from 'styled-components';

const Container = styled.div`
  // width: 100px;
  // height:200px;
  /* flex: 1; */
  // grid-row: 1;
`;

const MyHeader = props => {
  return (
    <Container>
      <img src={fudalogo} className="header-logo" alt="logo" />
    </Container>
  )
}

export default MyHeader