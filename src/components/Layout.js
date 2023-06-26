import React from 'react';
import { Outlet } from 'react-router-dom';

function Layout(props) {
  return (
    <>
      <Outlet />
      <div>
        <ul>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
        </ul>
      </div>
    </>
  );  
}

export default Layout;