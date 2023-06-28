import React, { useState } from 'react';
import styled from 'styled-components';
import { BiSolidCommentDetail, BiCommentDetail } from "react-icons/bi";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import CommentList from './CommentList';
const PhotoLIstItemWrapper = styled.div`
  .center {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
  min-width: 425px;
  max-width: 425px;
  background-size: cover;
  overflow: hidden;
  margin-bottom: 5px;
}
  } 


& + & {
  margin-top: 30px;
}

.iconAndContent {
  display: flex;
  flex-direction: column;
  max-width: 420px;
  position: relative;
  height: auto;
}

.icon {
  margin-left: 15px;
  svg {
    font-size: 25px;
  }
}

.postContent {
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 15px;
  flex-wrap: wrap;
  overflow: hidden;
  height: auto;
}

.profile {
  display: flex;
  align-items: center;
  img {
    display: inline;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin: 10px;
  }
  .name {
    display: inline;
  }
}

input {
  background: none;
  outline: none;
  border: none;
  border-bottom: solid 1px black;
  background-color: #F0F8FF;
  margin-top: 10px;
  margin-right: 5px;
  margin-left: 15px;
  width: 370px;
  flex-wrap: wrap;

  }


  button {
    border: none;
    background-color: #F0F8FF;
  }
`

function PhotoListItem(props) {
  const { post } = props;
  // console.log(post.imagePath);
  const [visible, setVisible] = useState(false);
  return (
    <PhotoLIstItemWrapper>
      <div className='profile'>
        <img src={post.profileImage} alt='profileImg'></img>
        <div className='name'>{post.name}</div>
      </div>
      <div className='center'>
        <img src={post.imagePath} alt='img'></img>
      </div>
          <div className='icon'>
            <FaRegHeart style={{color: 'red'}}/>
            <button type="button" onClick={() => {setVisible(!visible)}}>
              {visible ? <BiCommentDetail/> : <BiSolidCommentDetail/>}
            </button> 
          </div>
          <div className='postContent'>{post.content}</div>
          <CommentList key={post.id} post={post}/>
          <div className='writeComment'>
            <input type='text'>
            </input>
            <button type='button'>
              게시
            </button>
          </div>
    </PhotoLIstItemWrapper>
  );
}

export default PhotoListItem;