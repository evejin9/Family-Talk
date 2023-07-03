import React, { useEffect, useState } from 'react';
import { Placeholder } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { addCalendarTitle, clearSelectedPlan, deleteCalendarTitle, selectSelectedPlan, selectTitle,  updateCalendarTitle,  updatedPlan } from '../../features/calendarSlice';

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
  width: 1200px;
  height: 100vb;
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
  margin-left: 500px;
  font-size: 14px;
  border-radius: 6px;
`;

const TitleInput = styled.input`
  background-color: #f5cc8d;
  height: 30px;
  margin-bottom: 15px;
  width: 40%;
  border-radius: 10px;
  border: none;
  margin-top: 10px;
`;

const DetailInput = styled.textarea`
  background-color: #f5cc8d;
  height: 350px;
  width: 40%;
  border-radius: 10px;
  border: none;
  resize: none;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 30%;
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
      dispatch(clearSelectedPlan())
    }
  }, []) 

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
      dispatch(addCalendarTitle({ title, selectedDate, content }));
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
      <SelectedDateDiv>{selectedDate}</SelectedDateDiv>
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
        {selectedPlan && (
          <StyledButton onClick={handleDelete}>delete</StyledButton>
        )}
        <StyledButton onClick={handleCalendarData}>save</StyledButton>
      </ButtonWrapper>
    </Wrapper>
  );
}

export default CalendarPlanModal;