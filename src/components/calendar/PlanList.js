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

const StyledPlanList = styled.div`
  background-color: #f5cc8d;
  width: 90%;
  /* height: 20px; */
  margin-left: 20px;
  margin-top: 20px;
  border-radius: 6px;
  font-size: 14px;
  display: flex;
  align-items: center;
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
      <div>일정 리스트</div>
      {selectedTitle.map((item, index) => {
        return <StyledPlanList>
          {item.title}
          <SelectedDate>
          {item.date}
          </SelectedDate>
          </StyledPlanList>
      })}
    </PlanListWrapper>
  );
}

export default PlanList;