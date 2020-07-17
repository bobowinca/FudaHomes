import React, {useState} from 'react';
import styled from 'styled-components';
import {
  useHistory,
  useLocation,
  useParams
} from "react-router-dom";
import FeatureBox from './FeatureBox';
import CameraRoll from './CameraRoll';
import PhoneLink from './PhoneLink';
import StyledLink from './StyledLink';
import { Phone } from '@styled-icons/material';
import Modal from './Modal';
import ContactUs from './ContactUs';
import config from '../config.json';
import ReactBnbGallery from 'react-bnb-gallery';
import 'react-bnb-gallery/dist/style.css';  // styles for react-bnb-gallery
import {createMockGallery} from '../lib/create-mock-gallery';
// import './react-bnb-gallery-modal.scss';
// import PropTypes from 'prop-types';

//TO-DO: move to DB
const galleryData = [
  {
    caption: 'Living Room',
    category: 'LivingRoom',
    imgURL: 'https://lh3.googleusercontent.com/-mmtiL1BlFgNZcmdwQtbeLmAyKaQgun-pYH-wckPQm-smjRN0MsvHsnYHPdKNWm5NA8NgYtFMhC1o_-wf_tUnLJS2oXJx5-HBLeD7FCxCP0ljKRBYmbfiDoPFcXvgckv8XkhcCuPmw=w2160-h1200-no'
  },
  {
    caption: 'Kitchen',
    category: 'Kitchen',
    imgURL: 'https://lh3.googleusercontent.com/qHCJXqFIfOeRf6zX3G6hySY_ZMdJMDa_24Q5Nf6eaBIZFct15Qj8UX5Mgahxyit2050vlpdajJr9AJFrrZq2lNrQKiq7E5aZrXPu-cYNi6VVPtAdNP9nMlmQ_dccERgYs_Dfb_mokg=w640-h637-no'
  },
  {
    caption: 'Bathroom',
    category: 'Bathroom',
    imgURL: 'https://lh3.googleusercontent.com/fII5vdRk0jTgNE-hExp6k1Bh5opLMZGxr54bPZmJNudCUtJebyH-s4sFlfIlQqMglFBwV7DSBQK68t4Z4S73xj05wOwshFvbkVQgDrHNL5LC8QzGp04Fa9GrVhZWm6fbomcVIJKAhg=s750-no'
  },
  {
    caption: 'Basement',
    category: 'Basement',
    imgURL: 'https://lh3.googleusercontent.com/fh1PwDz2PlUT2SOUFSuiI8gLHAEOvuKxaa6WgAVGB5axbeJCZ1dgj44RKnMnmtWtjCNO9qMjV4hob92ErQ1VxPu7ulnKB22wdFNJDPCXNJPWnI_EDWmYBQMU3z2T9NxgQbjMdtzeNA=w640-h428-no'
  },
  {
    caption: 'Tapping & Painting',
    category: 'TappingPainting',
    imgURL: 'https://lh3.googleusercontent.com/1bVEy99sHDBlWhaBjWHs3UzlYCL1rydwrJOIUCxfz3UuML7_F8UgrCwd6Nf7gIvXHS2M_ocZ3Q0sS7jTrc6JV2U7OC3MH1pti3V88rk89vXFPjZOBJErtvEwJuU_wEfWfxjQW3nvqA=s500-no'
  },
];

const mockAlbums = createMockGallery();

const LivingRoom = [{
  photo: mockAlbums.livingroom[0],
  caption: "living room",
  subcaption: "made by Fuda",
  thumbnail: mockAlbums.livingroom[0],
}, {
  photo: mockAlbums.livingroom[1],
  caption: "living room",
  subcaption: "made by Fuda",
  thumbnail: mockAlbums.livingroom[1],
}, {
  photo: mockAlbums.livingroom[2],
  caption: "living room",
  subcaption: "made by Fuda",
  thumbnail: mockAlbums.livingroom[2],
}];

const Kitchen = [{
  photo: mockAlbums.kitchen[0],
  caption: "kitchen",
  subcaption: "made by Fuda",
  thumbnail: mockAlbums.kitchen[0],
}, {
  photo: mockAlbums.kitchen[1],
  caption: "kitchen",
  subcaption: "made by Fuda",
  thumbnail: mockAlbums.kitchen[1],
}, {
  photo: mockAlbums.kitchen[2],
  caption: "kitchen",
  subcaption: "made by Fuda",
  thumbnail: mockAlbums.kitchen[2],
}];

const Bathroom = [{
  photo: mockAlbums.bathroom[0],
  caption: "bathroom",
  subcaption: "made by Fuda",
  thumbnail: mockAlbums.bathroom[0],
}, {
  photo: mockAlbums.bathroom[1],
  caption: "bathroom",
  subcaption: "made by Fuda",
  thumbnail: mockAlbums.bathroom[1],
}, {
  photo: mockAlbums.bathroom[2],
  caption: "bathroom",
  subcaption: "made by Fuda",
  thumbnail: mockAlbums.bathroom[2],
}];

const Basement = [{
  photo: mockAlbums.basement[0],
  caption: "basement",
  subcaption: "made by Fuda",
  thumbnail: mockAlbums.basement[0],
}, {
  photo: mockAlbums.basement[1],
  caption: "basement",
  subcaption: "made by Fuda",
  thumbnail: mockAlbums.basement[1],
}, {
  photo: mockAlbums.basement[2],
  caption: "bathroom",
  subcaption: "made by Fuda",
  thumbnail: mockAlbums.basement[2],
}];

const TappingPainting = [{
  photo: mockAlbums.painting[0],
  caption: "Tapping & Painting",
  subcaption: "made by Fuda",
  thumbnail: mockAlbums.painting[0],
}, {
  photo: mockAlbums.painting[1],
  caption: "Tapping & Painting",
  subcaption: "made by Fuda",
  thumbnail: mockAlbums.painting[1],
}, {
  photo: mockAlbums.painting[2],
  caption: "Tapping & Painting",
  subcaption: "made by Fuda",
  thumbnail: mockAlbums.painting[2],
}];

// const photos = [{
//   photo: "https://source.unsplash.com/aZjw7xI3QAA/1144x763",
//   caption: "Viñales, Pinar del Río, Cuba",
//   subcaption: "Photo by Simon Matzinger on Unsplash",
//   thumbnail: "https://source.unsplash.com/aZjw7xI3QAA/100x67",
// }, {
//   photo: "https://source.unsplash.com/c77MgFOt7e0/1144x763",
//   caption: "La Habana, Cuba",
//   subcaption: "Photo by Gerardo Sanchez on Unsplash",
//   thumbnail: "https://source.unsplash.com/c77MgFOt7e0/100x67",
// }, {
//   photo: "https://source.unsplash.com/QdBHnkBdu4g/1144x763",
//   caption: "Woman smoking a tobacco",
//   subcaption: "Photo by Hannah Cauhepe on Unsplash",
//   thumbnail: "https://source.unsplash.com/QdBHnkBdu4g/100x67",
// }];

const photoAlbum = {
  LivingRoom,
  Kitchen,
  Bathroom,
  Basement,
  TappingPainting
}

// const Container = styled.div`
//   justify-content: center;
//   display: grid;
// `;

const WhiteBox = styled.div`
  background-color: #FFFF;
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

  @media (max-width: 768px)  {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    padding-top: 20px;
    padding-bottom: 10px;
    grid-gap: 6px;
  }

  @media (max-width: 425px)  {
    grid-template-columns: 1fr;
  }
`;

const FeatureOne = styled.div`
  grid-column: 2;
  grid-row: 1;
  margin: 10px;

  @media (max-width: 768px)  {
    grid-column: 2 / span 2;
    grid-row: 1;
  }

  @media (max-width: 425px)  {
    grid-column: 1;
    grid-row: 1;
  }
`;

const FeatureTwo = styled.div`
  grid-column: 3;
  grid-row: 1;
  margin: 10px;

  @media (max-width: 768px)  {
    grid-column: 2 / span 2;
    grid-row: 2;
  }

  @media (max-width: 425px)  {
    grid-column: 1;
    grid-row: 2;
  }
`;

const FeatureThree = styled.div`
  grid-column: 2;
  grid-row: 2;
  margin: 10px;

  @media (max-width: 768px)  {
    grid-column: 2 / span 2;
    grid-row: 3;
  }

  @media (max-width: 425px)  {
    grid-column: 1;
    grid-row: 3;
  }
`;

const FeatureFour = styled.div`
  grid-column: 3;
  grid-row: 2;
  margin: 10px;

  @media (max-width: 768px)  {
    grid-column: 2 / span 2;
    grid-row: 4;
  }

  @media (max-width: 425px)  {
    grid-column: 1;
    grid-row: 4;
  }
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

const ClickableBox = styled.div`
  padding: 10px;
  color: #FFFF;
  background-color: #80caf1;
  font-size: large;
  border-radius: 20px;
  &:hover {
    letter-spacing: 1px;
    transition: all 0.4s ease 0s;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.39);
  }
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

  &:hover {
    background-color: #B28104;
    letter-spacing: 1px;
    transition: all 0.4s ease 0s;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.39);
  }
`;

// const OpenPage = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   z-index: 3000;
//   background-color: white;
// `;

const HomeContent = props => {
  const imageURL01 = "https://lh3.googleusercontent.com/PI0FAhWG5yee7PM88t2Swh1M1IJ_SmrxOc5UC1rCr4PMTzudWtNZKQ0yhrPrPdpD-osStlWogF1pV3hEFub-MN0AycmrAiJrz_IzM3dPX0173nEcR57xueeBQ0A7Pf_5JMbaBHNS=w852-h851-no";
  const imageURL02 = "https://lh3.googleusercontent.com/_99UdjKJPJaIhtGbgJnua-XbwCkG1Ghc7mrv6ca6w7tWVA4ocqvJImSVlJAYiAYKItnK_AqsNdrHRBCzoiacnz-58zHjWHG74eS8XyOSPPrO_wLoVCkx9yfFuOE60YyJvLlyayu3=s225-no"
  const imageURL03 = "https://lh3.googleusercontent.com/FXsDe0OxtBIcy_K3KkucqQ98zTa19YEutemJ0yX3Y1Ob8a9U6sF-lHry5_tyDN7-epRj7lG9r37iKkwGFwRZ6FhNmrPsu5fAuynihv-78GodkaDgM4jgYb0qlmo8cJ5Ezv6i86VQ=s630-no"
  const imageURL04 = "https://lh3.googleusercontent.com/TB38YdNOfx_1-BL39qFz7px3g9M-uoiSFwdKmxNAnAyTwg6mikS05B86hCek7zzc063KUPkSRYeOV4Ud9w-i9BD0luYXtkAmWljhfgbRpsHxa60ttbEmoG3S1yKfXHBIP_bTeCsm=s225-no"
  const imageSize = {width: 60, height: 60}
  const qualityText = "With more than 10 years of experience in the home renovation business, FuDa Homes is a skilled, fully insured and reliable company"
  const featureBoxStyle = {
    justifyContent: "center",
    display: "grid",
  }

  const {selectPage} = props;
  const [showModal, setShowModal] = useState(false);
  const toggleModal = e => {e.stopPropagation();setShowModal(!showModal)};
  const [galleryOpened, setGalleryOpened] = useState(false);
  const toggleGallery = () => setGalleryOpened(!galleryOpened);
  // const navToPage = e => {e.stopPropagation();alert('Hello');toggleGallery();};
  const [selectedGallery, setGallery] = useState('');
  const selectCallery = value => {setGallery(value);}

  const history = useHistory();
  const navToGallery = e => {
    selectPage(config.DefaultRoutes.gallery);
    history.push('/gallery');
  }

  return (
    <>
      <BoxTitle>
        {`We've got the best home renovation team in GTA`}
      </BoxTitle>
      <BoxContainer>
        <FeatureOne style={featureBoxStyle}>
          <FeatureBox imgURL={imageURL01} imgSize={imageSize} captionTitle="Guaranteed Quality" captionText={qualityText} />
        </FeatureOne>
        <FeatureTwo style={featureBoxStyle}>
          <div onClick={toggleModal}>
          <FeatureBox imgURL={imageURL02} imgSize={imageSize} captionTitle="Get a Quote" captionText={qualityText} />
          </div>
        </FeatureTwo>
        <FeatureThree style={featureBoxStyle}>
          <FeatureBox imgURL={imageURL03} imgSize={imageSize} captionTitle="Our Versatile Team" captionText={qualityText} />
        </FeatureThree>
        <FeatureFour style={featureBoxStyle}>
          <FeatureBox imgURL={imageURL04} imgSize={imageSize} captionTitle="Clean Up" captionText={qualityText} />
        </FeatureFour>
      </BoxContainer>
      <BoxFooter>
        <BoxButton /*onClick={() => alert('Call (416) 820-8288 to get quoten now!') }*/ ><PhoneLink href="tel:416-820-8288"><Phone size="20" />Start your project today, get a quote now</PhoneLink></BoxButton>
      </BoxFooter>
      <WhiteBox>
        <BoxTitle>
          Project Gallery
        </BoxTitle>
        <div onClick={toggleGallery}>
          <CameraRoll data={galleryData} selectCallery={selectCallery} /> 
        </div>
        <BoxFooter>
          <ClickableBox onClick={navToGallery}>Browse Gallery &gt;&gt;</ClickableBox>
        </BoxFooter>
      </WhiteBox>
      {showModal && <Modal close={toggleModal}><ContactUs /></Modal>}
      {/* {galleryOpened && <OpenPage onClick={navToPage}><StyledLink to='/contactus'>Go to Gallery
      </StyledLink></OpenPage> } */}
      <ReactBnbGallery
        show={galleryOpened}
        photos={photoAlbum[selectedGallery]}
        onClose={toggleGallery}
      />
    </>
  )
}

// HomeContent.propTypes = {

// }

export default HomeContent
