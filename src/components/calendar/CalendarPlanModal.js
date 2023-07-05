import React, { useEffect, useState } from 'react';
import { Placeholder } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { addCalendarTitle, clearSelectedPlan, deleteCalendarTitle, selectSelectedPlan, selectTitle,  updateCalendarTitle,  updatedPlan } from '../../features/calendarSlice';
import { format } from 'date-fns';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 1905px;
  height: 920px;
  justify-content: center;
  align-items: center;
  background-color: gray;
  flex-direction: column;
  /* opacity: 0.3; */
  background-color: rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.4s ease-in-out;
  /* margin-left: 200px; */
`;

const SelectedDateDiv = styled.div`
  display: flex;
  width: 100px;
  background-color: #f5cc8d;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  margin-left: 390px;
  font-size: 12px;
  border-radius: 6px;
  padding: 5px;
`;

const TitleInput = styled.input`
  background-color: #f5cc8d;
  height: 30px;
  margin-bottom: 15px;
  width: 26%;
  border-radius: 10px;
  border: none;
  margin-top: 10px;
  padding-left: 15px;
`;

const DetailInput = styled.textarea`
  background-color: #f5cc8d;
  height: 350px;
  width: 26%;
  border-radius: 10px;
  border: none;
  resize: none;
  padding-left: 15px;
  padding-top: 15px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 26%;
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

const CalendarPlanModal = ({ selectedDate, closeModal, onDateClick, selectedDateCl }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const selectedData = useSelector(selectTitle);
  const selectedPlan = useSelector(selectSelectedPlan);
  const dispatch = useDispatch();
  
  useEffect(() => {
    return () => {
      dispatch(clearSelectedPlan());
    };
  }, []);

  useEffect(() => {
    if (selectedPlan) {
      setTitle(selectedPlan.title || '');
      setContent(selectedPlan.content || '');
    } else {
      setTitle('');
      setContent('');
    }
  }, [selectedPlan]);

  const handleCalendarData = () => {
    if (selectedPlan) {
      dispatch(updateCalendarTitle({ id: selectedPlan.id, title, content }));
    } else {
      dispatch(addCalendarTitle({ title, selectedDate: format(selectedDate, 'yyyy-MM-dd'), content }));
    }
    setTitle('');
    setContent('');
    closeModal();
  };

  const handleDelete = () => {
    if (selectedPlan) {
      dispatch(deleteCalendarTitle(selectedPlan.id));
    }
    closeModal();
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <Wrapper>
      {/* <SelectedDateDiv>{selectedPlan ? selectedPlan.date: selectedDate}</SelectedDateDiv> */}
      <SelectedDateDiv>{selectedPlan ? selectedPlan.date: format(selectedDate, 'yyyy-MM-dd')}</SelectedDateDiv>

      <TitleInput
        placeholder='Title'
        onChange={handleTitleChange}
        value={title}
      />

      <DetailInput
        placeholder='Content'
        onChange={handleContentChange}
        value={content}
      />

      <ButtonWrapper>
        <StyledButton onClick={closeModal}>close</StyledButton>
        <StyledButton onClick={handleCalendarData}>save</StyledButton>
      </ButtonWrapper>
    </Wrapper>
  );
}

export default CalendarPlanModal;