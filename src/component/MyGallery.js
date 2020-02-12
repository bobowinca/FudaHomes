import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: minmax(220px, auto);
  // grid-gap: 1px;
  // grid-template-rows: repeat(2, 1fr);
  padding-top: 40px;
  padding-bottom: 30px;
`;

const MyCard = styled.div`
  display: flex;
  flex-direction: column;
  // background-color: purple;
`;

const GalleryCard = ({item}) => {
  const cardStyle = {
    'height': '98%',
    'color': '#FFFF',
    'backgroundImage': `url(${item.imgURL})`,
    'backgroundSize': 'cover',
  };

  const captionStyle = {
    'textAlign': 'center',
    'paddingTop': '10px',
    'textShadow': '1px 1px 2px grey',
  }

  return (
    <MyCard>
      <div style={cardStyle}></div>
      <div style={captionStyle}>{item.category}</div>    
    </MyCard>
  )
}

const MyGallery = ({data}) => {
  return (
    <Container>
      {data.map(it=><GalleryCard item={it} key={`${it.category}_id`} />)}
    </Container>
  )
}

export default MyGallery;