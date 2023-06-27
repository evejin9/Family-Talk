import React from 'react';
import { addDays, endOfMonth, endOfWeek, format, isSameDay, isSameMonth, parse, startOfMonth, startOfWeek } from 'date-fns'
import styled from 'styled-components';
// import { format } from 'date-fns/esm';

const Styled = styled.div`
  display: flex;
`;


function CalendarSells({ currentMonth, selectedDate, onDateClick }) {

  const monthStart = startOfMonth(currentMonth)
  const monthEnd = endOfMonth(monthStart)
  const startDate = startOfWeek(monthStart)
  const endDate = endOfWeek(monthEnd)

  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = '';


  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, 'd')
      const cloneDay = day;
      days.push(
        <Styled
          className={`col cell ${!isSameMonth(day, monthStart)
            ? 'disabled'
            : isSameDay(day, selectedDate)
              ? 'selected'
              : format(currentMonth, 'M') !== format(day, 'M')
                ? 'not-valid'
                : 'valid'
            }`}
          key={day}
          onClick={() => onDateClick(parse(cloneDay))}
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
        </Styled>,
      );
      day = addDays(day, 1);
    }
    rows.push(
      <Styled className="row" key={day}>
        {days}
      </Styled>,
    );
    days = [];
  }


  return <Styled className="body">{rows}</Styled>;
};

export default CalendarSells;