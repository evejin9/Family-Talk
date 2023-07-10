import React, { useState } from 'react';
import styled from 'styled-components';
import data from '../../data.json'

import { LogInUser } from '../../features/loginSlice';
import { useSelector } from 'react-redux';
import {LiaPenSolid } from 'react-icons/lia'
import { selectUserEditData } from '../../features/mypageSlice';


const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* background-color: orange; */
  /* margin-left: 70px; */
  .edit {
  cursor: pointer;

  };
`;

const EditInputWrapper = styled.label`

`;

const EditInput = styled.input`
  display: none;
`;


const ProfileDiv = styled.div`
  display: flex;
  /* width: 60%; */
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    border-radius: 100px;
    height: 200px;
    width: 200px;
  }
`;

const ProfileSpan = styled.span`
  margin-top: 10px;
  font-size: 20px;

  &.email {
    font-size: 15px;
    margin-bottom: 10px;
  }
`;







function Myprofile({selectedImage, handleImageChange}) {
  const logInUser = useSelector(LogInUser);
  const editUserData = useSelector(selectUserEditData);


  return (
    <ProfileWrapper>
      <ProfileDiv>
        <img src={selectedImage || logInUser.imagePath} alt="Profile" />
        <EditInputWrapper>
        <LiaPenSolid size={25} color='#5CE1E6' style={{margin: '5px'}} className='edit'/>
        <EditInput type='file'  onChange={handleImageChange}/>
        </EditInputWrapper>
        <ProfileSpan>{logInUser.name} 님 환영합니다!</ProfileSpan>
        <ProfileSpan className='email'>{editUserData?.email || logInUser.email}</ProfileSpan>
      </ProfileDiv>
    </ProfileWrapper>
  );
}

export default Myprofile;