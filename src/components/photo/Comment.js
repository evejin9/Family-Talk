import React from 'react';
import styled from 'styled-components';

const CommentWrapper = styled.div`
  .name{ 
    display: inline;
    font-size: 12px;
    font-weight: bold;
    margin-left: 20px;
    margin-right: 10px;
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