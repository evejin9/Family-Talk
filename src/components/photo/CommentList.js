import React from 'react';
import styled from 'styled-components';
import Comment from './Comment';


// const CommentListWrapper = styled.div`
// overflow: auto;
// `

function CommentList({comments, removeComment}) {
  console.dir(comments)
  return (
    <div>
      {comments.map((comment) => <Comment key={comment.commentId} id={comment.commentId} commentName={comment.commentName} commentContent={comment.commentContent} removeComment={removeComment}/>)}
    </div>
  );
}

export default CommentList;