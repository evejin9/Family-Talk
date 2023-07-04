import React, { useState } from 'react';
import styled from 'styled-components';
import { addCalendarTitle, selectTitle, getSelectedPlan, deleteCalendarTitle } from '../../features/calendarSlice';
import { useDispatch, useSelector } from 'react-redux';
import { GoDotFill } from 'react-icons/go';
import { MdDeleteForever } from 'react-icons/md'


const PlanListWrapper = styled.div`
  /* background-color: orange; */
  width: 270px;
  /* height: 300px; */
  position: absolute;
  top: 100px;
  right: 0px;
`;

const ScheduleList = styled.div`
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledPlanList = styled.div`
  width: 90%;
  /* height: 20px; */
  margin-left: 20px;
  margin-top: 20px;
  border-radius: 6px;
  font-size: 12px;
  display: flex;
  align-items: center;
  border: 0.4px solid #f5cc8d;
  padding: 3px 0;
  cursor: pointer;
  &:hover {
    background-color: #f5cc8d;
  }
  
`;

const StyledTitle = styled.div`
  width: 30%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 5px;
  font-weight: 600;
`;



const SelectedDate = styled.div`
  margin-left: 3px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;



function PlanList({ currentMonth, selectedDate, onDateClick, clickModal, filteredSelectedTitle, handleDelete }) {
  const selectedTitle = useSelector(selectTitle);
  const [deletedItems, setDeletedItems] = useState([]);
  const dispatch = useDispatch();

  const handleClickPlan = (id) => {
    clickModal();
    dispatch(getSelectedPlan(id));
  };


  return (
    <PlanListWrapper>
      <ScheduleList>Schedule List</ScheduleList>
        <>
        {filteredSelectedTitle.map((item, index) => (
        <StyledPlanList onClick={() => handleClickPlan(item.id)} key={index}>
          <GoDotFill color='#f5cc8d' size={15} />
          <StyledTitle>{item.title}</StyledTitle>
          <SelectedDate>{item.date}</SelectedDate>
          <MdDeleteForever 
            onClick={(e) => {e.stopPropagation(); handleDelete(item.id);} } 
            size={25} 
            style={{  marginLeft: '40px'}}>
          </MdDeleteForever>
        </StyledPlanList>
        ))}
      </>
    </PlanListWrapper>
  );
}

export default PlanList;