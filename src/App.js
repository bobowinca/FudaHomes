import React from 'react';
import logo from './logo.svg';
import fudalogo from './fudalogo.jpeg'
import './App.css';
import MyHeader from './component/MyHeader'
import MainArt from './component/MainArt'
import FooterArt from './component/FooterArt'
import MyGallery from './component/MyGallery'
import FeatureBox from './component/FeatureBox'
import styled from 'styled-components';

const items = ['HOME','SERVICES', 'PROJECTS', 'ABOUT US', 'CONTACT US'];

const galleryData = [
  {
    category: 'Living Room',
    imgURL: 'https://lh3.googleusercontent.com/-mmtiL1BlFgNZcmdwQtbeLmAyKaQgun-pYH-wckPQm-smjRN0MsvHsnYHPdKNWm5NA8NgYtFMhC1o_-wf_tUnLJS2oXJx5-HBLeD7FCxCP0ljKRBYmbfiDoPFcXvgckv8XkhcCuPmw=w2160-h1200-no'
  },
  {
    category: 'Kitchen',
    imgURL: 'https://lh3.googleusercontent.com/qHCJXqFIfOeRf6zX3G6hySY_ZMdJMDa_24Q5Nf6eaBIZFct15Qj8UX5Mgahxyit2050vlpdajJr9AJFrrZq2lNrQKiq7E5aZrXPu-cYNi6VVPtAdNP9nMlmQ_dccERgYs_Dfb_mokg=w640-h637-no'
  },
  {
    category: 'Bath Room',
    imgURL: 'https://lh3.googleusercontent.com/fII5vdRk0jTgNE-hExp6k1Bh5opLMZGxr54bPZmJNudCUtJebyH-s4sFlfIlQqMglFBwV7DSBQK68t4Z4S73xj05wOwshFvbkVQgDrHNL5LC8QzGp04Fa9GrVhZWm6fbomcVIJKAhg=s750-no'
  },
  {
    category: 'Basement',
    imgURL: 'https://lh3.googleusercontent.com/fh1PwDz2PlUT2SOUFSuiI8gLHAEOvuKxaa6WgAVGB5axbeJCZ1dgj44RKnMnmtWtjCNO9qMjV4hob92ErQ1VxPu7ulnKB22wdFNJDPCXNJPWnI_EDWmYBQMU3z2T9NxgQbjMdtzeNA=w640-h428-no'
  },
  {
    category: 'Tapping & Painting',
    imgURL: 'https://lh3.googleusercontent.com/1bVEy99sHDBlWhaBjWHs3UzlYCL1rydwrJOIUCxfz3UuML7_F8UgrCwd6Nf7gIvXHS2M_ocZ3Q0sS7jTrc6JV2U7OC3MH1pti3V88rk89vXFPjZOBJErtvEwJuU_wEfWfxjQW3nvqA=s500-no'
  },
];

const Wrapper = styled.div`
  font-family: sans-serif, Georgia, serif;  // font stack
  color: #585858;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  /* grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); */
  grid-gap: 2px;
  grid-auto-rows: minmax(100px, auto);
  background-color: #FFFF;
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
`;

const BoxTitle = styled.div`
  // width : 80%;
  text-shadow: 2px 2px 5px grey;
  padding-top: 30px;
  text-align: center;
  font-size: 24px;
`;

const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  padding-top: 40px;
  padding-bottom: 30px;
  grid-gap: 36px;
  // width : 80%;
  // width: 300px;
  // height: 50px;
  // background-color: red;
`;

const FeatureOne = styled.div`
  grid-column: 2;
  grid-row: 1;
  margin-right: 20px;
`;

const FeatureTwo = styled.div`
  margin-left: 20px;
  grid-column: 3;
  grid-row: 1;
`;

const FeatureThree = styled.div`
  grid-column: 2;
  grid-row: 2;
  margin-right: 20px;
`;

const FeatureFour = styled.div`
  margin-left: 20px;
  grid-column: 3;
  grid-row: 2;
`;

const BoxFooter = styled.div`
  // width : 80%;
  // padding-top: 30px;
  padding-bottom: 30px;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  // font-size: 24px;
`;

const BoxButton = styled.div`
  padding: 10px;
  text-align: center;
  text-shadow: 2px 2px 5px grey;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  color: #FFFF;
  background-color: #C6930A;
  width: minmax(160px,auto);
  border-radius: 4px;
  // font-size: 24px;
`;

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

const Item = props => {
  return <li>{props.value}</li>;
}

const Menu = props => {
  return (
    <ul>
      {props.tabs.map((item) => <Item key={`menu-item ${item}`} value={item} />)}
    </ul>
  )
}

function App() {
  const imageURL01 = "https://lh3.googleusercontent.com/PI0FAhWG5yee7PM88t2Swh1M1IJ_SmrxOc5UC1rCr4PMTzudWtNZKQ0yhrPrPdpD-osStlWogF1pV3hEFub-MN0AycmrAiJrz_IzM3dPX0173nEcR57xueeBQ0A7Pf_5JMbaBHNS=w852-h851-no";
  const imageURL02 = "https://lh3.googleusercontent.com/_99UdjKJPJaIhtGbgJnua-XbwCkG1Ghc7mrv6ca6w7tWVA4ocqvJImSVlJAYiAYKItnK_AqsNdrHRBCzoiacnz-58zHjWHG74eS8XyOSPPrO_wLoVCkx9yfFuOE60YyJvLlyayu3=s225-no"
  const imageURL03 = "https://lh3.googleusercontent.com/FXsDe0OxtBIcy_K3KkucqQ98zTa19YEutemJ0yX3Y1Ob8a9U6sF-lHry5_tyDN7-epRj7lG9r37iKkwGFwRZ6FhNmrPsu5fAuynihv-78GodkaDgM4jgYb0qlmo8cJ5Ezv6i86VQ=s630-no"
  const imageURL04 = "https://lh3.googleusercontent.com/TB38YdNOfx_1-BL39qFz7px3g9M-uoiSFwdKmxNAnAyTwg6mikS05B86hCek7zzc063KUPkSRYeOV4Ud9w-i9BD0luYXtkAmWljhfgbRpsHxa60ttbEmoG3S1yKfXHBIP_bTeCsm=s225-no"
  const imageSize = {width: 60, height: 60}
  const qualityText01 = "With more than 10 years of experience in the home renovation business, FuDa Homes is a skilled, fully insured and reliable company"

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={fudalogo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    
    /** CSS grid imple */
    // <div class="wrapper">
    //   <myheader className="one">
    //     One
    //     {/* <myheader/> */}
    //     <div>aaaaaaa</div>
    //   </myheader>
    //   <div className="two">Two</div>
    //   <div className="three">Three</div>
    //   <div className="four">Four</div>
    //   <div className="five">Five</div>
    //   <div className="six">Six</div>
    // </div>

  /** Styled Component Imple */
  <Wrapper>
    <div className="one">
      <NavBar>
        <MyHeader/>
        <Navi>
          <Menu tabs={items}/>
        </Navi>
      </NavBar>
    </div>
    <div className="two">
      <MainArt />
    </div>
    <div className="three">
      <BoxTitle>
        We've got the best home renovation team in GTA
      </BoxTitle>
      <BoxContainer>
        <FeatureOne>
          <FeatureBox imgURL={imageURL01} imgSize={imageSize} captionTitle="Guaranteed Quality" captionText={qualityText01} />
        </FeatureOne>
        <FeatureTwo>
          <FeatureBox imgURL={imageURL02} imgSize={imageSize} captionTitle="Get a Quote" captionText={qualityText01} />
        </FeatureTwo>
        <FeatureThree>
          <FeatureBox imgURL={imageURL03} imgSize={imageSize} captionTitle="Our Versatile Team" captionText={qualityText01} />
        </FeatureThree>
        <FeatureFour>
          <FeatureBox imgURL={imageURL04} imgSize={imageSize} captionTitle="Clean Up" captionText={qualityText01} />
        </FeatureFour>
      </BoxContainer>
      <BoxFooter>
        <BoxButton onClick={() => alert('Call 888-888-8888 to get quoten now!') } >Start your project today, get a quote now</BoxButton>
      </BoxFooter>
    </div>
    <div className="four">
      <BoxTitle>
        Project Gallery
      </BoxTitle>
      <MyGallery data={galleryData} />
    </div>
    <div className="five"></div>
    <div className="six"><FooterArt /></div>
  </Wrapper>
  );
}

export default App;
