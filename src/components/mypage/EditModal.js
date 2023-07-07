import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { LogInUser } from '../../features/loginSlice';
import { AiOutlineUser } from 'react-icons/ai';
import { LiaPenSolid } from 'react-icons/lia';
import { PiCake } from 'react-icons/pi';
import { BsPhone } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import { setUserEditData } from '../../features/mypageSlice';

const StyledSpan = styled.span`
  margin-top: 30px;
  margin-left: 10px;
`;


const StyledInput = styled.input`
  outline: none;
  border: none;
  border-bottom: 2px solid #f5cc8d;
  width: 200px;
`;

const StyledDiv = styled.div`
  display: flex;
  background-color: white;

  width: 500px;
  height: 400px;
  /* margin-top: 20px; */
  /* justify-content: center; */
  /* align-items: center; */
  flex-direction: column;
  border: 1px solid #f5cc8d;
  border-radius: 6px;
`;


const StyledButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 80px;
`;


const StyledButton = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 6px;
  outline: none;
  font-size: 13px;
  background-color: #fff;
  border: 2px solid #acacac;

  &:hover {
    background-color: #f5cc8d;
  }
`;




function EditModal({closeModal}) {
  const logInUser = useSelector(LogInUser)
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState('');
  const [editName, setEditName] = useState('');
  const [editBt, setEditBt] = useState('');
  const [editPhone, setEditPhone] = useState('');
  const [editEmail, setEditEmail] = useState('');

  const dispatch = useDispatch();


  const handleEditClick = () => {
    closeModal();
    const userInfo = {
      id: editId,
      name: editName,
      birth: editBt,
      phone: editPhone,
      email: editEmail
    };
    dispatch(setUserEditData(userInfo));
  };

  

  const handleId = (e) => {
    setEditId(e.target.value)
  };

  const handleName = (e) => {
    setEditName(e.target.value)
  };

  const handleBt = (e) => {
    setEditBt(e.target.value)
  };

  const handlePhone = (e) => {
    setEditPhone(e.target.value)
  };

  const handleEmail = (e) => {
    setEditEmail(e.target.value)
  };


  return (
    <div>
      <StyledDiv>
      <StyledSpan>
        <AiOutlineUser size={25} style={{ marginRight: '5px' }} color="#5CE1E6" />
        ID: { <StyledInput value={editId} onChange={handleId} />}
      </StyledSpan>
      <StyledSpan>
        <LiaPenSolid size={25} style={{ marginRight: '5px' }} color="#5CE1E6" />
        Name: { <StyledInput value={editName} onChange={handleName}/> }
      </StyledSpan>
      <StyledSpan>
        <PiCake size={25} style={{ marginRight: '5px' }} color="#5CE1E6" />
        Birth date: { <StyledInput value={editBt} onChange={handleBt}/> }
      </StyledSpan>
      <StyledSpan>
        <BsPhone size={25} style={{ marginRight: '5px' }} color="#5CE1E6" />
        Phone: { <StyledInput value={editPhone} onChange={handlePhone}/> }
      </StyledSpan>
      <StyledSpan>
        <MdOutlineEmail size={25} style={{ marginRight: '5px' }} color="#5CE1E6" />
        Email: { <StyledInput value={editEmail} onChange={handleEmail}/> }
      </StyledSpan>

        <StyledButtonWrapper>
          <StyledButton onClick={closeModal}>Close</StyledButton>
          <StyledButton onClick={handleEditClick}>Edit</StyledButton>
        </StyledButtonWrapper>
      </StyledDiv>
    </div>
  );
}

export default EditModal;
