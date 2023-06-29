import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaHome } from "react-icons/fa";
import { BsFillChatFill } from "react-icons/bs";
import { AiFillCalendar } from "react-icons/ai";
import { HiPhoto } from "react-icons/hi2";

const LayoutStyled = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f0f8ff;
  position: relative;
`;

const Navbar = styled.nav`
  width: 100%;
  height: 50px;
  background-color: #f0f8ff;
  border-top: 2px solid #f5cc8d;

  svg {
    font-size: 25px;
  }

  ul {
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    li {
      color: #acacac;
      
      &:hover {
        color: #f5cc8d;
      }
    }
  }
`;

const OutletStyled = styled(Outlet)`
  padding: 30px;
`

function Layout(props) {

  const navigate = useNavigate('/');


  return (
    <LayoutStyled>
      <OutletStyled />
      <Navbar>
        <ul>
          <li className='cursor-point' onClick={() => navigate('/')}><FaHome /></li>
          <li className='cursor-point' onClick={() => navigate('/chat')}><BsFillChatFill /></li>
          <li className='cursor-point' onClick={() => navigate('/calendar')}><AiFillCalendar /></li>
          <li className='cursor-point' onClick={() => navigate('/photo')}><HiPhoto /></li>
        </ul>
      </Navbar>
    </LayoutStyled>
  );  
}

export default Layout;