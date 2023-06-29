import React from 'react';
import styled from 'styled-components';
import Comment from './Comment';


const CommentListWrapper = styled.div`

`

function CommentList({post}) {
const {name, comments, setComment} = post;
console.log(setComment);
  return (
    <CommentListWrapper>
      {comments.map((comment) => <Comment key={comment.id} name={name} comment={comment} />)}
    </CommentListWrapper>
  );
}

export default CommentList;