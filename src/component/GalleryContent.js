import React, {useState} from 'react';
import './MyHeader.scss';
import styled from 'styled-components';
import { PhotoLibrary } from '@styled-icons/material';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useHistory,
//   useLocation,
//   useParams
// } from "react-router-dom";
import {createMockGallery} from '../lib/create-mock-gallery';
import GalleryCard from './GalleryCard';
import ReactBnbGallery from 'react-bnb-gallery';
// import './react-bnb-gallery.scss';
// import 'react-bnb-gallery/dist/style.css';  // styles for react-bnb-gallery

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

const StyledUl = styled.ul`
  padding-right: 20px;
`;

const FooterImage = styled.div`
  height: 200px;
  background-position: 0 40%;
  background-image: url(${props=>props.imgUrl});
  background-size: cover;
  margin-top: 30px;
  margin-bottom: 10px;
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

const photoAlbum = {
  LivingRoom,
  Kitchen,
  Bathroom,
  Basement,
  TappingPainting
}

const CardWrap = styled.div`
  padding: 30px;
`;

const GalleryContent = props => {
  const [galleryOpened, setGalleryOpened] = useState(false);
  const toggleGallery = () => setGalleryOpened(!galleryOpened);
  // const navToPage = e => {e.stopPropagation();alert('Hello');toggleGallery();};
  const [selectedGallery, setGallery] = useState('');
  const selectCallery = value => {setGallery(value);}

  return (
    // <Modal>
    <>
      <Container>
        {/* <img src={fudalogo} className="header-logo" alt="logo" /> */}
        <TextBox>
          <h2>Project Gallery <PhotoLibrary size="30" /></h2>
        </TextBox>
        <AlbumBox>
          {galleryData.map(it => 
            <CardWrap onClick={toggleGallery}>
              <GalleryCard item={it} key={`${it.category}`} selectCallery={selectCallery} width="320px" height="198px" />
            </CardWrap>)}
        </AlbumBox>
      </Container>
      <ReactBnbGallery
        show={galleryOpened}
        photos={photoAlbum[selectedGallery]}
        onClose={toggleGallery}
      />
    </>
    // </Modal>
  )
}

export default GalleryContent;