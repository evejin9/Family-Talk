import React, { useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useState } from "react";
import { LogInUser } from '../../features/loginSlice';
import { useDispatch, useSelector } from 'react-redux';
import { registPhotoItem } from '../../utils/local-storage.util';
import  uuid  from "react-uuid";
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import dataPhoto from "../../dataPhoto.json";
import PhotoList from './PhotoList';
import { addPostList } from '../../features/photoSlice';


const WritePhotoWrapper = styled.div`
width: 100%;
align-items: start; 

.plusImage {
  display: none;
}
.imgAndInput {
  display: flex;
  width: 100%;
}
.showImage {
  width: 60%;
  margin-right: 1%;
  img {
    width: 100%;
    object-fit: cover;
    border: 1px solid orange;
    height: 100%;
  }
}
  .writeContent {
    width: 40%;
    display: block;
    textarea {
      background: none;
      outline: none;
      border: 1px solid orange;
      width: 100%;
      height: 100%;
      display: flex;
      /* text-align: center; */
      align-items: center;
      justify-content: center;
      padding: 7% 4%;
      }
}
.button {
  display: flex;
  justify-content: end;
  margin-top: 10px;
}
.addButton {
  margin-left: 10px;
}
.none {
  display: none;
}
`

function WritePhoto (props) {

  const [image, setImage] = useState("https://i.ibb.co/hs4SzRx/image.jpg");
  const [content, setContent] = useState('');
  const [file, setFile] = useState('');
  
  const logInUSerInfo = useSelector(LogInUser);
  const navigate = useNavigate()
  const fileInput = useRef(null); 
  const nextId = useRef(50000);


  const dispatch = useDispatch();
  
  const onClickEdit = () => {
    fileInput.current.click();
  };

  const imageFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
    }

    const reader = new FileReader();

    reader.onload = () => {
      const result = reader.result
      if (reader.readyState === 2) {
        setImage(result)
      }
    }
    reader.readAsDataURL(file)
  }

  const handleChangeContent = (e) => {
    setContent(e.target.value);
  }

  const handleSubmit = (e) => {
    if (content.length < 1){
      alert('내용을 입력해 주세요')
      return;
    }
    e.preventDefault();
    navigate("/photo")
    dispatch(addPostList({ logInUSerInfo, nextId, content, image }));
  }

  return (
    <WritePhotoWrapper>
      <div className='imgAndInput'>
        <input className='plusImage'
          type='file'
          accept='image/jpg, image/png, image/jpeg'
          onChange={imageFileChange}
          ref={fileInput}
        />
        <div className='showImage'>
          <img
            alt='img'
            src={image}
            onClick={onClickEdit}
          />
        </div>
        <div className='writeContent'>
          <textarea type='text' placeholder='내용을 입력하세요' value={content} onChange={handleChangeContent}>
          </textarea>
        </div>
      </div>
      <div className='button'>
        <Button title='취소' onClick={(e) => navigate("/photo")}/> 
        <Button title='게시' onClick={handleSubmit}/> 
      </div>
      <div className='none'>
      </div>
    </WritePhotoWrapper>
  );
}

export default WritePhoto;