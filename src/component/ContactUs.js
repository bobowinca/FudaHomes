import React, { useState } from 'react';
import styled from 'styled-components';
import PhoneLink from './PhoneLink';
import { Phone } from '@styled-icons/material';
import axios from 'axios';


const MyContactContainer = styled.div`
  display: flex;
  background-color: #FFFF;
  flex-direction: column;
  flex: 1;
  height: 100%;
`;

const AddressBox = styled.div`
  display: none;
  // justify-content: center;
  // align-items: center;
  // padding-top: 15px;

  @media (max-width: 768px)  {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 60px;
  // background-color: red;
`;

const StyledFormTitle = styled.label`
  font-size: 24px;
  margin-bottom: 20px;
`;

const StyledLabel = styled.label`
  margin-bottom: 20px;
`;

const StyledTextArea = styled.textarea`
  height: 80px;
  margin-bottom: 20px;
`;

const StyledInput = styled.input`
  height: 30px;
  margin-bottom: 20px;
`;

const StyledButton = styled.button`
  height: 30px;
  // margin-bottom: 20px;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  // margin-bottom: 20px;
`;

const PhoneButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 6px;
  padding-right: 6px;
  border-radius: 4px;
  color: white;
  background-color: #008CBA;
  height: 30px;

  &:hover {
    // background-color: #B28104;
    letter-spacing: 0.2px;
    transition: all 0.4s ease 0s;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.39);
  }
`;

const BoxTitle = styled.div`
  // width : 80%;
  text-shadow: 2px 2px 5px grey;
  padding-top: 30px;
  text-align: center;
  font-size: 24px;
`;

const ContactBox = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  padding-top: 40px;

  // @media (max-width: 768px)  {
  //   // width: 100%;
  //   // padding-left: 4px;
  //   // padding-right: 4px;
  // }

  @media (max-width: 425px)  {
    flex-direction: column;
    // width: 100%;
    // padding-left: 2px;
    // padding-right: 0px;
  }
`;

const FormBox = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  // align-items: center;
  // background-color: red;
`;

const MapBox = styled.div`
  flex: 1;
  display: flex;
  // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  // background-color: blue;
  justify-content: center;
  align-items: center;
  // padding: 10px;
  // margin-left: 20px;
  // margin-right: 10px;

  @media (max-width: 768px)  {
    // margin-left: 10px;
    // margin-right: 10px;
  }
  
  @media (max-width: 425px)  {
    // margin-left: 30px;
    // margin-right: 10px;
    // flex-direction: column;
  }
`;

const StyledIFrame = styled.iframe`
  flex:1;
  // width: 100%;
  height: 538px;
  padding: 2px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-left: 30px;

  @media (max-width: 768px)  {
    height: 360px;
  }
  
  @media (max-width: 425px)  {
    height: 300px;
    margin-left: 10px;
    margin-right: 10px;
  }

`;

// export default (props) => <MyContactContainer {...props}>
//   <AddressBox>
//     3505 Laird Rd Unit 10,<br/> 
//     Mississauga, ON<br/>
//     L5L 5Y7<br/>
//     (416) 820-8288    
//   </AddressBox>
// </MyContactContainer>;

const ContactUs = props => {

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [buttonText, setButtonText] = useState('Send Message');

  const formSubmit = (e) => {
    e.preventDefault();
  
    setButtonText('...sending');

    const data = {
      name: name,
      email: email,
      message: message
    }

    // axios.post('http://localhost:50080/api/v1/send', data)
    axios.post('http://fudahomes.ca/backend/api/v1/send', data)
    .then( res => {
        console.log('res:');
        console.log(res);
        setSent(true, resetForm());
    })
    .catch( () => {
      console.log('Message not sent')
    })
  }

  const resetForm = () => {
    setName('');
    setMessage('');
    setEmail('');
    setButtonText('Send Message');
    setTimeout(function(){ setSent(false); }, 1500);
  }

  return (
    <MyContactContainer {...props}>
      <BoxTitle>Please contact us for inquiries</BoxTitle>
      <ContactBox>
        <MapBox>
          <StyledIFrame src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11573.132470979212!2d-79.6977281!3d43.5172885!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x830d4ea6af673a38!2zRnVEYSBIb21lcyDlr4zovr7lrrblsYUgLSBIb21lIERlc2lnbiBhbmQgUmVub3ZhdGlvbiBHcm91cA!5e0!3m2!1sen!2sca!4v1594104184691!5m2!1sen!2sca"
            frameborder="0" style={{border:0}} allowfullscreen data-aos="fade-left" data-aos-duration="3000" />
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11573.132470979212!2d-79.6977281!3d43.5172885!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x830d4ea6af673a38!2zRnVEYSBIb21lcyDlr4zovr7lrrblsYUgLSBIb21lIERlc2lnbiBhbmQgUmVub3ZhdGlvbiBHcm91cA!5e0!3m2!1sen!2sca!4v1594104184691!5m2!1sen!2sca" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> */}
        </MapBox>
        <FormBox>
          <StyledForm onSubmit={ (e) => formSubmit(e)}>
            <StyledFormTitle>Contact Us</StyledFormTitle>
            {/* <StyledLabel class="message-name" htmlFor="message-name">Your Name</StyledLabel> */}
            <StyledInput onChange={e => setName(e.target.value)} name="name" type="text" placeholder="Name" value={name}/>

            {/* <StyledLabel class="message-email" htmlFor="message-email">Your Email</StyledLabel> */}
            <StyledInput onChange={(e) => setEmail(e.target.value)} name="email" type="email" placeholder="your@email.com" required value={email} />

            {/* <StyledLabel class="message" htmlFor="message-input">Your Message</StyledLabel> */}
            <StyledTextArea onChange={e => setMessage(e.target.value)} name="message" type="text" placeholder="#your message" value={message} required/>
            {sent && <div>Message Sent!</div>}
            <ButtonBox>
              <StyledButton type="submit" disabled={sent}>{ buttonText }</StyledButton>
              <PhoneButton><PhoneLink href="tel:416-820-8288"><Phone size="20" />(416) 820-8288</PhoneLink></PhoneButton>
            </ButtonBox>
          </StyledForm>
        </FormBox>
      </ContactBox>
      <AddressBox>
        Unit 10, 3505 Laird Rd,<br/>
        Mississauga, ON<br/>
        L5L 5Y7<br/>
        {/* (416) 820-8288 */}
      </AddressBox>
    </MyContactContainer>
  )
}

export default ContactUs;