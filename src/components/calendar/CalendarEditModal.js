import React, { useEffect, useState } from 'react';
import { Placeholder } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { addCalendarTitle, clearSelectedPlan, deleteCalendarTitle, selectSelectedPlan, selectTitle,  updateCalendarTitle,  updatedPlan, clickEditModal } from '../../features/calendarSlice';
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
  
  &:focus {
    outline: none;
    
  }
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
  background-attachment: local;
  background-image:
    linear-gradient(to right,  #f5cc8d 10px, transparent 10px),
    linear-gradient(to left,  #f5cc8d 10px, transparent 10px),
    repeating-linear-gradient( #f5cc8d,  #f5cc8d 30px, #ccc 30px, black 31px, white 31px);
  line-height: 31px;
  padding: 8px 15px;
  &:focus {
    outline: none;
  }
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

const CalendarEditModal = ({ selectedDate, closeEditModal, onDateClick, selectedDateCl }) => {
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
    closeEditModal();
  };

  const handleDelete = () => {
    if (selectedPlan) {
      dispatch(deleteCalendarTitle(selectedPlan.id));
    }
    closeEditModal();
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  // 타이틀 인풋 에서 엔터키 입력시 컨텐트작성 창으로 이동
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      document.querySelector('#detailInput').focus();
    }
  };

  return (
    <Wrapper>
      {/* <SelectedDateDiv>{selectedPlan ? selectedPlan.date: selectedDate}</SelectedDateDiv> */}
      <SelectedDateDiv>{selectedPlan ? selectedPlan.date: format(selectedDate, 'yyyy-MM-dd')}</SelectedDateDiv>

      <TitleInput
        placeholder='Title'
        onChange={handleTitleChange}
        value={title}
        autoFocus
        onKeyUp={handleKeyPress}
        spellCheck={false}
        // disableds
        />

      <DetailInput
        id='detailInput'
        placeholder='Content'
        onChange={handleContentChange}
        value={content}
        spellCheck={false}
        
      />

      <ButtonWrapper>
        <StyledButton onClick={closeEditModal}>Close</StyledButton>
        <StyledButton onClick={handleCalendarData}>Edit</StyledButton>
      </ButtonWrapper>
    </Wrapper>
  );
}

export default CalendarEditModal;