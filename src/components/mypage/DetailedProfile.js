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
import Button from '../ui/Button';







const StyledDiv = styled.div`
  display: flex;
  /* background-color: blue; */
  width: 50%;
  height: 400px;
  /* margin-top: 20px; */
  /* justify-content: center; */
  /* align-items: center; */
  flex-direction: column;
  /* border: 1px solid rgb(172, 172 ,172); */
  border-radius: 6px;
`;

const StyledSpan = styled.span`
  margin-left: 20px;
  margin-bottom: 20px;
  font-size: 17px;
  
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

`;


const StyledButton = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 6px;
  outline: none;
  font-size: 13px;
  background-color: #fff;
  border: 2px solid #acacac;

  &:hover {
    background-color: #f5cc8d;
  }
`;

function DetailedProfile(props) {

  const logInUser = useSelector(LogInUser);
  
  return (
    <StyledDiv>
      <div style={{margin: '0 auto', marginBottom: '50px', fontSize: '20px', marginTop: '20px'}}>User details</div>
      <StyledSpan><AiOutlineUser size={25} style={{marginRight: '5px'}} color='#f5cc8d'/>ID:  {logInUser.id}</StyledSpan>
      <StyledSpan><LiaPenSolid size={25} style={{marginRight: '5px'}} color='#f5cc8d'/>Name:  {logInUser.name}</StyledSpan>
      <StyledSpan><PiCake size={25} style={{marginRight: '5px'}} color='#f5cc8d'/>Birth date:  {logInUser.birth}</StyledSpan>
      <StyledSpan><BsPhone size={25} style={{marginRight: '5px'}} color='#f5cc8d'/>Phone:  {logInUser.phone}</StyledSpan>
      <StyledSpan><MdOutlineEmail size={25} style={{marginRight: '5px'}} color='#f5cc8d'/>Email: {logInUser.email}</StyledSpan>
      <StyledButtonWrapper>
        <StyledButton>비밀번호 변경</StyledButton>
        <StyledButton>정보수정</StyledButton>
      </StyledButtonWrapper>
    </StyledDiv>
  );
}

export default DetailedProfile;