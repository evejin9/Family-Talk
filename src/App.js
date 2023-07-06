import './App.css';
import styled, { createGlobalStyle } from 'styled-components';
import reset from "styled-reset";
import Main from './pages/Main';
import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import Calendar from './pages/Calendar';
import Photo from './pages/Photo';

import Members from './pages/Members';
import WritePhoto from './components/photo/WritePhoto';

import EditPhoto from './components/photo/EditPhoto';

import LogIn from './pages/LogIn';
import { useCallback, useEffect, useRef, useState } from 'react';
import PhotoList from './components/photo/PhotoList';
import AuthCheck from './components/AuthCheck';
import SignUp from './pages/SignUp';
import Pass from './pages/Pass';
import dataPhoto from "./dataPhoto.json";
import uuid from 'react-uuid';
import { useSelector } from 'react-redux';
import { LogInUser } from './features/loginSlice';


const GlobalStyled = createGlobalStyle`
  ${reset}
  
  body {
    /* margin-top: 100px; */
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    font-family: 'GmarketSansMedium';
    /* background-color: #e9ecef; */
  }
  
  * {
    font-size: 14px;
    /* user-select: none; */
  }

  .show-content {
    /* padding: 20px; */
    box-sizing: border-box;
    width: 100%;
    height: 100%;

    /* 스크롤 커스텀 */
    overflow-x: hidden;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 2px;
      background: #ccc;
      cursor: pointer;
    }
  }

  .cursor-point {
    cursor: pointer;
  }

  .inner {
    width: 900px;
  }
`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  `;

const Wrapper = styled.div`
    width: 900px;
    /* height: 850px; */
  `;

function App() {
  // const [posts, setPosts] = useState(dataPhoto)
  // const logInUSerInfo = useSelector(LogInUser)
  // const nextId = useRef(7);

  // const handleInsert = useCallback((content, image) => {
  //   const post = {
  //       name: logInUSerInfo.name, 
  //       id: uuid(), 
  //       content, 
  //       profileImage: logInUSerInfo.imagePath, 
  //       image
  //   }
  //   setPosts(posts => posts.concat(post).sort(function(a,b) { return a-b; }))
  //   nextId.current += 1;
  //   }, []);

  return (
    <>
      <GlobalStyled />
      <Container>
        <Wrapper>
          <Routes>
            <Route path='/' element={<AuthCheck><Layout /></AuthCheck>}>
              <Route index element={<Main />} />
              <Route path='/members' element={<Members />} />
              <Route path='/calendar' element={<Calendar />} />
              <Route path='/photo' element={<Photo />} >
                <Route index element={<PhotoList />} />
                <Route path='writePhoto' element={<WritePhoto />} />
                <Route path='editPhoto/:editPhotoId' element={<EditPhoto />} />
              </Route>
              <Route path='/pass' element={<Pass />} />
            </Route>
            <Route path='/login' element={<LogIn />} />
            <Route path='/SignUp' element={<SignUp />} />
          </Routes>
        </Wrapper>
      </Container>
    </>
  );
}

export default App;

// 가짜 Api 주소
// https://my-json-server.typicode.com/evejin9/db-familyTalk/db

