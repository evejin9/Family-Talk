import React from 'react';

import MainPhoto from '../components/main/MainPhoto';
import MainDday from '../components/main/MainDday';
import MainTodaySchedule from '../components/main/MainTodaySchedule';

function Main(props) {


  return (
    <div className='show-content'>
      {/* 메인 사진 */}
      <MainPhoto />
      {/* 오늘의 일정 */}
      <MainTodaySchedule />
      {/* 디데이 */}
      <MainDday />

      {/* 날씨정보 */}
    </div>
  );
}

export default Main;