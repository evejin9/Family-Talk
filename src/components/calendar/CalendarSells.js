import React from 'react';
import { addDays, endOfMonth, endOfWeek, format, isSameDay, isSameMonth, parse, startOfMonth, startOfWeek } from 'date-fns'
import styled from 'styled-components';
import CalendarPlanModal from './CalendarPlanModal';
import { useSelector } from 'react-redux';
import { addCalendarTitle, selectTitle } from '../../features/calendarSlice';
// import { format } from 'date-fns/esm';
import { BsDot, GoDotFill } from 'react-icons/go'


const CalendarContainer = styled.div`
  .body {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

  }

  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    margin-top: 5PX;
    width: 70%;
    /* margin-left: 200px; */
  }

  .col {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 50px;
    padding-left: 1%;
    background: rgb(239,239,239);
    border-radius: 6px;
    font-weight: 600;
    font-size: 0.65em;
    padding: 2px;
    color: #333;
    height: 100px;
    margin-right: 5px;
  }

  .col.cell {
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: #f5cc8d;
    }

    &.disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &.selected {
      background: #f5cc8d;
      color: #fff;
    }

    &.not-valid {
      color: gray;
    }
    span {
      margin-left: 3PX;
      margin-top: 2PX;
    }
    }
`;

const SellInTitle = styled.div`
      width: 70px;
      /* background-color: #f5cc8d; */
      margin-top: 5px;
      margin-left: 2px;
      display: flex;
      justify-content: start;
      align-items: center;
      font-size: 1px;
      font-weight: 600;
      
    .title {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-left: 2px;
    }
`;

function CalendarSells({ currentMonth, selectedDate, onDateClick, clickModal }) {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);
  const selectedTitle = useSelector(selectTitle);
  console.log(selectedTitle);
  const { title = '' } = selectedTitle.find((item) => item.date === selectedDate) || {};

  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = '';

  const handleDateClick = (clickedDate) => {
    onDateClick(clickedDate);
    clickModal();
  };

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, 'd');
      const cloneDay = format(day, 'yyyy-MM-dd');
      days.push(
        <div
          className={`col cell ${!isSameMonth(day, monthStart)
            ? 'disabled'
            : isSameDay(day, selectedDate)
            ? 'selected'
            : format(currentMonth, 'M') !== format(day, 'M')
            ? 'not-valid'
            : 'valid'
          }`}
          key={day}
          onClick={() => handleDateClick(cloneDay)}
          
        >
          <span
            className={
              format(currentMonth, 'M') !== format(day, 'M')
                ? 'text not-valid'
                : ''
            }
          >
            {formattedDate}
          </span>

          {selectedTitle
            .filter((item) => item.date === cloneDay)
            .map((item, index) => (
              <SellInTitle
                key={index}>
                <GoDotFill color='#f5cc8d' size={11}></GoDotFill>
                <div className='title'>
                {item.title}
                </div>
              </SellInTitle>
            ))}
            
        
        </div>
      );

      day = addDays(day, 1);
    }
    rows.push(
      <div className="row" key={day}>
        {days}
      </div>
    );

    days = [];
  }


  return <CalendarContainer>{rows}</CalendarContainer>;
}

export default CalendarSells;