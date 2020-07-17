import React, {useState, useEffect} from 'react';
import {
  Switch,
  Route,
  // Link,
  useParams,
  useLocation,
  useRouteMatch
} from "react-router-dom";
import ComingSoon from './ComingSoon';
import Modal from './Modal';
import ProductDetails from './ProductDetails';
import styled from 'styled-components';
// import FeatureBox from './FeatureBox';
import ProductCard from './ProductCard';
import CameraRoll from './CameraRoll';
import axios from 'axios';
// import PropTypes from 'prop-types';

// import AlarmSystem from '../assets/products/AlarmSystem.jpeg';
// import SmartCamera from '../assets/products/SmartCamera.jpeg';
// import LightingSystem from '../assets/products/LightingSystem.jpeg';
// import SmartPower from '../assets/products/SmartPower.jpeg';
// import HomeAppliance from '../assets/products/HomeAppliance.jpeg';
// import OtherSmart from '../assets/products/OtherSmart.jpeg';
// import StyledLink from './StyledLink';
import CategoryView from './CategoryView';
import CategoryInventory from './CategoryInventory';

const ProductContent = props => {
  const { path, url } = useRouteMatch();
  const location = useLocation();

  const background = location.state && location.state.background;
  // console.log('-location:');
  // console.log(location);
  // console.log('-background:');
  // console.log(background)

  return (
    <>
    <Switch location={background || location}>
      <Route exact path={path}>
        {/* <h3>Please select a category.</h3> */}
        <CategoryView />
      </Route>
      <Route exact path={`${path}/SmartAppliance`} component={ComingSoon} /*render={() => (window.location = 'https://smarth.ca/home-appliance-1')}*/ />
      <Route exact path={`${path}/product/:id`} component={ProductDetails} />
      <Route path={`${path}/:categoryName`}>
        <CategoryInventory />
      </Route>
    </Switch>
    {background && <Route exact path={`${path}/product/:id`} render={()=>(<Modal openFullPage={true}><ProductDetails/></Modal>)} /*component={ProductDetails}*/ />}
    </>
  )
}

// HomeContent.propTypes = {

// }

export default ProductContent
