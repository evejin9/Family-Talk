import React from 'react';
import styled from 'styled-components';


const StyledDiv = styled.div`
  display: flex;
  font-size: 16px;
  /* justify-content: space-around; */
  margin-top: 5px;
  font-weight: 600;
  margin-left: 5px;
  width: 65%;
  
  .col {
    margin-right: 40px;
    background-color: rgb(239,239,239);
    border-radius: 6px;
    margin-left: 20px;
    width: 160px;
  } 
`;




function CalendarDay(props) {


  const days = [];
  const date = ['Sun', 'Mon', 'Thu', 'Wed', 'Thu', 'Fri', 'Sat'];

  for (let  i = 0; i < 7; i++) {
    days.push(
      <div className='col' key={i}>
        {date[i]}
      </div>
    )
  };

  return (
    <StyledDiv>
      {days}
    </StyledDiv>
  );
}

export default CalendarDay;