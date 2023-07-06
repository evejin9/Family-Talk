import React, { useState } from 'react';
import styled from 'styled-components';
import data from '../../data.json'

import { LogInUser } from '../../features/loginSlice';
import { useSelector } from 'react-redux';
import {LiaPenSolid } from 'react-icons/lia'


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
  /* background-color: orange; */
  align-items: center;
  justify-content: center;
  flex-direction: column;
  img {
    border-radius: 100px;
  }
`;

const ProfileSpan = styled.span`
  margin-top: 10px;
  font-size: 20px;
`;







function Myprofile(props) {
  const logInUser = useSelector(LogInUser);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setSelectedImage(e.target.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <ProfileWrapper>
      <ProfileDiv>
        <img src={selectedImage || logInUser.imagePath} alt="Profile" />
        <EditInputWrapper>
        <LiaPenSolid size={25} color='#f5cc8d' style={{margin: '5px'}} className='edit'/>
        <EditInput type='file'  onChange={handleImageChange}/>
        </EditInputWrapper>
        <ProfileSpan>{logInUser.name} 님 환영합니다!</ProfileSpan>
      </ProfileDiv>
    </ProfileWrapper>
  );
}

export default Myprofile;