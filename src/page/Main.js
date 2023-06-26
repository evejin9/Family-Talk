import React from 'react';
import Wrapper from '../components/Wrapper';
import styled from 'styled-components';

const MainUi = styled.div`
  width: 100%;
  height: 100%;
`

function Main(props) {
  return (
    <MainUi>
      <Wrapper>
        <p> ㅎㅇ </p>
      </Wrapper>
    </MainUi>
  );
}

export default Main;