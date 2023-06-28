import React, { useEffect, useState } from 'react';

import { addMonths, subMonths, format } from 'date-fns';
import CalendarDay from '../components/calendar/CalendarDay';
import CalendarSells from '../components/calendar/CalendarSells';
import CalendarHeader from '../components/calendar/CalendarHeader';
import CalendarPlanModal from '../components/calendar/CalendarPlanModal';





function Calendar(props) {
  const [currentMonth, setcurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [modal, setModal] = useState(false);

  const selectedDateCl = [{selectedDate}]

  const clickModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const prevMonth = () => {
    setcurrentMonth(subMonths(currentMonth, 1));
  };

  const nextMonth = () => {
    setcurrentMonth(addMonths(currentMonth, 1));
  };

  const onDateClick = (day) => {
    setSelectedDate(day);
  };

  
  return (
    <div className='show-content'>
      <div className='calendar'>
        <CalendarHeader currentMonth={currentMonth} prevMonth={prevMonth} nextMonth={nextMonth} />
        <CalendarDay />
        <CalendarSells currentMonth={currentMonth} selectedDate={selectedDate} clickModal={clickModal} onDateClick={onDateClick} />
        {modal && <CalendarPlanModal closeModal={closeModal} selectedDate={selectedDate} onDateClick={onDateClick} selectedDateCl={selectedDateCl}/>}
      </div>
    </div>
  );
}

export default Calendar;