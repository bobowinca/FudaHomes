import React from 'react';
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    useLocation,
    useParams
} from "react-router-dom";

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
`;

const Modal = props => {
    const history = useHistory();
    // const { id } = useParams();

    const  close = e => {
        e.stopPropagation();
        history.goBack();
    };

    return (
      <ModalWrapper onClick={close}>
        <ModalContainer>
          {props.children}
          {/* <div>{`id: ${id}`}</div> */}          
        </ModalContainer>
      </ModalWrapper>
    );
};


export default Modal;