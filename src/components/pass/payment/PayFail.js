import React from 'react';
import { Outlet } from 'react-router-dom';

function PayFail(props) {
  return (
    <div className='show-content'>
      <Outlet />
    </div>
  );
}

export default PayFail;