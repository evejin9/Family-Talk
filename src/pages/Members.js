import React from 'react';
import styled from 'styled-components';

import data from "../data.json";


const MembersBox = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  `;

const MembersCard = styled.div`
  width: 300px;
  background-color: #efefef;
  border-radius: 20px;
  box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.15);
  padding: 20px;
  margin: 20px;
  
  .relation {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      margin-right: 10px;
    }
    p {
      font-size: 20px;
      font-weight: 600;
    }
  }
  
  .birth, .name { 
    font-size: 20px;
    font-weight: 500;
    padding: 10px 0;
  }
  `;



function Members(props) {

  const newUser = [...data];
  
  return (
    <MembersBox>
      {
        newUser.sort((a,b) => {
          if (a.birth < b.birth) return -1;
        }).map((user) => 
          <MembersCard key={user.id}>
            <div className='relation'>
              <img src={user.imagePath}></img>
              <p>{user.relation}</p>
            </div>
            <p className='name'>이름: {user.name}</p>
            <p className='birth'>생년월일: {user.birth}</p>
          </MembersCard>
        )
      }
    </MembersBox>
  );
}

export default Members;