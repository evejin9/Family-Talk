import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useState } from "react";
import { LogInUser } from '../../features/loginSlice';
import { useSelector } from 'react-redux';
import { registPhotoItem } from '../../utils/local-storage.util';
import  uuid  from "react-uuid";

const WritePhotoWrapper = styled.div`
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

function WritePhoto() {

  const logInUSerInfo = useSelector(LogInUser)
  
  useEffect(() => {
    console.log('logInUSerInfo: ', logInUSerInfo);

  }, [])

  const formInitValue = {
    name: logInUSerInfo.name,
    imagePath:"",
    content: ''
  }
  const [] = useState()

  const [formValue, setFormValue] = useState(formInitValue)

  const imageFileChange = (e) => {
    const file = e.target.files[0]

    const reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onload = () => {
      const result = reader.result
      setFormValue({...formValue, imagePath: result})
    }
  }

  const submit = () => {
    console.log('formValue: ', formValue);
    const itemUuid = uuid()
    console.log('itemUuid: ', itemUuid);

    registPhotoItem({
      id: itemUuid,
      ...formValue
    });
  }

  return (
    <WritePhotoWrapper>
      <div className='plusImage'>
        <input type='file' onChange={imageFileChange}></input>
      </div>
      <div className='showImage'>
        {
          formValue.imagePath
          ? <img src={formValue.imagePath}></img>
          : ''
        }
      </div>
      <div className='writeContent'>
        <input type='text' placeholder='내용을 입력하세요' onChange={(e) => setFormValue({...formValue, content: e.target.value})}>
        </input>
      </div>
      <button onClick={submit}>게시</button>
    </WritePhotoWrapper>
  );
}

export default WritePhoto;