import React, { useEffect, useState } from 'react';

import { addMonths, subMonths, format } from 'date-fns';
import CalendarDay from '../components/calendar/CalendarDay';
import CalendarSells from '../components/calendar/CalendarSells';
import CalendarHeader from '../components/calendar/CalendarHeader';
import CalendarPlanModal from '../components/calendar/CalendarPlanModal';
import PlanList from '../components/calendar/PlanList';





function Calendar(props) {
  const [currentMonth, setcurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [modal, setModal] = useState(false);

  
  
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
      <div className='calendar' style={{ position: 'relative', marginLeft: '30px'}}>
        <CalendarHeader currentMonth={currentMonth} prevMonth={prevMonth} nextMonth={nextMonth} />
        <CalendarDay />
        <CalendarSells currentMonth={currentMonth} selectedDate={selectedDate} clickModal={clickModal} onDateClick={onDateClick}>
        </CalendarSells>
        <PlanList currentMonth={currentMonth} selectedDate={selectedDate} clickModal={clickModal} onDateClick={onDateClick}/>
        {modal && (
          <div className='modal-container' style={{ position: 'absolute', top:'10%', right: '33%', }}>
            <CalendarPlanModal closeModal={closeModal} selectedDate={selectedDate} onDateClick={onDateClick} />
          </div>
        )}
      </div>
    </div>
  )}
export default Calendar;