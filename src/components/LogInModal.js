import React from 'react';



function LoginModal(props) {
  return (
    <>
      <h2>사이트 이름</h2>
      <input type='text' placeholder='아이디' />
      <input type='text' placeholder='비밀번호' />
      <button>로그인</button>
    </>
  );
}

export default LoginModal;