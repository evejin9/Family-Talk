import React, { useCallback, useEffect, useState } from 'react';
import PhotoList from '../components/photo/PhotoList';
import { uuid } from "react-uuid";
import  dataPhoto  from "../dataPhoto.json";
import { initPhotoList } from '../utils/local-storage.util';

function Photo() {

  useEffect(() => {
    // console.log(dataPhoto);
    initPhotoList(dataPhoto)
  }, [])



  return (
    <div className='show-content'>
        <PhotoList />
    </div>
  );
}

export default Photo;