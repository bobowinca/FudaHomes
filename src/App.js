import React, { useState } from 'react';
import logo from './logo.svg';
import fudalogo from './fudalogo.jpeg'
import './App.css';
import {Link, NavLink} from 'react-router-dom'
import MyHeader from './component/MyHeader'
import MainArt from './component/MainArt'
import FooterArt from './component/FooterArt'
// import CameraRoll from './component/CameraRoll'
// import FeatureBox from './component/FeatureBox'
import config from './config.json'
import styled from 'styled-components';
import HomeContent from './component/HomeContent';
import ProductContent from './component/ProductContent';
import GalleryContent from './component/GalleryContent';
import ContactUs from './component/ContactUs';

const items = ['HOME','SERVICES', 'PROJECTS', 'ABOUT US', 'CONTACT US'];
const defaultRoute = config.DefaultRoutes;

const mainArtImgs = {
  HOME: 'https://lh3.googleusercontent.com/Hj-dgWkISAeNwzLL7zzVJufSoA9gIx4dGVSgv0qnFm-RJMvqTHjEj4RIYUOmxAhjAr1TV_DoO5jza_VBX4xFqsu5vjwmfPL9zB8bFR8zhL1ema0y8rUSyTFQ_GmTdF45mMaqJR9MEw=w2296-h1530-no',
  // PRODUCTS: 'https://lh3.googleusercontent.com/pw/ACtC-3ce_xLPSwXG1NQs3PlpZD9suimm-M2qR9U9uffg0n4K4VNufNTj-usnmvwO0gbWzOcp7kaEoOvAp-dd3iqot6pAyxjIM19oan4qtPdA7vwAYEH4iIWyprYHREfW0yymGSohFJd6iRTj9FVdl1DqV75E=w2560-h924-no'
  PRODUCTS: 'https://lh3.googleusercontent.com/pw/ACtC-3eXVheh7qoghKIRRiLJuaJ_YQUHtE16c5iMVtQen8AR3YxoHWFE2tf21nKKnP99KkVXBEbELL18T0IsX1exBQeAMFRyH5fPfdfbft-5NOO7zN48EoCUElJn0FtXFfqCfzbQf6zM6qbfYSSFRpz_y7xo=w2000-h1333-no'
}

const mainArtCaption = {
  PRODUCTS: 'Welcome to Smart Home'
}

const Wrapper = styled.div`
  font-family: sans-serif, Georgia, serif;  // font stack
  color: #585858;
  display: grid;
  width: 100%;
  // width: 1086px;
  grid-template-columns: repeat(8, 1fr);
  /* grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); */
  // grid-gap: 2px; // only gap for debug?
  grid-auto-rows: minmax(100px, auto);
  background-color: #FFFF;

  @media (max-width: 768px)  {
    width: 100%;
  }
`;

const DMCAHeader = styled.div `
  grid-column: 8;
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

const NavBar = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  // background-color: pink;
`;

const Navi = styled.div`
  margin-left: 100px;
  margin-bottom: 16px;
  font-size: 16px;
  // border-bottom: 1px solid #ccc;

  @media (max-width: 600px)  {
    margin-left: 40PX;
    margin-bottom: 12px;
    font-size: 12px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px)  {
    margin-left: 24PX;
    margin-bottom: 12px;
    font-size: 14px;
    flex-wrap: nowrap;
  }

  @media (max-width: 1024px)  {
    margin-left: 24PX;
    margin-bottom: 12px;
    font-size: 14px;
    flex-wrap: nowrap;
  }
`;

const TabItem = styled.div`
  text-align: center;
  color: #000000;
  padding: 0.5rem 0.75rem;

  // &:hover {
  //   background-color: #F2F2F2;
  //   font-weight: bold;
  //   color: #33b5e5;
  //   text-decoration: underline;
  // }

  // &:visited {
  //   background-color: black;
  //   color: black;
  // }

  &:hover {
    // background-color: white;
    // border: solid #ccc;
    border: solid #ece6ff;
    border-width: 1px 1px 0 1px;
  }

  // &:visited {
  //   // background-color: white;
  //   border: solid #ccc;
  //   border-width: 1px 1px 0 1px;
  // }

  // &:active {
  //   // background-color: white;
  //   border: solid #ccc;
  //   border-width: 1px 1px 0 1px;
  // }
`;

const activePageStyle = {
  border: "solid #ccc",
  borderWidth: "1px 1px 0 1px"
}

const Item = props => {
  const {path, name, selectPage, currentPage} = props;
  const route = path === 'home'? '/' : `/${path}`;
  const tabStyle = currentPage === name ? activePageStyle : null;
  return (<li className="navTab"><Link to={route}><TabItem onClick={()=>{selectPage(name)}} style={tabStyle} >{name}</TabItem></Link></li>);
}

const NavTabs = props => {
  const tabs = Object.entries(props.tabs);  //cast tabs object to array
  const {selectPage, currentPage} = props;
  return (
    <ul className="navTabs">
      {tabs.map(([path, name]) => <Item style key={`menu-item ${path}`} name={name} path={path} selectPage={selectPage} currentPage={currentPage} />)}
    </ul>
  )
}

const renderContent = (param, selectPage) => {
  console.log(`>>>>>>>>param: ${param}`);
  switch(param) {
    case defaultRoute.home:
      console.log(`we are here ${defaultRoute.home}`);
      return <HomeContent selectPage={selectPage} />;
    case defaultRoute.products:
      console.log(`we are here ${defaultRoute.products}`);
      return <ProductContent/>;
    case defaultRoute.gallery:
        console.log(`we are here ${defaultRoute.gallery}`);
        return <GalleryContent />;
    case defaultRoute.contactus:
      return <ContactUs />;
    default:
      return null;
  }
}

function App(props) {
  // const imageURL01 = "https://lh3.googleusercontent.com/PI0FAhWG5yee7PM88t2Swh1M1IJ_SmrxOc5UC1rCr4PMTzudWtNZKQ0yhrPrPdpD-osStlWogF1pV3hEFub-MN0AycmrAiJrz_IzM3dPX0173nEcR57xueeBQ0A7Pf_5JMbaBHNS=w852-h851-no";
  // const imageURL02 = "https://lh3.googleusercontent.com/_99UdjKJPJaIhtGbgJnua-XbwCkG1Ghc7mrv6ca6w7tWVA4ocqvJImSVlJAYiAYKItnK_AqsNdrHRBCzoiacnz-58zHjWHG74eS8XyOSPPrO_wLoVCkx9yfFuOE60YyJvLlyayu3=s225-no"
  // const imageURL03 = "https://lh3.googleusercontent.com/FXsDe0OxtBIcy_K3KkucqQ98zTa19YEutemJ0yX3Y1Ob8a9U6sF-lHry5_tyDN7-epRj7lG9r37iKkwGFwRZ6FhNmrPsu5fAuynihv-78GodkaDgM4jgYb0qlmo8cJ5Ezv6i86VQ=s630-no"
  // const imageURL04 = "https://lh3.googleusercontent.com/TB38YdNOfx_1-BL39qFz7px3g9M-uoiSFwdKmxNAnAyTwg6mikS05B86hCek7zzc063KUPkSRYeOV4Ud9w-i9BD0luYXtkAmWljhfgbRpsHxa60ttbEmoG3S1yKfXHBIP_bTeCsm=s225-no"
  // const imageSize = {width: 60, height: 60}
  // const qualityText = "With more than 10 years of experience in the home renovation business, FuDa Homes is a skilled, fully insured and reliable company"
  const [currentPage, setState] = useState(props.currentPage||defaultRoute.home);

  const selectPage = page => {
    setState(page);
  }

  // const showCaption = (currentPage === defaultRoute.home);
  const mainArtCaptionText = mainArtCaption[currentPage] ?? ''
  
  // const gridColor = currentPage === defaultRoute.home ? {backgroundColor: "#FFFF"} : {backgroundColor: "#f2f2f2"};

  return (
  /** Styled Component Imple */
  <Wrapper>
    <div className="one">
      <NavBar>
        <MyHeader/>
        <Navi>
          <NavTabs tabs={defaultRoute} selectPage={selectPage} currentPage={currentPage} />
        </Navi>
      </NavBar>
    </div>
    <div className="two">
      <MainArt imgUrl={mainArtImgs[currentPage]} showCaption={true} captionText={mainArtCaptionText} />
    </div>
    <div className="three">
      {
        renderContent(currentPage, selectPage)
      }
    </div>
    {/* <div className="four" style={gridColor}>
    {(currentPage === defaultRoute.home) &&
      <>
        <BoxTitle>
          Project Gallery
        </BoxTitle>
        <CameraRoll data={galleryData} />
      </> }
    </div> */}
    {/* <div className="four"></div> */}
    <div className="five"><FooterArt /></div>
  </Wrapper>
  );
}

export default App;
