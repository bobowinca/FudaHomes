import React from 'react';
import styled from 'styled-components';

const MyCard = styled.div`
  display: flex;
  flex-direction: column;
  // background-color: purple;

  &:hover {
    // letter-spacing: 1px;
    transition: all 0.4s ease 0s;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.39);
  }
`;

const PictureFrame = styled.div`
  height: ${props => props.height || '198px'};
  width: ${props => props.width || 'auto'};
  color: #FFFF;
  background-image: url(${props => props.imgURL});
  background-size: cover;
`;

const GalleryCard = ({item, selectCallery, width, height}) => {
  // const cardStyle = {
  //   'height': '98%',
  //   'color': '#FFFF',
  //   'backgroundImage': `url(${item.imgURL})`,
  //   'backgroundSize': 'cover',
  // };

  const captionStyle = {
    'textAlign': 'center',
    'paddingTop': '10px',
    'paddingBottom': '10px',
    'textShadow': '1px 1px 2px grey',
  }

  const handleClick = () => {
    console.log('item.category');
    console.log(item.category);
    selectCallery(item.category);
  }

  return (
    <MyCard onClick={handleClick}>
      {/* <div style={cardStyle}></div> */}
      <PictureFrame imgURL={item.imgURL} width={width} height={height} />
      <div style={captionStyle}>{item.caption}</div>    
    </MyCard>
  )
}

export default GalleryCard;