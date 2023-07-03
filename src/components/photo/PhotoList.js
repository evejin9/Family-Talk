import React from 'react';
import dataPhoto from "../../dataPhoto.json";
import PhotoListItem from './PhotoListItem';
import styled from 'styled-components';
import CommentList from './CommentList';
import { useNavigate } from 'react-router-dom';
import { BsPlusCircleFill } from "react-icons/bs";

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

function PhotoList(props) {
  const {posts, onRemove} = props;
  console.log(posts);

  const navigate = useNavigate('/')
  return (
    <PhotoListWrapper>
      {dataPhoto.map((post) => 
        <PhotoListItem key={post.id} post={post} posts={posts} onRemove={onRemove} />
      )}
      <button className='writePhotoButton' onClick={() => navigate('/writePhoto')}><BsPlusCircleFill/></button>
    </PhotoListWrapper>
  );
}

export default PhotoList;