import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const StyledLink = styled(Link)`
    text-decoration: none;
    color: #585858;

    &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
      color: #585858;
    }
`;

export default (props) => <StyledLink {...props} />;