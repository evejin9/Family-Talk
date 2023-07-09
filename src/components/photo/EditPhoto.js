import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useState } from "react";
import { LogInUser } from '../../features/loginSlice';
import { useSelector } from 'react-redux';
import { registPhotoItem } from '../../utils/local-storage.util';
import  uuid  from "react-uuid";
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../ui/Button';
import { useDispatch } from "react-redux";
import { editPost, getPostList, postLists } from "../../features/photoSlice";


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



  const EditPhoto = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const posts = useSelector(postLists);
    const [imagePath, setImagePath] = useState("");
    const [content, setContent] = useState("");
    const postId = useSelector(state => state.postId);
  
    const selectedPost = posts.find((post) => post.id === postId); // postId로 선택한 게시글 찾기
    const image = selectedPost ? selectedPost.imagePath : ""; // 선택한 게시글의 이미지 가져오기
    const existingContent = selectedPost ? selectedPost.content : ""; // 기존 게시글의 내용 가져오기
  
    console.log(selectedPost);
    console.log(postId);


    const handleImagePathChange = (event) => {
      setImagePath(event.target.value);
    };
  
    const handleContentChange = (event) => {
      setContent(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // 게시글 수정 액션 디스패치
      dispatch(editPost({ id: postId, imagePath, content }));
      // 폼 초기화
      setImagePath("");
      setContent("");
      navigate("/photo")
    };
  
    useEffect(() => {
      setContent(existingContent); // 기존 게시글의 내용을 초기화
    }, [existingContent]);


    return (
      <EditPhotoWrapper>
        <form onSubmit={handleSubmit}>
          <div className='imgAndInput'>
            <input
              className='plusImage'
              type='file'
              accept='image/jpg, image/png, image/jpeg'
              onChange={handleImagePathChange} // 이미지 변경 핸들러 추가
            />
            <div className='showImage'>
              <img
                alt='img'
                src={imagePath}
              />
            </div>
            <div className='writeContent'>
              <textarea
                type='text'
                placeholder='내용을 입력하세요'
                value={content} // content 값 추가
                onChange={handleContentChange} // 내용 변경 핸들러 추가
              />
            </div>
          </div>
          <div className='button'>
            <Button title='취소' onClick={(e) => navigate("/photo")}/> 
            <Button title='게시' type='submit' /> {/* 폼 제출 핸들러 연결 */}
          </div>
          <div className='none'>
          </div>
        </form>
      </EditPhotoWrapper>
    );
}

export default EditPhoto;