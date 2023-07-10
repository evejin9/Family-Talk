// import React, { useEffect, useState } from 'react';
import dataPhoto from "../../dataPhoto.json";
import PhotoListItem from './PhotoListItem';
import styled from 'styled-components';
// import CommentList from './CommentList';
import { useFetcher, useLocation, useNavigate } from 'react-router-dom';
import { BsPlusCircleFill } from "react-icons/bs";
import { useCallback, useEffect, useState } from "react";
import WritePhoto from "./WritePhoto";
import uuid from "react-uuid";
import { useDispatch, useSelector } from "react-redux";
import { LogInUser } from "../../features/loginSlice";
import { getPostList, postLists } from "../../features/photoSlice";
// import { getPhotoList } from '../../utils/local-storage.util';

const PhotoListWrapper = styled.div`
  .writePhotoButton {
    position: fixed;
    bottom: 100px;
    right: 67px;
  }
  .writePhotoButton{
      background: none;
      outline: none;
      border: none;
      display: flex;
      align-items: end;
      svg {
        font-size: 40px;
        color: rgb(245, 204, 141);;
        &:hover {
          color: red;
        }
      }
    }
`

function PhotoList(props)  {

  const postList = useSelector(postLists);
  const navigate = useNavigate('/')

  const [comments, setComments] = useState([
    
  ]);
  const logInUSerInfo = useSelector(LogInUser)

  const handleInsert = useCallback((value) => {
    const comment = {
      commentId: uuid(),
      commentContent: value,
      commentName: logInUSerInfo.name
    }
    setComments(comments => comments.concat(comment));
  }, [])

  const handleRemoveComment = useCallback((id) =>{
    setComments(comments => comments.filter((comment) => comment.commentId !== id));
  }, []);

  return (
    <PhotoListWrapper>
      {postList.map((post) => 
        <PhotoListItem key={post.id} post={post} onWriteComment={handleInsert} removeComment={handleRemoveComment} comments={comments}/>
      )}
      <button className='writePhotoButton' onClick={() => {navigate('/photo/writePhoto')}}><BsPlusCircleFill/></button>
    </PhotoListWrapper>
  );
}

export default PhotoList;