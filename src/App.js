import './App.css';
import styled, { createGlobalStyle } from 'styled-components';
import reset from "styled-reset";
import Main from './page/Main';
import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import Chat from './page/Chat';
import Calendar from './page/Calendar';
import Photo from './page/Photo';

import data from "./data.json";

const GlobalStyled = createGlobalStyle`
  ${reset}
  
  body {
    /* margin-top: 100px; */
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background-color: #e9ecef;
  }
  
  * {
    font-size: 14px;
    /* user-select: none; */
  }

  .show-content {
    padding: 20px;
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
`;

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  `;

const Wrapper = styled.div`
    width: 500px;
    height: 750px;
  `;

function App() {
  return (
    <>
      <GlobalStyled />
      <Container>
        <Wrapper>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route path='/' element={<Main />} />
              <Route path='/chat' element={<Chat />} />
              <Route path='/calendar' element={<Calendar />} />
              <Route path='/photo' element={<Photo />} />
            </Route>
          </Routes>
        </Wrapper>
      </Container>
    </>
  );
}

export default App;
