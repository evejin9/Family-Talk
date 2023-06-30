import React, { useState } from 'react';
import styled from 'styled-components';
import { BiSolidCommentDetail, BiCommentDetail } from "react-icons/bi";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { AiFillPlusCircle } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";
import CommentList from './CommentList';
import { Form, useNavigate } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const PhotoLIstItemWrapper = styled.div`
/* background-color: #efeeef; */
border-radius: 8px;
display: flex;
position: relative;

  .uploadImage{
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  width: 55%;
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

& + & {
  margin-top: 30px;
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
  width: 45%;
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  .profileImgNameMore {
    display: flex;
    align-items: center;
    margin-bottom: 3%;
    height: 15%;
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
    min-height: 70%;
    max-height: 70%;
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
      }
    .comment {
      margin-bottom: 3%;
      height: auto;

    }
  }

    .writeComment {
      height: 15%;
      bottom: 0%;
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
      height: 5%;
      line-height: 100%;
      text-align: start;
    }
  }
  } 
`
const StyledModal = styled(Modal)`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .7);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`


function PhotoListItem(props) {
  const { post } = props;
  const [visible, setVisible] = useState(true);
  const [like, setLike] = useState(true);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <PhotoLIstItemWrapper>
        <div className='uploadImage'>
          <img src={post.imagePath} alt='img'></img>
        </div>
        <div className='mainContent'>
          <div className='profileImgNameMore'>
            <img src={post.profileImage} alt='profileImg'></img>
            <span className='name'>{post.name}</span> 
            <FiMoreHorizontal/>
          </div>
          <div className='contentAndComment'>
            <div className='postContent'>{post.content}</div>
            <div className='comment'>
              <CommentList key={post.id} post={post}/>
            </div>
          </div>
          <div className='writeComment'>
            <input type='text'>
            </input>
            <button type='button' className='commentButton'>
              
            </button>
          </div>
        </div>

          {/* <div className='icon'>
            <button type='button' onClick={() => {setLike(!like)}}>
              {like ? <FaRegHeart /> : <FaHeart style={{color: 'red'}}/>}
            </button>
            <button type="button" onClick={() => {setVisible(!visible)}}>
              {visible ? <BiCommentDetail/> : <BiSolidCommentDetail/>}
            </button> 
          </div> */}
          {/* <div className='writeComment'>
            <input type='text'>
            </input>
            <button type='button' className='commentButton'>
              <BsFillArrowUpCircleFill/>
            </button>
          </div> */}
    </PhotoLIstItemWrapper>
  );
}

export default PhotoListItem;