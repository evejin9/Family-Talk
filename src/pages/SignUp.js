import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { AiFillEyeInvisible, AiFillEye, } from "react-icons/ai";

import logo from "../images/logo.png";
import { useSelector } from 'react-redux';
import { userDataList } from '../features/userDataSlice';

const SignUpwrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignUpBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 300px;
    margin-bottom: 50px;
  }

  .errorMsg {
    font-size: 12px;
    color: red;
    padding: 10px;
  }

  input + input {
    margin-top: 20px;
  }

  input + div {
    margin-top: 20px;
  }

  div + input {
    margin-top: 20px;
  }

  button {
    width: 400px;
    height: 50px;
    font-weight: 600;
    background-color: #f5cc8d;
    margin: 30px 0;
    border: none;
    border-radius: 10px;
    margin-top: 50px;
  }

  .pwArea {
    position: relative;
    
    input {
      padding: 0 60px 0 20px;
    }
    
    svg {
      position: absolute;
      right: 15px;
      bottom: 14px;
      font-size: 22px;
      /* color: #f5cc8d; */

      &:hover {
        color: #f5cc8d;
      }
    }
  }
`;

const InputStyle = styled.input`
    width: 400px;
    height: 50px;
    font-size: 14px;
    /* background-color: #e0e0e0; */
    border: 1px solid #c0c0c0;
    border-radius: 10px;
    outline: none;
    padding-left: 20px;
`;

function SignUp(props) {
  const [inputValue, setInputValue] = useState({
    userId: '',
    pw: '',
    confirmPw: '',
    userName: '',
    birth: '',
    number: '',
    email: '',
  });
  
  const { userId, pw, confirmPw, userName, birth, number, email } = inputValue;

  // 에러 상태값
  const [userIdError, setUserIdError] = useState(false);
  const [pwError, setPwError] = useState(false);
  const [confirmError, setConfirmError] = useState(false);
  const [userNameError, setUserNameError] = useState(false);
  const [birthError, setBirthError] = useState(false);
  const [numberError, setNumberError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [isSameId, setIsSameId] = useState(false);

  // 비밀번호 표시
  const [showPw, setShowPw] = useState(false);

  // 버튼 활성화 
  const [isEnable, setIsEnable] = useState(true);

  const birthRef = useRef();
  const phoneRef = useRef();

  const userList = useSelector(userDataList);

  const navigate = useNavigate();
  
  const handleUserId = (e) => {
    const { name, value } = e.target;

    if (name === 'userId') {
        const patternCheck = /^[a-zA-Z0-9]*$/g.test(value);
        if (!patternCheck) return;

        const idChecked = userList.find(user => user.id === value);
        if (idChecked) setIsSameId(true);
        else setIsSameId(false);

    }

    if (name === 'pw') {
      const patternCheck =/^[A-Za-z0-9]{0,12}$/g.test(value);
      if (!patternCheck) return;
    }

    if (name === 'confirmPw') {
      if (value === inputValue.pw || value.length < 0) setConfirmError(false);
      else setConfirmError(true);
    }

    if (name === 'userName') {
      const patternCheck =/^[ㄱ-ㅎ가-힣a-zA-Z]{0,12}$/g.test(value);
      if (!patternCheck) return;
    }

    if (name === 'birth') {
      const birthValue = birthRef.current.value.replace(/\D+/g, "");
      const birthLength = 8;

      let result;
      result = "";

      for (let i = 0; i < birthValue.length && i < birthLength; i++) {
        switch (i) {
          case 4:
            result += "-";
            break;
          case 6:
            result += "-";
            break;
        
          default:
            break;
        }

        result += birthValue[i];
      }
      
      birthRef.current.value = result;


      if (value.length === 10 || value.length <= 0 ) setBirthError(false);
      else setBirthError(true);
    }

    if (name === 'number') {
      const numberValue = phoneRef.current.value.replace(/\D+/g, "");
      const numberLength = 11;

      let result;
      result = "";

      for (let i = 0; i < numberValue.length && i < numberLength; i++) {
        switch (i) {
          case 3:
            result += "-";
            break;
          case 7:
            result += "-";
            break;
        
          default:
            break;
        }

        result += numberValue[i];
      }
      
      phoneRef.current.value = result;

      if (value.length === 13 || value.length <= 0) setNumberError(false);
      else setNumberError(true);
    };

    setInputValue({
      ...inputValue,
      [name]: value
    })

    if (userId !== '' && pw !== '' && confirmPw !== '' && userName !== '' && birth !== '' && number !== '' && email !== '') {
      setIsEnable(false);
    }
  };

const checkPattern = () => {
  if (userId !== '') {
    if (userId.length >= 5 && userId.length > 0) setUserIdError(false);
    else setUserIdError(true);
  }

  if (pw !== '') {
      if (pw.length >= 6 || pw.length < 1) setPwError(false);
      else setPwError(true);
  }

  if (userName !== '') {
    if (userName.length >= 2 || userName.length <= 0) setUserNameError(false);
    else setUserNameError(true);
  }

  if (email !== '') {
    const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
    if (emailRegEx.test(email)) {
      setEmailError(false);
    }
    else setEmailError(true);
  }
};

const submitButton = () => {
  navigate(`/login`);
  alert(`${userName}님, 가입이 완료되었습니다.`);
}

  return (
    <SignUpwrapper>
      <SignUpBox>
        <img className='cursor-point' src={logo} onClick={() => navigate('/login')} />
        <InputStyle 
          name='userId'  
          type='text' 
          placeholder='아이디' 
          value={userId}
          maxLength='10' 
          onChange={handleUserId}
          onBlur={checkPattern}
        />
        {userIdError && <p className='errorMsg'>아이디를 5자리 이상 입력해주세요.</p>}
        {isSameId && <p className='errorMsg'>동일한 아이디가 존재합니다.</p> }

        <div className='pwArea'>
          <InputStyle 
            name='pw' 
            // defaultValue={pw} 
            value={pw} 
            type={showPw ? 'text':'password'} 
            placeholder='비밀번호' 
            onChange={handleUserId} 
            onBlur={checkPattern}
          />
          {showPw ? <AiFillEye className='cursor-point' onClick={() => setShowPw(false)}/> : <AiFillEyeInvisible className='cursor-point' onClick={() => setShowPw(true)} /> }
        </div>
        {pwError && <p className='errorMsg'>숫자, 문자를 사용한 형태의 6~12자리 이내의 암호를 입력해주세요.</p>}

        <InputStyle 
          name='confirmPw' 
          type='password' 
          value={confirmPw}
          placeholder='비밀번호 확인' 
          onChange={handleUserId} 
        />
        {confirmError && <p className='errorMsg'>비밀번호가 일치하지 않습니다.</p>}

        <InputStyle 
          name='userName' 
          // defaultValue={userName}
          value={userName} 
          type='text' 
          placeholder='이름' 
          onChange={handleUserId} 
          onBlur={checkPattern}
        />
        {userNameError && <p className='errorMsg'>이름을 2자리 이상 입력해주세요.</p>}

        <InputStyle 
          name='birth' 
          defaultValue={birth} 
          type='text' 
          ref={birthRef}
          placeholder='생년월일 8자리' 
          maxLength='10' 
          onChange={handleUserId}
          onBlur={checkPattern}
        />
        {birthError && <p className='errorMsg'>생년월일을 필수로 입력해주세요.</p>}

        <InputStyle 
          name='number' 
          defaultValue={number} 
          type='text' 
          ref={phoneRef}
          placeholder='휴대전화번호'
          maxLength='13' 
          onChange={handleUserId}
          onBlur={checkPattern}
        />
        {numberError && <p className='errorMsg'>휴대전화번호 11자리를 입력해주세요.</p>}

        <InputStyle 
          name='email' 
          value={email}
          type='text' 
          placeholder='이메일'
          onChange={handleUserId}
          onBlur={checkPattern}
        />
        {emailError && <p className='errorMsg'>이메일 주소가 정확한지 확인해주세요.</p>}

        <button 
          onClick={submitButton} 
          disabled={isEnable}
        > 
          가입하기 
        </button>
      </SignUpBox>
      
    </SignUpwrapper>
  );
}

export default SignUp;