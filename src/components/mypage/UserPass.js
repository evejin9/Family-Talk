import React, { useState } from 'react';
import styled from 'styled-components';
import {} from 'react-icons/io'
import { IoTicketOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { selectMyPass, selectPassList, selectSelectedPass } from '../../features/passSlice';
import { LiaCrownSolid } from 'react-icons/lia'
import { useNavigate } from 'react-router-dom';

const StyledDiv = styled.div`
  display: flex;
  /* background-color: blue; */
  width: 40%;
  height: 200px;
  /* margin-top: 20px; */
  /* justify-content: center; */
  /* align-items: center; */
  flex-direction: column;
  border: 2px solid #f5cc8d;
  border-radius: 6px;
  padding: 2px;
`;

const StyledDeleteDiv = styled.div`
  border: 2px solid #f5cc8d;
  width: 270px;
  margin-top: 20px;
  border-radius: 6px;
  padding: 2px;
  
`;

const TitleDiv = styled.div`
  font-size: 17px;
  margin-top: 20px;
  margin-bottom: 30px;
  margin-left: 40px;
`;

const StyledSpan = styled.span`
  margin-bottom: 15px;
  font-size: 14px;
`;

const StyledDeleteSpan = styled.span`
  margin-bottom: 20px;
  font-size: 10px;
  margin-left: 15px;
`;

const StyledButton = styled.button`
  width: 90px;
  height: 30px;
  border-radius: 6px;
  outline: none;
  font-size: 13px;
  background-color: #fff;
  border: 2px solid #acacac;
  margin-left: 5px;

  &:hover {
    background-color: #f5cc8d;
  }
`;

const StyledDeleteButton = styled.button`
  width: 60px;
  height: 20px;
  border-radius: 6px;
  outline: none;
  font-size: 10px;
  background-color: #fff;
  border: 2px solid #acacac;
  margin-left: 5px;

  &:hover {
    background-color: #f5cc8d;
  }
`;

const StyledInput = styled.input`
  outline: none;
  border: none;
  border: 2px solid #f5cc8d;
  width: 230px;
  font-size: 10px;
  margin-bottom: 15px;
  margin-left: 15px;
  margin-top: 10px;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

`;


function UserPass(props) {
  
  const [passwordInput, setPasswordInput] = useState('');
  const [showConfirmationAlert, setShowConfirmationAlert] = useState(false);  

  const payPass = useSelector(selectMyPass)
  const usePass = useSelector(selectPassList)
  const navigate = useNavigate()

  const goPassPage = () => {
    navigate('/pass')
  }
  
  const goLoginPage = () => {
  }
  
  const handleWithdrawalClick = () => {
    setShowConfirmationAlert(true);
  };
  
  const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
  };
  const handleConfirmationCancel = () => {
    
    setShowConfirmationAlert(false);
    setPasswordInput('');
  };
  
  const handleConfirmationConfirm = () => {
    navigate('/login')
    setShowConfirmationAlert(false);
    setPasswordInput('');
  };

  return (
    <StyledDiv>
      <TitleDiv><IoTicketOutline size={25} style={{marginRight: '5px'}} color='#f5cc8d' />Pass information</TitleDiv>
      <StyledSpan><LiaCrownSolid size={25} style={{marginRight: '5px'}} color='#f5cc8d'/>
        회원등급:  {payPass.membershipName || '비회원'}
      </StyledSpan>
      <StyledSpan><LiaCrownSolid size={25} style={{marginRight: '5px'}} color='#f5cc8d'/>
        이용권혜택:  {payPass.membershipContent || '비회원'}
      </StyledSpan>
      <StyledButtonWrapper>
        <StyledButton onClick={handleWithdrawalClick}>회원탈퇴</StyledButton>
        <StyledButton onClick={goPassPage}>이용권 구매</StyledButton>
      </StyledButtonWrapper>
      {showConfirmationAlert && (
      <StyledDeleteDiv>
        <StyledDeleteSpan>비밀번호를 입력하여 회원 탈퇴를 진행하시겠습니까?</StyledDeleteSpan>
        <StyledInput type="password" value={passwordInput} onChange={handlePasswordChange} />
        <StyledButtonWrapper>
          <StyledDeleteButton onClick={handleConfirmationConfirm}>확인</StyledDeleteButton>
          <StyledDeleteButton onClick={handleConfirmationCancel}>취소</StyledDeleteButton>
        </StyledButtonWrapper>
      </StyledDeleteDiv>
    )}
    </StyledDiv>
  );
}

export default UserPass;