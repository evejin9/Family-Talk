import React, { useState } from 'react';
import styled from 'styled-components';
import { BiSolidCommentDetail, BiCommentDetail } from "react-icons/bi";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import CommentList from './CommentList';
import { Form, useNavigate } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';

const PhotoLIstItemWrapper = styled.div`
background-color: #efeeef;
border-radius: 8px;

  .uploadImage{
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  width: 455px;
  height: 455px;
  overflow: hidden;
  margin-bottom: 5px;
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
  opacity: .5;
  margin: 10px 0 10px 15px;
  width: 390px;
  flex-wrap: wrap;
  }


  button {
  background: none;
  outline: none;
  border: none;
  }

  .writePost {
    position: absolute;
    right: 5px;
    bottom : 60px;

    svg {
      font-size: 30px;
      color: #f5cc8d;
      cursor: pointer;
    }
  }
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
            <button type='button'>
              게시
            </button>
          </div>
          <div className='writePost'>
            <button type='button' variant="primary" onClick={handleShow}>
              <BsFillArrowUpCircleFill/>
            </button>
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    autoFocus
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Example textarea</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
            </Modal>
          </div>
    </PhotoLIstItemWrapper>
  );
}

export default PhotoListItem;