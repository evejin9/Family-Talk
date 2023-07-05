import React, { useEffect, useState } from 'react';

import { addMonths, subMonths, format } from 'date-fns';
import CalendarDay from '../components/calendar/CalendarDay';
import CalendarSells from '../components/calendar/CalendarSells';
import CalendarHeader from '../components/calendar/CalendarHeader';
import CalendarPlanModal from '../components/calendar/CalendarPlanModal';
import PlanList from '../components/calendar/PlanList';
import { deleteCalendarTitle, selectTitle } from '../features/calendarSlice';
import { useDispatch, useSelector } from 'react-redux';





function Calendar(props) {
  const [currentMonth, setcurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [modal, setModal] = useState(false);
  const selectedTitle = useSelector(selectTitle);
  const [deletedItems, setDeletedItems] = useState([]);
  const dispatch = useDispatch();


  


  const handleDelete = (id) => {
    setDeletedItems([...deletedItems, id]);
    dispatch(deleteCalendarTitle(id));
  };

  const filteredSelectedTitle = selectedTitle.filter(
    (item) => !deletedItems.includes(item.id)
  );

  
  
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
      <div className='calendar' style={{  marginLeft: '30px', }}>
        <CalendarHeader currentMonth={currentMonth} prevMonth={prevMonth} nextMonth={nextMonth} />
        <CalendarDay />
        <CalendarSells currentMonth={currentMonth} selectedDate={selectedDate} clickModal={clickModal} onDateClick={onDateClick} filteredSelectedTitle={filteredSelectedTitle}>
        </CalendarSells>
        <PlanList currentMonth={currentMonth} selectedDate={selectedDate} clickModal={clickModal} onDateClick={onDateClick} filteredSelectedTitle={filteredSelectedTitle}
        handleDelete={handleDelete}/>
        {modal && (
          <div className='modal-container' style={{ position: 'absolute', top:'-10%', right: '-55%' }}>
            <CalendarPlanModal closeModal={closeModal} selectedDate={selectedDate} onDateClick={onDateClick} />
          </div>
        )}
      </div>
    </div>
  )}
export default Calendar;