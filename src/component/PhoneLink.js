import React from 'react';
import styled from 'styled-components';


const PhoneLink = styled.a`
    text-decoration: none;
    color: #FFFF;

    &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
      color: #FFFF;
    }
`;

export default (props) => <PhoneLink {...props} />;