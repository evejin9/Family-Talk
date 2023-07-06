import React from 'react';
import styled from 'styled-components';
import data from '../../data.json'
import { LogInUser } from '../../features/loginSlice';
import { useSelector } from 'react-redux';
import { MdOutlineEmail } from 'react-icons/md'
import { PiCake } from 'react-icons/pi'
import { LiaPenSolid } from 'react-icons/lia'
import { AiOutlineUser } from 'react-icons/ai'
import { BsPhone } from 'react-icons/bs'







const StyledDiv = styled.div`
  display: flex;
  /* background-color: blue; */
  width: 50%;
  height: 400px;
  margin-top: 20px;
  /* justify-content: center; */
  /* align-items: center; */
  flex-direction: column;
  border: 1px solid rgb(172, 172 ,172);
  border-radius: 6px;
`;

const StyledSpan = styled.span`
  margin-left: 20px;
  margin-bottom: 20px;
  font-size: 17px;
`;

function DetailedProfile(props) {

  const logInUser = useSelector(LogInUser);
  
  return (
    <StyledDiv>
      <div style={{margin: '0 auto', marginBottom: '50px', fontSize: '20px', marginTop: '20px'}}>User details</div>
      <StyledSpan><AiOutlineUser size={25} style={{marginRight: '5px'}} color='#f5cc8d'/>ID:  {logInUser.id}</StyledSpan>
      <StyledSpan><LiaPenSolid size={25} style={{marginRight: '5px'}} color='#f5cc8d'/>Name:  {logInUser.name}</StyledSpan>
      <StyledSpan><PiCake size={25} style={{marginRight: '5px'}} color='#f5cc8d'/>Birth date:  {logInUser.birth}</StyledSpan>
      <StyledSpan><BsPhone size={25} style={{marginRight: '5px'}} color='#f5cc8d'/>Phone:  000-0000-0000</StyledSpan>
      <StyledSpan><MdOutlineEmail size={25} style={{marginRight: '5px'}} color='#f5cc8d'/>Email: yhk1492@naver.com</StyledSpan>
    </StyledDiv>
  );
}

export default DetailedProfile;