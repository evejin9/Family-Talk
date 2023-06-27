import React, { useState } from 'react';
import CalendarHeder from '../components/calendar/CalendarHeder';
import { addMonths, subMonths, format } from 'date-fns';
import CalendarDay from '../components/calendar/CalendarDay';
import CalendarSells from '../components/calendar/CalendarSells';

function Calendar(props) {

  const [currentMonth, setcurrentMonth] = useState(new Date());

  const prevMonth = () => {
    setcurrentMonth(subMonths(currentMonth, 1))
  };
  const nextMonth = () => {
    setcurrentMonth(addMonths(currentMonth, 1))
  };

  return (
    <div className='show-content'>
      <>
        <CalendarHeder currentMonth={currentMonth} prevMonth={prevMonth} nextMonth={nextMonth} />
        <CalendarDay />
        {/* <CalendarSells currentMonth={currentMonth}/> */}
      </>
    </div>
  );
}

export default Calendar;