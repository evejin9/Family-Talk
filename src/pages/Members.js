import React from 'react';
import styled from 'styled-components';

import data from "../data.json";
import { useSelector } from 'react-redux';
import { LogInUser } from '../features/loginSlice';


const MembersBox = styled.div`
  width: 100%;
  /* padding: 20px; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  `;

const MembersCard = styled.div`
  width: 250px;
  background-color: #efefef;
  border-radius: 20px;
  box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.15);
  padding: 20px;
  margin: 0px 20px 20px 20px;
  
  .relation {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    
    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      margin-right: 10px;
    }
    p {
      font-size: 18px;
      font-weight: 600;
    }
  }
  
  .birth, .name { 
    font-size: 15px;
    font-weight: 500;
    padding: 10px 0;
  }
  `;



function Members(props) {
  const logInUser = useSelector(LogInUser);

  const newData = [...data];

  const oldAgeArray = newData.sort((a, b) => { if (a.birth < b.birth) return -1; })

  const loginUserRelation = logInUser.members;
  
  return (
    <MembersBox>
      {
        // 로그인 유저가 가지고 있는 
        // logInUser.embers.memberId와 user.id의 값이 일치하는 index를 찾아내어
        // logInUser.members.relation을 출력
        oldAgeArray.map((user) => {
          const target = loginUserRelation.find((a) => a.memberId === user.id);

          return (
            <MembersCard key={user.id}>
              <div className='relation'>
                <img src={user.imagePath}></img>
                <p>{target.relation}</p>
              </div>
              <p className='name'>이름: {user.name}</p>
              <p className='birth'>생년월일: {user.birth}</p>
            </MembersCard>
          )
        })
      }
    </MembersBox>
  );
}

export default Members;