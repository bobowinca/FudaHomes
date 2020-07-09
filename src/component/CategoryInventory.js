import React, {useState, useEffect} from 'react';
import {
  Switch,
  Route,
  // Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';

import StyledLink from './StyledLink';
import ProductCard from './ProductCard';

const ProductBox = styled.div`
  // grid-column: 2;
  // grid-row: 1;
  margin: 20px;
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
  background-color: #FFFF;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  // justify-content: space-evenly;
  justify-content: center;
  align-items: flex-start
  // padding-left: 10%;
  // padding-right: 10%;
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

const CenterBox = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: auto;

  @media (max-width: 1024px)  {
    // grid-template-columns: repeat(4, 1fr);
    // grid-template-rows: repeat(4, 1fr);
    // padding-top: 20px;
    // padding-bottom: 10px;
    // grid-gap: 6px;
    max-width: 746px;
  }

  @media (max-width: 768px)  {
    // grid-template-columns: repeat(4, 1fr);
    // grid-template-rows: repeat(4, 1fr);
    // padding-top: 20px;
    // padding-bottom: 10px;
    // grid-gap: 6px;
  }

  @media (max-width: 425px)  {
    justify-content: center;
    // max-width: 342px;
  }
`;

const BoxTitle = styled.div`
  // width : 80%;
  text-shadow: 2px 2px 5px grey;
  padding-top: 30px;
  text-align: center;
  font-size: 24px;
`;

const BoxFooter = styled.div`
  // width : 80%;
  // padding-top: 30px;
  // padding-bottom: 30px;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  // font-size: 24px;
`;

const imageMap = new Map(
  [['AlarmSystem',1],
  ['SmartCamera',2],
  ['SmartLighting',3],
  ['SmartPower',4],
  ['SmartAppliance',5],
  ['OtherSmarties',6],]
);

const CategoryInventory = props => {
  const imageSize = {width: 332, height: 332}
  const captionText = 'Learn More';

  const {categoryName} = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const categoryId = imageMap.get(categoryName)
    const fetchData = async () => {
      const result = await axios(
        `http://fudahomes.ca/backend/products/${categoryId}`,
      );

      console.log('result.data:')
      console.log(result.data);
 
      setProducts(result.data);
    };
 
    fetchData();
  }, []);

  const ProductsList = () => {
    console.log('products:');
    console.log(products);
    // const productCardStyle = {
    //   justifyContent: "center",
    //   // display: "grid",
    // }

    return (
    products.map(
      row =>{
        // const categoryName = row.name.replace(/\s+/g, ''); //remove spaces
        const openProduct = ()=> {
          const windowFeatures = "width=800, height=800,location=no, toolbar=no, menubar=no,resizable=yes,scrollbars=yes,status=no";
          const windowObjectReference = window.open(row.product_url, row.name, windowFeatures);  //noopener will not return anything for the current window
        }

        return (
          <ProductBox key={`${row.product_id}.${row.name}`} onClick={openProduct}>
            {/* <a href={`${row.product_url}`} rel="noopener noreferrer" target="_blank"> */}
              <ProductCard imgURL={row.image} imgSize={imageSize} captionTitle={row.name} captionText={captionText} />            
            {/* </a> */}
          </ProductBox>)
      }
    )
  );
  }

  // alert(`path: ${path}, url: ${url},categoryName:${categoryName}`);
  console.log(`products.length: ${products.length}`);
  return (
    (products.length > 0)&&
    <>
      {/* <BoxTitle>
        {`We've got the best Smart Home Procut collection for you, because you deserve it`}
      </BoxTitle> */}
      <BoxContainer>
        <CenterBox>
          <ProductsList />
        </CenterBox>
      </BoxContainer>
      <BoxFooter>
        {/* <BoxButton onClick={() => alert('Call 888-888-8888 to get quoten now!') } >Start your project today, get a quote now</BoxButton> */}
      </BoxFooter>
      {/* <WhiteBox>
        <BoxTitle>
          Project Gallery
        </BoxTitle>
        <MyGallery data={galleryData} />        
      </WhiteBox> */}
    </>
  )
}

export default CategoryInventory;