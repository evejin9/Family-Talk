import React from 'react';
import styled from 'styled-components';
import { useState } from "react";

const WritePhotoWrapper = styled.div`
width: 100%;
/* display: flex;
flex-direction: column;
align-items: start; */
.showImage {
  width: auto;
  object-fit: cover;
}
.writeContent {
  width: 100%;
  input {
    width: 100%;
  }
}
`

function WritePhoto(props) {

  return (
    <WritePhotoWrapper>
      <div className='plusImage'>
        <input type='file'></input>
      </div>
      <div className='showImage'>
        <img src="https://i.ibb.co/rk1jbCH/Kakao-Talk-20230629-182517255.jpg"></img>
      </div>
      <div className='writeContent'>
        <input type='text'>
        </input>
      </div>
      <button>게시</button>
    </WritePhotoWrapper>
  );
}

export default WritePhoto;