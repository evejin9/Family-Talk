import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 20px;
  border-radius: 8px;
  color: #333333;
  background-color: #EFEFEF;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;

  cursor: pointer;
  
  :hover {
    background-color: #F5CC8D;
  }

  & div {
    display: flex;

    p:first-child {
      font-weight: 700;
      margin-right: 20px;
    }
  }
`;

function MainTodaySchedule(props) {

  return (
    <StyledSection>
      <div>
        <p>오늘의 일정</p>
        <p>aaa</p>
      </div>
    </StyledSection>
  );
}

export default MainTodaySchedule;