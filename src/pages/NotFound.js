import React from 'react';
import styled from 'styled-components';


const NotFoundContainer = styled.a`
  display: flex;
  // flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: 200px;
`;

const NotFound = () => {
  return (
    <NotFoundContainer>
      <h1>404- Page NotFound</h1>
    </NotFoundContainer>
  );
}

export default NotFound;