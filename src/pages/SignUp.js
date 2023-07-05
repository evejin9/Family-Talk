import React from 'react';
import styled from 'styled-components';

import logo from "../images/logo.png";

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

  const submitSignUp = {

  }

  return (
    <SignUpwrapper>
      <SignUpBox>
        <img src={logo} />
        <InputStyle placeholder='아이디' />
        <InputStyle placeholder='비밀번호' />
        <InputStyle placeholder='이름' />
        <InputStyle placeholder='생년월일 8자리' />
        <InputStyle placeholder='휴대전화번호' />
        <button onClick={undefined}> 가입하기 </button>
      </SignUpBox>
      
    </SignUpwrapper>
  );
}

export default SignUp;