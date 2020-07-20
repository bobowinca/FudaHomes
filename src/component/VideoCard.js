import React from 'react';
import styled from 'styled-components';

const StyledIFrame = styled.iframe`
    height: ${props => props.height || '320px'};
    width: ${props => props.width || '420px'};

    // @media (max-width: 768px)  {
    //   left: 10%;
    //   right: 10%;
    // }

    @media (max-width: 425px)  {
      width: 292px;
      height: 250px;
    }
`;

const VideoCard = props => {
  // const {src} = props;
  return <StyledIFrame {...props} />
}

export default VideoCard;