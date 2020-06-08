import React, { useState } from 'react';
import logo from './logo.svg';
import fudalogo from './fudalogo.jpeg'
import './App.css';
import {Link, NavLink} from 'react-router-dom'
import MyHeader from './component/MyHeader'
import MainArt from './component/MainArt'
import FooterArt from './component/FooterArt'
// import MyGallery from './component/MyGallery'
// import FeatureBox from './component/FeatureBox'
import config from './config.json'
import styled from 'styled-components';
import HomeContent from './component/HomeContent';
import ProductContent from './component/ProductContent';

const items = ['HOME','SERVICES', 'PROJECTS', 'ABOUT US', 'CONTACT US'];
const defaultRoute = config.DefaultRoutes;

// const galleryData = [
//   {
//     category: 'Living Room',
//     imgURL: 'https://lh3.googleusercontent.com/-mmtiL1BlFgNZcmdwQtbeLmAyKaQgun-pYH-wckPQm-smjRN0MsvHsnYHPdKNWm5NA8NgYtFMhC1o_-wf_tUnLJS2oXJx5-HBLeD7FCxCP0ljKRBYmbfiDoPFcXvgckv8XkhcCuPmw=w2160-h1200-no'
//   },
//   {
//     category: 'Kitchen',
//     imgURL: 'https://lh3.googleusercontent.com/qHCJXqFIfOeRf6zX3G6hySY_ZMdJMDa_24Q5Nf6eaBIZFct15Qj8UX5Mgahxyit2050vlpdajJr9AJFrrZq2lNrQKiq7E5aZrXPu-cYNi6VVPtAdNP9nMlmQ_dccERgYs_Dfb_mokg=w640-h637-no'
//   },
//   {
//     category: 'Bath Room',
//     imgURL: 'https://lh3.googleusercontent.com/fII5vdRk0jTgNE-hExp6k1Bh5opLMZGxr54bPZmJNudCUtJebyH-s4sFlfIlQqMglFBwV7DSBQK68t4Z4S73xj05wOwshFvbkVQgDrHNL5LC8QzGp04Fa9GrVhZWm6fbomcVIJKAhg=s750-no'
//   },
//   {
//     category: 'Basement',
//     imgURL: 'https://lh3.googleusercontent.com/fh1PwDz2PlUT2SOUFSuiI8gLHAEOvuKxaa6WgAVGB5axbeJCZ1dgj44RKnMnmtWtjCNO9qMjV4hob92ErQ1VxPu7ulnKB22wdFNJDPCXNJPWnI_EDWmYBQMU3z2T9NxgQbjMdtzeNA=w640-h428-no'
//   },
//   {
//     category: 'Tapping & Painting',
//     imgURL: 'https://lh3.googleusercontent.com/1bVEy99sHDBlWhaBjWHs3UzlYCL1rydwrJOIUCxfz3UuML7_F8UgrCwd6Nf7gIvXHS2M_ocZ3Q0sS7jTrc6JV2U7OC3MH1pti3V88rk89vXFPjZOBJErtvEwJuU_wEfWfxjQW3nvqA=s500-no'
//   },
// ];

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

const MenuItem = styled.div`
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

// const BoxTitle = styled.div`
//   // width : 80%;
//   text-shadow: 2px 2px 5px grey;
//   padding-top: 30px;
//   text-align: center;
//   font-size: 24px;
// `;

// const BoxContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   grid-template-rows: repeat(2, 1fr);
//   padding-top: 40px;
//   padding-bottom: 30px;
//   grid-gap: 36px;
//   // width : 80%;
//   // width: 300px;
//   // height: 50px;
//   // background-color: red;

//   @media (max-width: 768px)  {
//     grid-template-columns: repeat(4, 1fr);
//     grid-template-rows: repeat(4, 1fr);
//     padding-top: 20px;
//     padding-bottom: 10px;
//     grid-gap: 6px;
//   }

//   @media (max-width: 425px)  {
//     grid-template-columns: 1fr;
//   }
// `;

// const WhiteBox = styled.div`
//   background-color: #FFFF;
// `;

// const GreyBox = styled.div`
//   background-color: #f2f2f2;
// `;

// const FeatureOne = styled.div`
//   grid-column: 2;
//   grid-row: 1;
//   margin: 10px;

//   @media (max-width: 768px)  {
//     grid-column: 2 / span 2;
//     grid-row: 1;
//   }

//   @media (max-width: 425px)  {
//     grid-column: 1;
//     grid-row: 1;
//   }
// `;

// const FeatureTwo = styled.div`
//   grid-column: 3;
//   grid-row: 1;
//   margin: 10px;

//   @media (max-width: 768px)  {
//     grid-column: 2 / span 2;
//     grid-row: 2;
//   }

//   @media (max-width: 425px)  {
//     grid-column: 1;
//     grid-row: 2;
//   }
// `;

// const FeatureThree = styled.div`
//   grid-column: 2;
//   grid-row: 2;
//   margin: 10px;

//   @media (max-width: 768px)  {
//     grid-column: 2 / span 2;
//     grid-row: 3;
//   }

//   @media (max-width: 425px)  {
//     grid-column: 1;
//     grid-row: 3;
//   }
// `;

// const FeatureFour = styled.div`
//   grid-column: 3;
//   grid-row: 2;
//   margin: 10px;

//   @media (max-width: 768px)  {
//     grid-column: 2 / span 2;
//     grid-row: 4;
//   }

//   @media (max-width: 425px)  {
//     grid-column: 1;
//     grid-row: 4;
//   }
// `;

// const BoxFooter = styled.div`
//   // width : 80%;
//   // padding-top: 30px;
//   padding-bottom: 30px;
//   text-align: center;
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   // font-size: 24px;
// `;

// const BoxButton = styled.div`
//   padding: 10px;
//   text-align: center;
//   text-shadow: 2px 2px 5px grey;
//   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
//   color: #FFFF;
//   background-color: #C6930A;
//   width: minmax(160px,auto);
//   border-radius: 4px;
//   // font-size: 24px;
// `;

// const GalleryContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(5, 1fr);
//   // grid-template-rows: repeat(2, 1fr);
//   padding-top: 40px;
//   padding-bottom: 30px;
//   // grid-gap: 36px;
//   // width : 80%;
//   // width: 300px;
//   // height: 50px;
//   // background-color: red;
// `;

const activePageStyle = {
  border: "solid #ccc",
  borderWidth: "1px 1px 0 1px"
}

const Item = props => {
  const {path, name, selectPage, currentPage} = props;
  const route = path === 'home'? '/' : `/${path}`;
  const tabStyle = currentPage === name ? activePageStyle : null;
  return (<li><Link to={route}><MenuItem onClick={()=>{selectPage(name)}} style={tabStyle} >{name}</MenuItem></Link></li>);
}

const Menu = props => {
  const tabs = Object.entries(props.tabs);  //cast tabs object to array
  const {selectPage, currentPage} = props;
  return (
    <ul>
      {tabs.map(([path, name]) => <Item style key={`menu-item ${path}`} name={name} path={path} selectPage={selectPage} currentPage={currentPage} />)}
    </ul>
  )
}

const renderContent = (param) => {
  console.log(`>>>>>>>>param: ${param}`);
  switch(param) {
    case defaultRoute.home:
      console.log(`we are here ${defaultRoute.home}`);
      return <HomeContent/>;
    case defaultRoute.products:
      console.log(`we are here ${defaultRoute.products}`);
      return <ProductContent/>;
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

  // const gridColor = currentPage === defaultRoute.home ? {backgroundColor: "#FFFF"} : {backgroundColor: "#f2f2f2"};

  return (
  /** Styled Component Imple */
  <Wrapper>
    <DMCAHeader>
      <a href="//www.dmca.com/Protection/Status.aspx?ID=6caa66d4-7315-4613-9fda-60fa8cdae868" title="DMCA.com Protection Status" class="dmca-badge"> <img src ="https://images.dmca.com/Badges/dmca-badge-w150-5x1-10.png?ID=6caa66d4-7315-4613-9fda-60fa8cdae868"  alt="DMCA.com Protection Status" /></a>  
      <script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"> </script>
    </DMCAHeader>
    <div className="one">
      <NavBar>
        <MyHeader/>
        <Navi>
          <Menu tabs={defaultRoute} selectPage={selectPage} currentPage={currentPage} />
        </Navi>
      </NavBar>
    </div>
    <div className="two">
      <MainArt />
    </div>
    <div className="three">
      {
        renderContent(currentPage)
      }
      {/* <HomeContent/> */}
      {/* <BoxTitle>
        {`We've got the best home renovation team in GTA`}
      </BoxTitle>
      <BoxContainer>
        <FeatureOne>
          <FeatureBox imgURL={imageURL01} imgSize={imageSize} captionTitle="Guaranteed Quality" captionText={qualityText} />
        </FeatureOne>
        <FeatureTwo>
          <FeatureBox imgURL={imageURL02} imgSize={imageSize} captionTitle="Get a Quote" captionText={qualityText} />
        </FeatureTwo>
        <FeatureThree>
          <FeatureBox imgURL={imageURL03} imgSize={imageSize} captionTitle="Our Versatile Team" captionText={qualityText} />
        </FeatureThree>
        <FeatureFour>
          <FeatureBox imgURL={imageURL04} imgSize={imageSize} captionTitle="Clean Up" captionText={qualityText} />
        </FeatureFour>
      </BoxContainer>
      <BoxFooter>
        <BoxButton onClick={() => alert('Call 888-888-8888 to get quoten now!') } >Start your project today, get a quote now</BoxButton>
      </BoxFooter>
      <WhiteBox>
        <BoxTitle>
          Project Gallery
        </BoxTitle>
        <MyGallery data={galleryData} />        
      </WhiteBox> */}
    </div>
    {/* <div className="four" style={gridColor}>
    {(currentPage === defaultRoute.home) &&
      <>
        <BoxTitle>
          Project Gallery
        </BoxTitle>
        <MyGallery data={galleryData} />
      </> }
    </div> */}
    <div className="four"></div>
    <div className="five"><FooterArt /></div>
  </Wrapper>
  );
}

export default App;
