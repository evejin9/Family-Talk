import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  /* background-color: blue; */
  width: 40%;
  height: 400px;
  margin-top: 20px;
  /* justify-content: center; */
  /* align-items: center; */
  flex-direction: column;
  border: 1px solid rgb(172, 172 ,172);
  border-radius: 6px;

`;


function UserPass(props) {
  return (
    <StyledDiv>
      이용권정보
    </StyledDiv>
  );
}

export default UserPass;