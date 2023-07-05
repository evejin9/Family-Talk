import React, { useState } from 'react';
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

  const [userIdError, setUserIdError] = useState(false);
  const [pwError, setPwError] = useState(false);
  const [configError, setConfigError] = useState(false);
  const [userNameError, setUserNameError] = useState(false);
  const [numberError, setNumberError] = useState(false);

  const { userId, pw, confirmPw, userName, birth, number } = inputValue;

  const navigate = useNavigate();

  const handleUserId = (e) => {
    const { name, value } = e.target;

    // if (name === 'userID') {
    //   if (value.length < 5) setUserIdError(false);
    //   else setUserIdError(true);
    //   setUserIdError(true);
    // }

    setInputValue({
      ...inputValue,
      [name]: value
    })
  }

  return (
    <SignUpwrapper>
      <SignUpBox>
        <img className='cursor-point' src={logo} onClick={() => navigate('/login')} />
        <InputStyle 
          name='userId' 
          defaultValue={userId} 
          type='text' 
          placeholder='아이디' 
          onChange={handleUserId} 
        />
        <InputStyle 
          name='pw' 
          defaultValue={pw} 
          type='password' 
          placeholder='비밀번호' 
          onChange={handleUserId} 
        />
        <InputStyle 
          name='confirmPw' 
          type='password' 
          placeholder='비밀번호 확인' 
          onChange={handleUserId} 
        />
        {/* {<p>{`비밀번호를 확인해주세요.`}</p>} */}
        <InputStyle 
          name='userName' 
          defaultValue={userName} 
          type='text' 
          placeholder='이름' 
          onChange={handleUserId} 
        />
        <InputStyle 
          name='birth' 
          defaultValue={birth} 
          type='text' 
          placeholder='생년월일 8자리' 
          onChange={handleUserId} 
        />
        <InputStyle 
          name='number' 
          defaultValue={number} 
          type='text' 
          placeholder='휴대전화번호' 
          onChange={handleUserId} 
        />
        <button onClick={undefined}> 가입하기 </button>
      </SignUpBox>
      
    </SignUpwrapper>
  );
}

export default SignUp;