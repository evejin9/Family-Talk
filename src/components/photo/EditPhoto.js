import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useState } from "react";
import { LogInUser } from '../../features/loginSlice';
import { useSelector } from 'react-redux';
import { registPhotoItem } from '../../utils/local-storage.util';
import  uuid  from "react-uuid";
import { useNavigate, useParams } from 'react-router-dom';

const EditPhotoWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: start; 
.showImage {
  width: 100%;
  object-fit: cover;
  img {
    width: 100%;
  }
}
.writeContent {
  width: 100%;
  margin-top: 5px;
  input {
    background: none;
    outline: none;
    border: none;
    border-bottom: solid 1px black;
    width: 100%;
    }

}
`

function EditPhoto(props) {

  const { editId } = useParams();
  // console.log(props);

  return (
    <EditPhotoWrapper>
      <div className='plusImage'>
        <input type='file'></input>
      </div>
      <div className='showImage'>
      </div>
      <div className='writeContent'>
        <input type='text' placeholder='내용을 입력하세요' >
        </input>
      </div>
      <button>게시</button>
    </EditPhotoWrapper>

  );
}

export default EditPhoto;