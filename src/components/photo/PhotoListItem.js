import React, { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import { BsCheck2 } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";
import CommentList from './CommentList';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { uuid } from "react-uuid";
import { BsFillTrash3Fill } from "react-icons/bs";
import { PiPencil, PiTrash } from "react-icons/pi";
import EditPhoto from './EditPhoto';
import { useDispatch, useSelector } from 'react-redux';
import { LogInUser } from '../../features/loginSlice';
import { addComment, addPostList, deletePost, editPost } from '../../features/photoSlice';

const PhotoLIstItemWrapper = styled.div`
/* background-color: #efeeef; */
border-radius: 8px;
display: flex;
position: relative;
margin-bottom: 50px;

  .uploadImage{
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  width: 60%;
  max-height: 700px;
  overflow: hidden;
  margin-bottom: 5px;
  justify-content: center;
  background-color:  #000000;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;  
  }
}


/* .iconAndContent {
  display: flex;
  flex-direction: column;
  position: relative;
  height: auto;
} */

/* .icon {
  margin-left: 15px;
  svg {
    font-size: 25px;
  }
} */


.mainContent {
  width: 40%;
  display: flex;
  flex-direction: column;
  margin-left: 2%;
  justify-content: space-between;

  .profileImgNameMore {
    display: flex;
    align-items: center;
    height: 50px;
    margin-bottom: 3px;
    img {
      display: inline;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      margin-right: 2%;
    }
    .name {
      width: 75%;
    }
    svg {
      font-size: 30px;
      cursor: pointer;
      color: gray;
    }
  }
  .contentAndComment {
    height: auto;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 2px;
      background: #ccc;
      cursor: pointer;
    }
    .postContent {
      flex-wrap: wrap;
      overflow: hidden;
      height: auto;
      margin-bottom: 3%;
      padding-top: 10px;
      }
    .comment {
      margin-bottom: 3%;
      height: auto;

    }
  }

    .writeComment {
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: end;
      width: 100%;
    input {
      background: none;
      outline: none;
      border: none;
      border-bottom: solid 1px black;
      width: 85%;
      }
    button {
      background: none;
      outline: none;
      border: none;
      /* line-height: 100%; */
      display: flex;
      align-items: end;
      svg {
        font-size: 20px;
      }
    }
  }
  button {
      background: none;
      outline: none;
      border: none;
      width: auto;
    }
  } 
`

function PhotoListItem(props) {
  const {post, onWriteComment, comments, removeComment} = props;
  const navigate = useNavigate('/')
  const dispatch = useDispatch()
  const logInUSerInfo = useSelector(LogInUser);
  const commentId = useRef(10000)
  // const [commentContent, setCommentContent] = useState('');
  const [value, setValue] = useState('');

  const handleChangeComment = (e) => {
    setValue(e.target.value);
  }

  const commentHandleSubmit = (e) => {
    if (value.length < 1){
      alert('내용을 입력해 주세요')
      return;
    }
    onWriteComment(value);
    setValue('')
    e.preventDefault();
    // dispatch(addComment({logInUSerInfo, commentContent}));
  }
  const handleDelete = () => {
      dispatch(deletePost(post.id));
  };
  const handleEditPost = () => {
      dispatch(editPost({ id: post.id}));
      // dispatch(addCalendarTitle({ title, selectedDate: format(selectedDate, 'yyyy-MM-dd'), content }));
    // setTitle('');
    // setContent('');
    // closeModal();
    navigate(`/photo/editPhoto/${post.id}`)
  };



  return (
    <PhotoLIstItemWrapper>
      <div className='uploadImage'>
        <img src={post.imagePath} alt='img'></img>
      </div>
      <div className='mainContent'>
        <div className='profileContentComment'>
          <div className='profileImgNameMore'>
            <img src={post.profileImage} alt='profileImg'></img>
            <span className='name'>{post.name}</span> 
            <button onClick={handleEditPost} ><PiPencil /></button>
            <button
            onClick={handleDelete}
            ><PiTrash /></button>
          </div>
          <div className='contentAndComment'>
            <div className='postContent'>{post.content}</div>
            <div className='comment'>
              <CommentList comments={comments} removeComment={removeComment}/>
            </div>
          </div>
        </div>
          <div className='writeComment'>
            <input type='text' value={value} onChange={handleChangeComment}>
            </input>
            <button type='button' className='commentButton' onClick={commentHandleSubmit}>
              <BsCheck2/>
            </button>
          </div>
      </div>
    </PhotoLIstItemWrapper>
  );
}

export default PhotoListItem;