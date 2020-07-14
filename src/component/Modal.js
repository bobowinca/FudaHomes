import React from 'react';
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation,
    useParams
} from "react-router-dom";
import StyledLink from './StyledLink';

const FULL_PAGE_TEXT_DEFAULT = 'Go to page >';

const ModalWrapper = styled.div`
//   display: flex;
//   // background-image: url('https://lh3.googleusercontent.com/-mmtiL1BlFgNZcmdwQtbeLmAyKaQgun-pYH-wckPQm-smjRN0MsvHsnYHPdKNWm5NA8NgYtFMhC1o_-wf_tUnLJS2oXJx5-HBLeD7FCxCP0ljKRBYmbfiDoPFcXvgckv8XkhcCuPmw=w2160-h1200-no');
//   background-color: #FFFF;
//   height: 300px;
//   background-position: center;
//   background-size: cover;
//   position: relative;
//   color: #585858;
//   font-family: "Courier New", Courier, monospace;
//   font-size: 25px;

    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    // width 100%;
    // height: 100%;
    // height: 100vh;
    background: rgba(0, 0, 0, 0.15);

    // position: fixed;
    // left: 0;
    // top: 0;
    // width: 100%;
    // height: 100vh;
    // overflow-y: scroll;
    // -webkit-overflow-scrolling: touch;
    // background: rgba(0, 0, 0, 0.15);
`;

const ModalContainer = styled.div`
    position: absolute;
    // background-color: red;
    background: #FFFF;
    top: 40px;
    bottom: 40px;
    left: 20%;
    right: 20%;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    // width: 80%;
    // height: 80;
    // padding: 16px;
    border: 1px solid 585858;
    border-radius: 6px;

    @media (max-width: 768px)  {
      left: 10%;
      right: 10%;
    }

    @media (max-width: 425px)  {
      left: 6%;
      right: 6%;
    }
`;

const TopRight = styled.div`
  position: absolute;
  top: 0;
  right: 16px;
  padding-top: 6px;
  // background-color: red;
  // height: 20px;
  // width: 20px;
`;

const Modal = props => {
    const history = useHistory();
    // const { id } = useParams();
    const location = useLocation();
    // console.log('current location:');
    // console.log(location);
    // console.log('current history:');
    // console.log(history);

    const {openFullPage, fullPageText} = props;
    const fullPageBtnText = fullPageText || FULL_PAGE_TEXT_DEFAULT;

    const  close = e => {
      // console.log('++++++++++++++++ close called!!!!');
      e.stopPropagation();
      history.goBack();
    };

    // const newlocation = {
    //   pathname: location.pathname,
    //   state: { 
    //     product: location.state.product,
    //     // background: undefined,
    //   }
    // }

    // console.log('newlocation>>>');
    // console.log(newlocation);

    const goFullPage = e => {
      e.stopPropagation();  // stop the propagation to parent
      // console.log('newlocation>>>');
      // console.log(newlocation)
      // console.log('history>>>');
      // console.log(history);
      if (location.state?.background) {
        location.state.background = undefined;
      }
      history.replace(location);
      // location.state.background = undefined;
      // history.location.state.background = undefined;
    }

    return (
      <ModalWrapper onClick={close}>
        <ModalContainer>
          {props.children}
          {openFullPage && <TopRight onClick={goFullPage}>{fullPageBtnText}</TopRight>}
          {/* <div>{`id: ${id}`}</div> */}          
        </ModalContainer>
      </ModalWrapper>
    );
};


export default Modal;