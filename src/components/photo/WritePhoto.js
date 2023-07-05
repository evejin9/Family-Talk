import React, { useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useState } from "react";
import { LogInUser } from '../../features/loginSlice';
import { useSelector } from 'react-redux';
import { registPhotoItem } from '../../utils/local-storage.util';
import  uuid  from "react-uuid";
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import dataPhoto from "../../dataPhoto.json";


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
  img {
    width: 100%;
    object-fit: cover;
    border: 1px solid orange;
    margin-right: 1%;
    height: 100%;
  }
  .writeContent {
    width: 40%;
    display: block;
    input {
      background: none;
      outline: none;
      border: 1px solid orange;
      width: 100%;
      height: 100%;
      text-align: center;
      }
}
.button {
  margin-top: 10px;
  display: flex;
  justify-content: end;
}
`

function WritePhoto(props) {
  // const {onWriterPage} = props;
  const fileInput = useRef(null); 

  const logInUSerInfo = useSelector(LogInUser)

  const navigate = useNavigate('/')
  
  const [image, setImage] = useState("https://i.ibb.co/7KQPWbx/image.jpg");
  const [content, setContent] = useState('');
  const [file, setFile] = useState('');
  const [posts, setPosts] = useState([]);

  
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
      // setPosts({...posts, imagePath: result})
      if (reader.readyState === 2) {
        setImage(result)
      }
    }
    reader.readAsDataURL(file)
  }

  const handleInsert = useCallback((imagePath, content) => {
    const post = {
      id: uuid(),
      name: logInUSerInfo.name,
      profileImage: logInUSerInfo.imagePath,
      image,
      content
    }
    setPosts(posts => posts.concat(post))
  }, []);

  const handleChangeContent = (e) => {
    setContent(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleInsert(image, content);
    navigate("/photo")
    setImage('')
    setContent('')
  }
  const handleRemove = useCallback((id) => {
    setPosts(posts => posts.filter((post) => post.id !== id))
  })

  return (
    <WritePhotoWrapper>
      <div className='imgAndInput'>
        <input className='plusImage'
          type='file'
          accept='image/jpg, image/png, image/jpeg'
          onChange={imageFileChange}
          ref={fileInput}
        />
        <img
          alt='img'
          src={image}
          onClick={onClickEdit}
        />
        <div className='writeContent'>
          <input type='text' placeholder='내용을 입력하세요' value={content} onChange={handleChangeContent}>
          </input>
        </div>
      </div>
      <div className='button'>
        <Button title='게시' onClick={handleSubmit}/> 
      </div>
    </WritePhotoWrapper>
  );
}

export default WritePhoto;