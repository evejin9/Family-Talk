import React from 'react';
import { addDays, endOfMonth, endOfWeek, format, isSameDay, isSameMonth, parse, startOfMonth, startOfWeek } from 'date-fns'
import styled from 'styled-components';
import CalendarPlanModal from './CalendarPlanModal';
// import { format } from 'date-fns/esm';



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
  }

  .col {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 12.8%;
    padding-left: 1%;
    background: #b0c4de;
    border-radius: 6px;
    font-weight: 600;
    font-size: 0.65em;
    padding: 2px;
    color: #333;
    height: 40px;
  }

  .col.cell {
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: #1e90ff;
    }

    &.disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &.selected {
      background: #1e90ff;
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

  .text {
    /* margin: 4px 0 0 4px; */
  }
`;

function CalendarSells({ currentMonth, selectedDate, onDateClick, clickModal }) {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = '';

  const handleDateClick = (clickedDate) => {
    onDateClick(clickedDate);
    clickModal();
  };
  // console.log(selectedDate);

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, 'd');
      const cloneDay = day;
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