import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectTitle } from '../../features/calendarSlice';
import { useNavigate } from 'react-router-dom';

const StyledSection = styled.div`
  width: 100%;
  height: 10vh;
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
  p:first-child {
    font-weight: 700;
    margin-right: 20px;
  }
`;

function MainTodaySchedule({ today }) {
  const navigator = useNavigate();

  const selectCalendarTitle = useSelector(selectTitle);
  console.log(selectCalendarTitle);

  const todaySchedule = selectCalendarTitle.filter((schedule) => {
    const todayFullDate = `${today.todayYear}-${today.todayMonth}-${today.todayDate}`;
    return schedule.date === todayFullDate;
  });

  const handleCalendar = () => {
    const result = window.confirm('캘린더 화면으로 이동합니다. 이동하시겠습니까?');
    if (result) {
      navigator("/calendar");
    }
  };

  return (
    <StyledSection onClick={handleCalendar}>
      <p>오늘의 일정</p>
      <p>
        {todaySchedule.length === 0 
          ? `일정이 없습니다.` 
          : todaySchedule.length > 1
            ? `${todaySchedule.map(schedule => schedule.title)}`
            : todaySchedule
        }
      </p>
    </StyledSection>
  );
}

export default MainTodaySchedule;