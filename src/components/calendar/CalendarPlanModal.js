import React, { useState } from 'react';
import { Placeholder } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 350px;
  justify-content: center;
  align-items: center;
  /* background-color: gray; */
  flex-direction: column;
`;

const SelectedDate = styled.div`
  display: flex;
  width: 100px;
  background-color: orange;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  margin-left: 310px;
`;

const TitleInput = styled.input`
  background-color: #b0c4de;
  height: 30px;
  margin-bottom: 15px;
  width: 90%;
  border-radius: 10px;
  border: none;
`;

const DetailInput = styled.textarea`
  background-color: #b0c4de;
  height: 250px;
  width: 90%;
  border-radius: 10px;
  border: none;
  resize: none;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-around;
  align-items: center;

`;


const StyledButton = styled.button`
  height: 30px;
  background-color: #b0c4de;
  margin-top: 5px;
  border-radius: 6px;
  /* border: 0.8px solid #b0c4de; */
  color: gray;
  cursor: pointer;
`;

function CalendarPlanModal({selectedDate, closeModal, onDateClick, selectedDateCl }) {


  const naveigate = useNavigate()

  // console.log(selectedDate);

  return (
    <Wrapper>
      <SelectedDate>{undefined}ddddd</SelectedDate>
      <TitleInput placeholder='Title'/>
      <DetailInput />
      <ButtonWrapper>
        <StyledButton onClick={closeModal}>
          close
        </StyledButton>
        <StyledButton onClick={undefined}>
          save
          </StyledButton>
      </ButtonWrapper>
    </Wrapper>
  );
  
}

export default CalendarPlanModal;