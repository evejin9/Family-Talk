import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { BsFillChatFill } from "react-icons/bs";
import Chat from '../pages/Chat';

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
  z-index: 10;

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
`;

const ProfileCard = styled.div`
  width: 30%;
  background-color: aliceblue;
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
        <ProfileCard>
          <p>유저 사진</p>          
          <p>유저 이름</p>          
          <p>유저 생일</p>          
        </ProfileCard>
        <OutletStyled />
      </ShowItem>
      
      {/* 채팅 버튼 */}
      <ChatButton>
        <BsFillChatFill className='cursor-point' onClick={undefined} />
      </ChatButton>
      {/* <Chat showChatModal={showChatModal} /> */}
    </LayoutStyled>
  );  
}

export default Layout;