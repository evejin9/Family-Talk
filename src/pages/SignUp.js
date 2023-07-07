import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import logo from "../images/logo.png";
import { useNavigate } from 'react-router-dom';

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
  });
  
  const { userId, pw, confirmPw, userName, birth, number } = inputValue;

  // 에러 상태값
  const [userIdError, setUserIdError] = useState(false);
  const [pwError, setPwError] = useState(false);
  const [configError, setConfigError] = useState(false);
  const [userNameError, setUserNameError] = useState(false);
  const [birthError, setBirthError] = useState(false);
  const [numberError, setNumberError] = useState(false);

  // 버튼 활성화 
  const [isEnable, setIsEnable] = useState(true);

  const birthRef = useRef();
  const phoneRef = useRef();

  const navigate = useNavigate();
  
  const handleUserId = (e) => {
    const { name, value } = e.target;

    if (name === 'userId') {
        const patternCheck = /^[a-zA-Z0-9]*$/g.test(value);
        if (!patternCheck) return;

        // if (patternEngNum.test(value)) return;

      if (value.length < 5 && value.length > 0) setUserIdError(true);
      else setUserIdError(false);
    }

    if (name === 'pw') {
      console.log(value);
      const patternCheck =/^[A-Za-z0-9]{0,12}$/g.test(value);
      if (!patternCheck) return;

      if (value.length >= 4 || value.length < 1) setPwError(false);
      else setPwError(true);
    }

    if (name === 'confirmPw') {
      if (value === inputValue.pw || value.length < 1) setConfigError(false);
      else setConfigError(true);
    }

    if (name === 'userName') {
      if (value.length > 2 || value.length <= 0) setUserNameError(false);
      else setUserNameError(true);
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

    // if (userIdError && pwError) {
    //   setIsEnable(false);
    // }
  };

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
        />
        {userIdError && <p className='errorMsg'>아이디를 5자리 이상 입력해주세요</p>}

        <InputStyle 
          name='pw' 
          // defaultValue={pw} 
          value={pw} 
          type='password' 
          placeholder='비밀번호' 
          onChange={handleUserId} 
        />
        {pwError && <p className='errorMsg'>숫자와 문자 포함 형태의 6~12자리 이내의 암호를 입력해주세요</p>}

        <InputStyle 
          name='confirmPw' 
          type='password' 
          value={confirmPw}
          placeholder='비밀번호 확인' 
          onChange={handleUserId} 
        />
        {configError && <p className='errorMsg'>비밀번호와 동일하지 않습니다.</p>}

        <InputStyle 
          name='userName' 
          // defaultValue={userName}
          value={userName} 
          type='text' 
          placeholder='이름' 
          onChange={handleUserId} 
        />
        {userNameError && <p className='errorMsg'>이름을 2자리 이상 입력해주세요</p>}

        <InputStyle 
          name='birth' 
          defaultValue={birth} 
          type='text' 
          ref={birthRef}
          placeholder='생년월일 8자리' 
          maxLength='10' 
          onChange={handleUserId}
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
        />
        {numberError && <p className='errorMsg'>휴대전화번호 11자리를 입력해주세요</p>}

        <button onClick={undefined} disabled={isEnable}> 가입하기 </button>
      </SignUpBox>
      
    </SignUpwrapper>
  );
}

export default SignUp;