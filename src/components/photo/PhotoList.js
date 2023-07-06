// import React, { useEffect, useState } from 'react';
import dataPhoto from "../../dataPhoto.json";
import PhotoListItem from './PhotoListItem';
import styled from 'styled-components';
// import CommentList from './CommentList';
import { useFetcher, useLocation, useNavigate } from 'react-router-dom';
import { BsPlusCircleFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import WritePhoto from "./WritePhoto";
import uuid from "react-uuid";
import { useDispatch, useSelector } from "react-redux";
import { LogInUser } from "../../features/loginSlice";
import { getPostList, postLists } from "../../features/photoSlice";
// import { getPhotoList } from '../../utils/local-storage.util';

const PhotoListWrapper = styled.div`
  .writePhotoButton {
    position: fixed;
    bottom: 40px;
    left: 583px
  }
  .writePhotoButton{
      background: none;
      outline: none;
      border: none;
      height: 100%;
      /* line-height: 100%; */
      display: flex;
      align-items: end;
      svg {
        font-size: 40px;
        opacity: .8;
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

  return (
    <PhotoListWrapper>
      {postList.map((post) => 
        <PhotoListItem key={post.id} post={post} />
      )}
      <button className='writePhotoButton' onClick={() => {navigate('/photo/writePhoto')}}><BsPlusCircleFill/></button>
    </PhotoListWrapper>
  );
}

export default PhotoList;