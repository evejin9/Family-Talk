import React from 'react';
import PhotoListItem from './PhotoListItem';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { BsPlusCircleFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { postLists } from "../../features/photoSlice";

const PhotoListWrapper = styled.div`
  .writePhotoButton {
    position: fixed;
    bottom: 100px;
    right: 70px;
    padding: 0;
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