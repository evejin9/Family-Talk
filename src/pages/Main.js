import React from 'react';

import MainPhoto from '../components/main/MainPhoto';
import MainDday from '../components/main/MainDday';
import MainTodaySchedule from '../components/main/MainTodaySchedule';
import MainWeather from '../components/main/MainWeather';
import styled from 'styled-components';

const MainWrapper = styled.div`
  width: 100%;
  height: 100px;
  border: 2px solid #efefef;
  border-radius: 8px;
  margin-top: 20px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;

`;

function Main(props) {
  const now = new Date();
  const week = ['SUN', 'MON', 'THU', 'WED', 'THR', 'FRI', 'SAT'];
  const today = {
    nowDate : now,
    todayYear : now.getFullYear(),
    todayMonth : now.getMonth() > 9 ? now.getMonth() + 1 : `0${now.getMonth() + 1}`,
    todayDate : now.getDate() > 9 ? now.getDate() : '0' + now.getDate(),
    dayOfWeek : week[now.getDay()]
  };

  return (
    <div className='show-content'>
      <MainPhoto />
      <MainWeather today={today} />
      <MainWrapper>
        <MainTodaySchedule today={today} />
        <MainDday />
      </MainWrapper>
    </div>
  );
}

export default Main;