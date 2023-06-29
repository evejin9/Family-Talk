import React from 'react';

import MainPhoto from '../components/main/MainPhoto';
import MainDday from '../components/main/MainDday';
import MainTodaySchedule from '../components/main/MainTodaySchedule';
import MainWeather from '../components/main/MainWeather';

function Main(props) {


  return (
    <div className='show-content'>
      {/* 메인 사진 */}
      <MainPhoto />
      {/* 날씨정보 */}
      <MainWeather />
      {/* 오늘의 일정 */}
      <MainTodaySchedule />
      {/* 디데이 */}
      <MainDday />
    </div>
  );
}

export default Main;