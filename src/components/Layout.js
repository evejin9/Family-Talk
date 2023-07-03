import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { BsFillChatFill } from "react-icons/bs";

import userData from "../data.json";

import Chat from '../pages/Chat';
import LoginModal from './LogInModal';

const LayoutStyled = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  /* background-color: #f0f8ff; */
  position: relative;
  border: 1px solid;
`;

const Navbar = styled.nav`
  width: 100%;
  height: 70px;
  border-bottom: 2px solid #f5cc8d;
  position: fixed;
  display: flex;
  justify-content: center;
  background-color: #fff;
  /* margin: 0 auto; */
  z-index: 9;

  svg {
    font-size: 25px;
  }

  ul {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    li {
      color: #acacac;
      
      &:hover {
        color: #f5cc8d;
      }
    }
  }
`;


const ShowItem = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 70px;
  display: flex;
  justify-content: center;
  position: relative;
  `;

const ProfileArea = styled.div`
  width: 35%;
  position: relative;
  /* display: flex;
  align-items: center; */
  box-sizing: border-box;
  margin: 10px;
`;

const ProfileCard = styled.div`
  width: 100%;
  height: 500px;
  padding: 10px;
  border-radius: 15px;
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  /* position: fixed; */
  margin: 0 auto;
  top: 60px;
  left: 0;
  right: 0;
  
  
  img {
  }
  
  .name {
    font-size: 26px;
    font-weight: 600;
    padding: 30px 0;
  }

  .birth {
    font-size: 20px;
  }
`

const OutletStyled = styled(Outlet)`
  margin-top: 70px;
  padding: 30px;
`;

const ChatButton = styled.div`
  position: fixed;
  bottom: 40px;
  right: 70px;

  svg {
    font-size: 40px;

    color: #f5cc8d;
    &:hover {
      color: red;
    }
  }
`

const ChatBox = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: none;
  display: ${props => props.showModal ? "flex" : "none" };
  z-index: 10;
`

function Layout(props) {
  const [showChatModal, setShowChatModal] = useState(false);
  const navigate = useNavigate('/');

  const handleChatModal = () => {
    setShowChatModal(true);
  };


  return (
    <LayoutStyled >
      <Navbar>
        {/* 모바일 버전 메뉴 */}
        {/* <ul className='m-nav'>
          <li className='cursor-point' onClick={() => navigate('/')}><FaHome /></li>
          <li className='cursor-point' onClick={() => navigate('/chat')}><BsFillChatFill /></li>
          <li className='cursor-point' onClick={() => navigate('/calendar')}><AiFillCalendar /></li>
          <li className='cursor-point' onClick={() => navigate('/photo')}><HiPhoto /></li>
        </ul> */}

        <ul className='inner'>
          <li className='cursor-point' onClick={() => navigate('/')}>Home</li>
          <li className='cursor-point' onClick={() => navigate('/members')}>Members</li>
          <li className='cursor-point' onClick={() => navigate('/calendar')}>Calendar</li>
          <li className='cursor-point' onClick={() => navigate('/photo')}>Photo</li>
        </ul>
        {/* 버튼 */}
      </Navbar>

      <ShowItem  >
        {/* 유저 정보 */}
        <ProfileArea>
          <ProfileCard>
            <img src={userData[0].imagePath} /> 
            <p className='name'>{userData[0].name} 님</p>          
            <p className='birth'>{userData[0].birth}</p>          
          </ProfileCard>
        </ProfileArea>

        {/* 페이지 영역 */}
        <OutletStyled />
      </ShowItem>
      
      {/* 채팅 버튼 */}
      <ChatButton>
        <BsFillChatFill className='cursor-point' onClick={handleChatModal} />
      </ChatButton>
      
      {/* 채팅 모달 */}
      <ChatBox showModal = {showChatModal} >
        <Chat setShowChatModal={setShowChatModal} />
      </ChatBox>
      
      {/* 로그인 모달 */}
        {/* <LoginModal /> */}
    </LayoutStyled>
  );  
}

export default Layout;