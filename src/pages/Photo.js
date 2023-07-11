import React, { useCallback, useEffect, useState } from 'react';
import PhotoList from '../components/photo/PhotoList';
import  dataPhoto  from "../dataPhoto.json";
// import { initPhotoList } from '../utils/local-storage.util';
import { useSelector } from 'react-redux';
import { uuid } from "react-uuid";
import { LogInUser } from '../features/loginSlice';
import EditPhoto from '../components/photo/EditPhoto';
import WritePhoto from "../components/photo/WritePhoto";
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const PhotoWrapper = styled.div`
.hidden {
  display: none;
}
`

function Photo() {
  // useEffect(() => {
  //   // console.log(dataPhoto);
  //   initPhotoList(dataPhoto)
  // }, [])

  return (
    <PhotoWrapper className='show-content'>
      <Outlet />
    </PhotoWrapper>
    
  );
}

export default Photo;