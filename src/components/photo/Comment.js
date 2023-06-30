import React from 'react';
import styled from 'styled-components';

const CommentWrapper = styled.div`
  height: auto;
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
`

function Comment({comment}) {
  // console.log(comment);
  return (
    <CommentWrapper>
      <div className='name'>
        {comment.name}
      </div>
      <div className='content'>
        {comment.content}
      </div>
    </CommentWrapper>
  );
}

export default Comment;