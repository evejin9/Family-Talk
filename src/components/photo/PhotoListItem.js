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

  .uploadImage{
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  width: 455px;
  max-height: 455px;
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
    margin-right: 310px;
  }
  svg {
    font-size: 30px;
    cursor: pointer;
    color: gray;
  }
}

input {
  background: none;
  outline: none;
  border: none;
  border-bottom: solid 1px black;
  opacity: .5;
  margin: 10px 0 10px 15px;
  width: 390px;
  flex-wrap: wrap;
  }


  button {
  background: none;
  outline: none;
  border: none;
  svg {
    color: gray;
  }
  }

  .writePost {
    position: absolute;
    right: 5px;
    bottom : 60px;

    svg {
      font-size: 30px;
      color: #f5cc8d;
      cursor: pointer;

      &:hover {
        color: red;
      }
    }
  }
  .commentButton {
    svg {
    font-size: 30px;
    color: #f5cc8d;
    cursor: pointer;
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
      <div className='profile'>
        <img src={post.profileImage} alt='profileImg'></img>
        <div className='name'>{post.name}</div>
        <div className='moreView'><FiMoreHorizontal/></div>
      </div>
        <div className='uploadImage'>
          <img src={post.imagePath} alt='img'></img>
        </div>
          <div className='icon'>
            <button type='button' onClick={() => {setLike(!like)}}>
              {like ? <FaRegHeart /> : <FaHeart style={{color: 'red'}}/>}
            </button>
            
            <button type="button" onClick={() => {setVisible(!visible)}}>
              {visible ? <BiCommentDetail/> : <BiSolidCommentDetail/>}
            </button> 
          </div>
          <div className='postContent'>{post.content}</div>
          <CommentList key={post.id} post={post}/>
          <div className='writeComment'>
            <input type='text'>
            </input>
            <button type='button' className='commentButton'>
              <BsFillArrowUpCircleFill/>
            </button>
          </div>
          <div className='writePost'>
            <button type='button' variant="primary" onClick={handleShow}>
              <AiFillPlusCircle/>
            </button>
            <div className='modal'>
              <StyledModal show={show} onHide={handleClose} 
              style={{

              }}>
                <Modal.Header closeButton style={{backgroundColor: '#efeeef'}}>
                </Modal.Header>
                <Modal.Body 
                style={{
                  backgroundColor: '#efeeef',
                  height: '180px'
                  }}>
                  <input type='file'></input>
                  <input style={{
                    width: '465px',
                    height: '100px',
                    marginTop: '20px',
                    backgroundColor: '#efeeef'
                    }} 
                    type='text'>
                  </input>
                </Modal.Body>
                <Modal.Footer style={{backgroundColor: '#efeeef'}}>
                  <Button variant="primary" onClick={handleClose} 
                  style={{
                    backgroundColor: '#f5cc8d',
                    border: 'none'
                    }}>
                    게시
                  </Button>
                </Modal.Footer>
              </StyledModal>
            </div>
          </div>
    </PhotoLIstItemWrapper>
  );
}

export default PhotoListItem;