import React from 'react';
import styled from 'styled-components';
import { IoMdRemoveCircleOutline } from "react-icons/io";

const CommentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* height: auto; */
  .flexdiv {
    width: 100%
  }
  & + & {
    margin-top: 1%;
  } 

  .name{ 
    display: inline;
    font-size: 12px;
    font-weight: bold;
    margin-right: 2%;
  }
  .content {
    display: inline;
    font-size: 12px;
  }
  svg {
    color: orange;
    cursor: pointer;
  }
`

function Comment({commentName, commentContent, id, removeComment}) {
  return (
    <CommentWrapper>
      <div className='flexdiv'>
        <div className='name'>
          {commentName}
        </div>
        <div className='content'>
          {commentContent}
        </div>
      </div>
      <div className='commentRemove'>
        <IoMdRemoveCircleOutline onClick={() => {removeComment(id);}}/>
      </div>
    </CommentWrapper>
  );
}

export default Comment;