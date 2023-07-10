import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import { LogInUser } from '../../features/loginSlice';
import { AiFillEye, AiFillEyeInvisible, AiOutlineUser } from 'react-icons/ai';
import { LiaPenSolid } from 'react-icons/lia';
import { PiCake } from 'react-icons/pi';
import { BsPhone } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri'
import { setUserEditData } from '../../features/mypageSlice';
import { useNavigate } from 'react-router-dom';


const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledSpan = styled.span`
  margin-top: 25px;
  margin-left: 10px;
  border: 2px solid #f5cc8d;
  border-radius: 6px;
  width: 400px;
  padding: 2px;
  font-size: 13px;

  svg {
    cursor: pointer;
  }
`;


const StyledInput = styled.input`
  outline: none;
  border: none;
  /* border-bottom: 2px solid #f5cc8d; */
  width: 200px;
`;

const StyledDiv = styled.div`
  display: flex;
  background-color: white;

  width: 500px;
  height: 450px;
  /* margin-top: 20px; */
  /* justify-content: center; */
  /* align-items: center; */
  flex-direction: column;
  border: 2px solid #f5cc8d;
  border-radius: 6px;
  animation: ${fadeIn} 0.4s ease-in-out;

`;


const StyledButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
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
  const [editPassword, setEditPassword] = useState('');
  const [showPw, setshowPw] = useState(false);

  const dispatch = useDispatch();
  
  const navigate = useNavigate()


  const handleEditClick = () => {
    closeModal();
    const userInfo = {
      id: editId,
      name: editName,
      birth: editBt,
      phone: editPhone,
      email: editEmail,
      password: editPassword
    };
  
    if (!validateEmail(editEmail)) {
      alert('올바른 이메일 형식이 아닙니다.');
      return;
    }
  
    dispatch(setUserEditData(userInfo));
  };

  

  const handleId = (e) => {
    setEditId(e.target.value)
  };

  const handleName = (e) => {
    setEditName(e.target.value)
  };

  const handleBt = (e) => {
    const value = e.target.value;
    let formattedValue = value.replace(/\D/g, ''); 
  
    if (formattedValue.length > 8) {
      formattedValue = formattedValue.slice(0, 8);
    }
  
    
    formattedValue = formattedValue.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3');
    setEditBt(formattedValue);
  };

  const handlePhone = (e) => {
    const value = e.target.value;
    let formattedValue = value.replace(/\D/g, ''); 
  
    if (formattedValue.length > 11) {
      formattedValue = formattedValue.slice(0, 10);
    }
    formattedValue = formattedValue.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
    setEditPhone(formattedValue);
  };

  const validateEmail = (email) => {
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return regex.test(email);
  };

  const handleEmail = (e) => {
    setEditEmail(e.target.value)
  };

  const handlePassword = (e) => {
    setEditPassword(e.target.value)
  }
  
  const goMypage = () => {
    navigate('/mypage')
  }
  

  return (
    <div>
      <StyledDiv>
      <StyledSpan>
        <AiOutlineUser size={25} style={{ marginRight: '5px' }} color="#5CE1E6" />
        ID: { <StyledInput value={editId} onChange={handleId} autoFocus spellCheck={false}/>}
      </StyledSpan>
      <StyledSpan>
        <LiaPenSolid size={25} style={{ marginRight: '5px' }} color="#5CE1E6" />
        Name: { <StyledInput value={editName} onChange={handleName} spellCheck={false}/> }
      </StyledSpan>
      <StyledSpan>
        <PiCake size={25} style={{ marginRight: '5px' }} color="#5CE1E6" />
        Birth date: { <StyledInput value={editBt} onChange={handleBt} placeholder='생년월일 8자리를 입력하세요.' spellCheck={false}/> }
      </StyledSpan>
      <StyledSpan>
        <BsPhone size={25} style={{ marginRight: '5px' }} color="#5CE1E6" />
        Phone: { <StyledInput value={editPhone} onChange={handlePhone} placeholder='핸드폰 번호 10자리를 입력하세요.' spellCheck={false}/> }
      </StyledSpan>
      <StyledSpan>
        <MdOutlineEmail size={25} style={{ marginRight: '5px' }} color="#5CE1E6" />
        Email: { <StyledInput value={editEmail} onChange={handleEmail} spellCheck={false}/> }
      </StyledSpan>
      <StyledSpan>
        <RiLockPasswordLine size={25} style={{ marginRight: '5px' }} color="#5CE1E6" />
        Change Password: { <StyledInput type={showPw ? 'text':'password'} value={editPassword} onChange={handlePassword} spellCheck={false}/> }
        {showPw ? <AiFillEye  size={20} onClick={() => setshowPw(false)}/> : <AiFillEyeInvisible size={20} onClick={() => setshowPw(true)} /> }
      </StyledSpan>

        <StyledButtonWrapper>
          <StyledButton onClick={closeModal}>Close</StyledButton>
          <StyledButton onClick={() => { goMypage(); handleEditClick();}}>Edit</StyledButton>
        </StyledButtonWrapper>
      </StyledDiv>
    </div>
  );
}

export default EditModal;
