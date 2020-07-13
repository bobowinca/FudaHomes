import React, {useState, useEffect} from 'react';
import {
  // Switch,
  // Route,
  // Link,
  // useParams,
  useRouteMatch
} from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';

import StyledLink from './StyledLink';
import ProductCard from './ProductCard';
import SupportedSystem from './SupportedSystem';
import Certificates from './Certificates';
import MyGallery from './MyGallery';
import installYourselfImg from '../assets/products/InstallYourself.jpeg';
import installationServicesImg from '../assets/products/InstallationServices.jpeg';

//TO-DO: move to DB
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

// const installationServicesImg = require(`../assets/products/InstallationServices.jpeg`);

const ProductBox = styled.div`
  // grid-column: 2;
  // grid-row: 1;
  margin: 10px;
  justify-content: center;

  @media (max-width: 768px)  {
    // grid-column: 2 / span 2;
    // grid-row: 1;
  }

  @media (max-width: 425px)  {
    // grid-column: 1;
    // grid-row: 1;
  }
`;

const BoxTitle = styled.div`
  // width : 80%;
  text-shadow: 2px 2px 5px grey;
  padding-top: 30px;
  text-align: center;
  font-size: 24px;
`;

const BoxContainer = styled.div`
  // display: grid;
  // grid-template-columns: repeat(4, 1fr);
  // grid-template-rows: repeat(2, 1fr);
  // padding-top: 40px;
  // padding-bottom: 30px;
  // grid-gap: 36px;
  // // width : 80%;
  // // width: 300px;
  // // height: 50px;
  // // background-color: red;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 40px;


  @media (max-width: 768px)  {
    // grid-template-columns: repeat(4, 1fr);
    // grid-template-rows: repeat(4, 1fr);
    // padding-top: 20px;
    // padding-bottom: 10px;
    // grid-gap: 6px;
  }

  @media (max-width: 425px)  {
    // grid-template-columns: 1fr;
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
  flex-wrap: wrap;
  // font-size: 24px;
`;

const WhiteBox = styled.div`
  background-color: #FFFF;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BodyBox = styled.div`
  // background-color: #FFFF;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BottomBox = styled.div`
  // background-color: #FFFF;
  // border-style: groove;
  // border-width: thin;
  // border-color: #ccc
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  // background-image: url(${installYourselfImg});
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  // min-height: ${props => props.h};
  // height: ${props => props.h};
  width: 76%;
  padding-top: ${props => props.h}; //this is the auto div size
  margin: 20px;
  // position: relative;
`;

const CategoryView = props => {
  const imageSize = {width: 332, height: 332}
  const captionText = 'Check it out';
  // const productCardStyle = {
  //   justifyContent: "center",
  //   // display: "grid",
  // }


  const [category, setCategory] = useState([]);

  const { path, url } = useRouteMatch();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://fudahomes.ca/backend/product-category',
      );

      // console.log('result.data: ')
      // console.log(result.data);
 
      setCategory(result.data);
    };
 
    fetchData();
  }, []);

  const CategoryList = () => (
    category.map(
      row =>{
        const categoryName = row.name.replace(/\s+/g, ''); //remove spaces
        return (
          <ProductBox key={`${row.category_id}.${row.name}`}>
            <StyledLink to={`${url}/${categoryName}`}>
              <ProductCard imgURL={row.image} imgSize={imageSize} title={row.description} buttonText={captionText} />            
            </StyledLink>
          </ProductBox>)
      }
    )
  )

  return (
    (category.length > 0)&&
    <>
      <BoxTitle>
        {`We've got the best Smart Home Procut collection for you, because you deserve it`}
      </BoxTitle>
      <BoxContainer>
        <CategoryList />
      </BoxContainer>
      <BoxFooter>
        {/* <BoxButton onClick={() => alert('Call 888-888-8888 to get quoten now!') } >Start your project today, get a quote now</BoxButton> */}
        {/* <img src={installYourselfImg} className="ProductCardImage" alt="footer01" /> */}
      </BoxFooter>
      <div  />
      <BodyBox>
        <BoxTitle>
          Install It Yourself
        </BoxTitle>
        <BottomBox image={installYourselfImg} h={'27%'} />
        <BoxTitle>
          We also provide on-site installation services
        </BoxTitle>
        <BottomBox image={installationServicesImg} h={'30%'} />
        <BoxTitle>
          Work with your favourite Virtual Assistance
        </BoxTitle>
        <SupportedSystem />
        {/* <BoxTitle>
          Certificates
        </BoxTitle> */}
        {/* <Certificates /> */}
        {/* <BoxFooter>Supported System</BoxFooter> */}
        {/* <BoxTitle>
          We also provide on-site installation services
        </BoxTitle>
        <BottomBox image={installationServicesImg} /> */}
      </BodyBox>
      <WhiteBox>
        <BoxTitle>
          Certificates
        </BoxTitle>
        <Certificates />
      </WhiteBox>
      {/* <WhiteBox>
        <BoxTitle>
          Project Gallery
        </BoxTitle>
        <MyGallery data={galleryData} />        
      </WhiteBox> */}
    </>
  );
}

export default CategoryView;