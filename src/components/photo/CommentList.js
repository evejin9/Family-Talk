import React from 'react';
import styled from 'styled-components';
import Comment from './Comment';


const CommentListWrapper = styled.div`
overflow: auto;
`

function CommentList({comments}) {
console.log(comments);
  return (
    <CommentListWrapper>
      {/* {comments.map((comment) => <Comment key={comment.commentId} commentName={comment.commentName} commentContent={comment.commentContent} />)} */}
    </CommentListWrapper>
  );
}

export default CommentList;