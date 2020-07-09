import React from 'react';
import styled from 'styled-components';


const ComingSoon = styled.div`
  display: flex;
  // background-image: url('https://lh3.googleusercontent.com/-mmtiL1BlFgNZcmdwQtbeLmAyKaQgun-pYH-wckPQm-smjRN0MsvHsnYHPdKNWm5NA8NgYtFMhC1o_-wf_tUnLJS2oXJx5-HBLeD7FCxCP0ljKRBYmbfiDoPFcXvgckv8XkhcCuPmw=w2160-h1200-no');
  background-color: #FFFF;
  height: 300px;
  background-position: center;
  background-size: cover;
  position: relative;
  color: #585858;
  font-family: "Courier New", Courier, monospace;
  font-size: 25px;
`;

const StyledHr = styled.hr`
  margin: auto;
  width: 40%;
`;

const TopLeft = styled.div`
  position: absolute;
  top: 0;
  left: 16px;
`;

const BottomLeft = styled.div`
  position: absolute;
  bottom: 0;
  left: 16px;
`;

const LeftBox = styled.div`
  flex: 1;
`;

const RightBox = styled.div`
  flex: 1;
`;

const MiddleContainer = styled.div`
  flex: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export default (props) => <ComingSoon {...props}>
    {/* <TopLeft>
      <p>Logo</p>
    </TopLeft> */}
    <MiddleContainer class="middle">
      {/* <iframe src={'https://smarth.ca/alarm-system-1'} /> */}
      <h1>COMING SOON</h1>
      <StyledHr />
      <p>...very soon</p>
    </MiddleContainer>
    {/* <BottomLeft>
    <p>Some text</p>
    </BottomLeft> */}
</ComingSoon>;