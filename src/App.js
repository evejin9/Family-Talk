import './App.css';
import { styled, createGlobalStyle } from 'styled-components';
import reset from "styled-reset";
import Main from './page/Main';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';


const GlobalStyel = createGlobalStyle`
  ${reset}

  body {
    box-sizing: border-box;
    background-color: #e9ecef;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  * {
    font-size: 14px;
  }
`

function App() {
  return (
    <>
      <GlobalStyel />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Main />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
