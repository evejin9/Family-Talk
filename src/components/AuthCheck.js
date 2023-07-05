import React from 'react';
import { isUserLogin } from '../features/loginSlice';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

function AuthCheck(props) {
  const isLogin = useSelector(isUserLogin)

  if (!isLogin) {
    return <Navigate to='/login' />
  }

  return props.children;
}

export default AuthCheck;