import React from 'react';
import styled from 'styled-components';
import { selectTitle } from '../../features/calendarSlice';
import { useSelector } from 'react-redux';


const PlanListWrapper = styled.div`
  /* background-color: orange; */
  width: 270px;
  /* height: 300px; */
  position: absolute;
  top: 0;
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
  background-color: #f5cc8d;
  width: 90%;
  /* height: 20px; */
  margin-left: 20px;
  margin-top: 20px;
  border-radius: 6px;
  font-size: 12px;
  display: flex;
  align-items: center;
  
`;

const StyledTitle = styled.div`
  width: 60%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;



const SelectedDate = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;



function PlanList({ currentMonth, selectedDate, onDateClick, clickModal }) {

  const selectedTitle = useSelector(selectTitle);
  const { title = '' } = selectedTitle.find((item) => item.date === selectedDate) || {};
  
  console.log(title);




  return (
    <PlanListWrapper>
      <ScheduleList>Schedule List</ScheduleList>
      {selectedTitle.map((item, index) => {
        return <StyledPlanList>
                  <StyledTitle>
                  {item.title}
                  </StyledTitle>
                  <SelectedDate>
                  {item.date}
                  </SelectedDate>
                </StyledPlanList>
      })}
    </PlanListWrapper>
  );
}

export default PlanList;