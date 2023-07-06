import React from 'react';
import styled from 'styled-components';
import Comment from './Comment';


const CommentListWrapper = styled.div`

`

function CommentList({comments}) {
console.log(comments);
  return (
    <CommentListWrapper>
      {comments.map((comment) => <Comment key={comment.id} name={comments.name} comment={comment} />)}
    </CommentListWrapper>
  );
}

export default CommentList;