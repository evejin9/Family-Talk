import React, { useState } from 'react';
import { Placeholder } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { addCalendarTitle, selectTitle } from '../../features/calendarSlice';

const Wrapper = styled.div`
  display: flex;
  width: 600px;
  height: 600px;
  justify-content: center;
  align-items: center;
  /* background-color:  */
  flex-direction: column;
  opacity: 50;

`;

const SelectedDateDiv = styled.div`
  display: flex;
  width: 100px;
  background-color: #f5cc8d;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  margin-left: 500px;
  font-size: 14px;
  border-radius: 6px;
`;

const TitleInput = styled.input`
  background-color: #f5cc8d;
  height: 30px;
  margin-bottom: 15px;
  width: 60%;
  border-radius: 10px;
  border: none;
  margin-top: 10px;
`;

const DetailInput = styled.textarea`
  background-color: #f5cc8d;
  height: 350px;
  width: 60%;
  border-radius: 10px;
  border: none;
  resize: none;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  align-items: center;

`;


const StyledButton = styled.button`
  height: 30px;
  background-color: #f5cc8d;
  margin-top: 5px;
  border-radius: 6px;
  /* border: 0.8px solid #b0c4de; */
  color: black;
  cursor: pointer;
`;

function CalendarPlanModal({ selectedDate, closeModal, onDateClick, selectedDateCl }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const selectedData = useSelector(selectTitle)
  const dispatch = useDispatch();

  const handleCalendarData = () => {
    dispatch(addCalendarTitle({ title, selectedDate, content }));
    closeModal();
  };

  return (
    <Wrapper>
      <SelectedDateDiv>{selectedDate}</SelectedDateDiv>
      <TitleInput
        placeholder='Title'
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      >
      </TitleInput>
      <DetailInput
        onChange={(e) => setContent(e.target.value)}
        value={content}
      >
      </DetailInput>
      <ButtonWrapper>
        <StyledButton onClick={closeModal}>close</StyledButton>
        <StyledButton onClick={handleCalendarData}>save</StyledButton>
      </ButtonWrapper>
    </Wrapper>
  );
}

export default CalendarPlanModal;