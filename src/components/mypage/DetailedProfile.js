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
import { useNavigate } from 'react-router-dom';
import { selectUserEditData } from '../../features/mypageSlice';







const StyledDiv = styled.div`
  display: flex;
  /* background-color: blue; */
  width: 50%;
  height: 400px;
  /* margin-top: 20px; */
  /* justify-content: center; */
  /* align-items: center; */
  flex-direction: column;
  /* border: 1px solid #f5cc8d; */
  border-radius: 6px;
`;

const StyledSpan = styled.span`
  margin-left: 20px;
  margin-bottom: 20px;
  font-size: 13px;
  border: 2px solid #f5cc8d;
  border-radius: 6px;
  padding: 2px;
  
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


function DetailedProfile({ openModal }) {
  const editUserData = useSelector(selectUserEditData);
  // console.log(editUserData);
  const logInUser = useSelector(LogInUser);
  const navigate = useNavigate();

  const gotoHomePage = () => {
    navigate('/');
  };

  return (
    <StyledDiv>
      <div style={{ margin: '0 auto', marginBottom: '50px', fontSize: '20px', marginTop: '20px' }}>User details</div>
      <StyledSpan><AiOutlineUser size={25} style={{ marginRight: '5px' }} color='#5CE1E6' />ID:  {editUserData?.id || logInUser.id}</StyledSpan>
      <StyledSpan><LiaPenSolid size={25} style={{ marginRight: '5px' }} color='#5CE1E6' />Name:  {editUserData?.name || logInUser.name}</StyledSpan>
      <StyledSpan><PiCake size={25} style={{ marginRight: '5px' }} color='#5CE1E6' />Birth date:  {editUserData?.birth || logInUser.birth}</StyledSpan>
      <StyledSpan><BsPhone size={25} style={{ marginRight: '5px' }} color='#5CE1E6' />Phone:  {editUserData?.phone || logInUser.phone}</StyledSpan>
      <StyledSpan><MdOutlineEmail size={25} style={{ marginRight: '5px' }} color='#5CE1E6' />Email: {editUserData?.email || logInUser.email}</StyledSpan>
      <StyledButtonWrapper>
        <StyledButton onClick={openModal}>정보수정</StyledButton>
        <StyledButton onClick={gotoHomePage}>확인</StyledButton>
      </StyledButtonWrapper>
    </StyledDiv>
  );
}

export default DetailedProfile;