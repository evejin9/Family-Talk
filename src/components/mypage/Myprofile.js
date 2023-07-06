import React from 'react';
import styled from 'styled-components';
import data from '../../data.json'

import { LogInUser } from '../../features/loginSlice';
import { useSelector } from 'react-redux';



const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* background-color: orange; */
  /* margin-left: 70px; */
  
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
  
  const newData = [...data];

  const oldAgeArray = newData.sort((a, b) => { if (a.birth < b.birth) return -1; })

  const loginUserRelation = logInUser.members;


  return (
    <ProfileWrapper>
      <ProfileDiv>
        <img src={logInUser.imagePath}></img>
        <ProfileSpan>{logInUser.name} 님 환영합니다!</ProfileSpan>
      </ProfileDiv>
    </ProfileWrapper>
  );
}

export default Myprofile;