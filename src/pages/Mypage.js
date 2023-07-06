import React from 'react';
import Myprofile from '../components/mypage/Myprofile';
import UserPass from '../components/mypage/UserPass';
import DetailedProfile from '../components/mypage/DetailedProfile';
import styled from 'styled-components';


const DetailedWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  border: 1px solid  rgb(172, 172 ,172);
  margin-top: 10px;
`;


function Mypage(props) {
  return (
    <div className='show-content'>
      <Myprofile />
      <DetailedWrapper>
        <UserPass />
        <DetailedProfile />
      </DetailedWrapper>
    </div>
  );
}

export default Mypage;