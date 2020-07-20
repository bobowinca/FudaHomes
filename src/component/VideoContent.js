import React, {useState} from 'react';
import './MyHeader.scss';
import styled from 'styled-components';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useHistory,
//   useLocation,
//   useParams
// } from "react-router-dom";
import VideoCard from './VideoCard';
import { OndemandVideo } from '@styled-icons/material';


const Container = styled.div`
  background-color: #FFFF;
  // width: 100px;
  // height:200px;
  /* flex: 1; */
  // grid-row: 1;
  flex-direction: column;
  padding-top: 30px;
`;

const StyledHr = styled.hr`
  // margin: auto;
  width: 40%;
`;

const TextBox = styled.div`
  // padding-left: 20px;
  // justify-content: center;
  // align-items: center;
  text-align: center;
`;

const AlbumBox = styled.div`
  flex-direction: row;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
  padding-left: 6%;
  padding-right: 6%;
  padding-top: 40px;
  // background-color: red;
`;


const CardWrap = styled.div`
  padding: 20px;
`;

const videoList = [
  'https://www.youtube.com/embed/UBsbXqI8VzU',
  'https://www.youtube.com/embed/fjvfBbSVmvg',
  'https://www.youtube.com/embed/ORYoqFkNySo',
  'https://www.youtube.com/embed/xElLmxlfiK4',
  'https://www.youtube.com/embed/Vnhi_0jPOxU',
  'https://www.youtube.com/embed/CnKzv6BVFq0',
];

const VideoContent = props => {
  return (
    <>
      <Container>
        {/* <img src={fudalogo} className="header-logo" alt="logo" /> */}
        <TextBox>
          <h2>Check Out Our Videos <OndemandVideo size="30" /></h2>
        </TextBox>
        <AlbumBox>
          {videoList.map((it,index) => 
            <CardWrap>
              <VideoCard src={it} key={`video${index}`} allowFullScreen />
            </CardWrap>)}
        </AlbumBox>
      </Container>
    </>
  )
}

export default VideoContent;