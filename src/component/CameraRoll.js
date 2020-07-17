import React from 'react';
import styled from 'styled-components';
import GalleryCard from './GalleryCard';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: minmax(220px, auto);
  // grid-gap: 1px;
  // grid-template-rows: repeat(2, 1fr);
  padding-top: 40px;
  padding-bottom: 30px;
`;

export const trimSpaces = str => {console.log(str.replace(/\s+|&/g, '')); return str.replace(/\s+|&/g, '');};

const CameraRoll = ({data, selectCallery}) => {
  return (
    <Container>
      {data.map(it=><GalleryCard item={it} key={`${it.category}`} selectCallery={selectCallery} />)}
    </Container>
  )
}

export default CameraRoll;