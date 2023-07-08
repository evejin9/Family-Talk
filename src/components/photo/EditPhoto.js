import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useState } from "react";
import { LogInUser } from '../../features/loginSlice';
import { useSelector } from 'react-redux';
import { registPhotoItem } from '../../utils/local-storage.util';
import  uuid  from "react-uuid";
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../ui/Button';

const EditPhotoWrapper = styled.div`
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

function EditPhoto(props) {
  const [image, setImage] = useState("https://i.ibb.co/hs4SzRx/image.jpg");
  const [content, setContent] = useState('');
  const [file, setFile] = useState('');

  const navigate = useNavigate()

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

  const { editId } = useParams();
  // console.log(props);

  return (
    <EditPhotoWrapper>
      <div className='imgAndInput'>
        <input className='plusImage'
          type='file'
          accept='image/jpg, image/png, image/jpeg'


        />
        <div className='showImage'>
          <img
            alt='img'
            src={image}
          />
        </div>
        <div className='writeContent'>
          <textarea type='text' placeholder='내용을 입력하세요' >
          </textarea>
        </div>
      </div>
      <div className='button'>
        <Button title='취소' onClick={(e) => navigate("/photo")}/> 
        <Button title='게시' /> 
      </div>
      <div className='none'>
      </div>
    </EditPhotoWrapper>

  );
}

export default EditPhoto;