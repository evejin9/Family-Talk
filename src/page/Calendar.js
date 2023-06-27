import React, { useState } from 'react';

import { addMonths, subMonths, format } from 'date-fns';
import CalendarDay from '../components/calendar/CalendarDay';
import CalendarSells from '../components/calendar/CalendarSells';
import CalendarHeader from '../components/calendar/CalendarHeader';

function Calendar(props) {

  const [currentMonth, setcurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const prevMonth = () => {
    setcurrentMonth(subMonths(currentMonth, 1))
  };
  const nextMonth = () => {
    setcurrentMonth(addMonths(currentMonth, 1))
  };

  const onDateClick = (day) => {
    setSelectedDate(day);
};

  return (
    <div className='show-content'>
      <>
        <CalendarHeader currentMonth={currentMonth} prevMonth={prevMonth} nextMonth={nextMonth} />
        <CalendarDay />
        <CalendarSells currentMonth={currentMonth} selectedDate={selectedDate} onDateClick={onDateClick}/>
      </>
    </div>
  );
}

export default Calendar;