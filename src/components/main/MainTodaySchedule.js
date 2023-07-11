import React from 'react';
import { useSelector } from 'react-redux';
import { selectTitle } from '../../features/calendarSlice';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlinePlusCircle } from "react-icons/ai";

const StyledSection = styled.div`
  width: 50%;
  height: 70%;
  color: #333333;
  border-right: 2px solid #F5CC8D;
  padding: 0 25px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;

    p:first-child {
      font-weight: 700;
      margin-right: 20px;
    }
  }

  svg {
    font-size: 20px;
    cursor: pointer;

    :hover {
      color: #F5CC8D;
    }
  }

`;

function MainTodaySchedule({ today }) {
  const navigator = useNavigate();
  const selectCalendarTitle = useSelector(selectTitle);

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
    <StyledSection>
      <div>
        <p>오늘의 일정</p>
        <p>
          {todaySchedule.length === 0 
            ? `일정이 없습니다.` 
            : todaySchedule.length >= 1
            ? `${todaySchedule.map(schedule => schedule.title)}`
            : todaySchedule
          }
        </p>
      </div>
      <AiOutlinePlusCircle onClick={handleCalendar} />
    </StyledSection>
  );
}

export default MainTodaySchedule;