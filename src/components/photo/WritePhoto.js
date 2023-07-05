import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useState } from "react";
import { LogInUser } from '../../features/loginSlice';
import { useSelector } from 'react-redux';
import { registPhotoItem } from '../../utils/local-storage.util';
import  uuid  from "react-uuid";
import { useNavigate } from 'react-router-dom';

const WritePhotoWrapper = styled.div`
width: 100%;
align-items: start; 

.plusImage {

}
.imgAndTextInput{
  display: flex;
  .showImage {
    width: 60%;
    object-fit: cover;

    background-color: pink;
    display: block;
    img {
      width: 100%;
    }
  }
  .writeContent {
    width: 40%;
    margin-top: 5px;
    display: block;
    input {
      background: none;
      outline: none;
      border: none;
      border-bottom: solid 1px black;
      width: 100%;
      }
}

}
`

function WritePhoto({onInsert}) {
  console.log(onInsert);
  const logInUSerInfo = useSelector(LogInUser)

  const navigate = useNavigate('/')
  
  const formInitValue = {
    name: logInUSerInfo.name,
    profileImage: logInUSerInfo.imagePath,
    imagePath:"",
    content: ''
  }

  const [posts, setPosts] = useState((formInitValue));

  const imageFileChange = (e) => {
    const file = e.target.files[0]

    const reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onload = () => {
      const result = reader.result
      setPosts({...posts, imagePath: result})
    }
  }

  const submit = () => {
    onInsert(posts);
    setPosts('')
    navigate('/photo')
  }

  const handleChange = (e) => {
    onInsert(posts)
    setPosts('')
  }


  return (
    <WritePhotoWrapper onSubmit={submit}>
      <div className='plusImage'>
        <input type='file' onChange={imageFileChange}></input>
      </div>
      <div className='imgAndTextInput'>
        <div className='showImage'>
          {
            posts.imagePath
            ? <img alt='사진' src={posts.imagePath}></img>
            : ''
          }
        </div>
        <div className='writeContent'>
          <input type='text' placeholder='내용을 입력하세요' value={posts} onChange={handleChange} >
          </input>
        </div>
      </div>
      <button type='submit'>게시</button>
    </WritePhotoWrapper>
  );
}

export default WritePhoto;